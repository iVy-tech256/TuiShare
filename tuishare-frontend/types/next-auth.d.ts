import "next-auth";

declare module "next-auth" {
  interface User {
    id?: string;
    type?: string;
    name?: string;
    email?: string;
    fullName?: string;
    schoolName?: string;
    schoolEmail?: string;
  }

  interface Session {
    user: {
      id?: string;
      type?: string;
      name?: string;
      email?: string;
      fullName?: string;
      schoolName?: string;
      schoolEmail?: string;
    };
  }
}
