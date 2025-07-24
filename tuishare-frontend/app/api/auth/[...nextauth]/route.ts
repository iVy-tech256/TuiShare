import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectDB } from "@/lib/mongoose";
import Supporter from "@/models/Supporter";
import Student from "@/models/Student";
import School from "@/models/School";
import bcrypt from "bcryptjs";

// Helper to get user by type and email
const getUser = async (type: string, email: string) => {
  if (type === "supporter") return await Supporter.findOne({ email });
  if (type === "student") return await Student.findOne({ email });
  if (type === "school") return await School.findOne({ schoolEmail: email });
  return null;
};

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        type: { label: "User Type", type: "text" },
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        await connectDB();
        const { type, email, password } = credentials as Record<string, string>;
        if (!type || !email || !password) return null;
        const user = await getUser(type, email);
        if (!user || !user.password) return null;
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return null;
        // Return user object for session
        return {
          id: user._id.toString(),
          email: user.email || user.schoolEmail,
          type,
          name: user.name || user.fullName || user.schoolName,
        };
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/auth/login",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.type = user.type;
        token.name = user.name;
        token.email = user.email;
      }
      return token;
    },
    async session({ session, token }) {
      // Defensive: ensure session.user exists
      if (!session.user) session.user = {};
      if (token) {
        session.user.id =
          typeof token.id === "string" ? token.id : token.id?.toString();
        session.user.type = token.type as string | undefined;
        session.user.name = token.name as string | undefined;
        session.user.email = token.email as string | undefined;
      }
      return session;
    },
  },
});

export { handler as GET, handler as POST };
