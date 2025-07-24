import mongoose, { Schema, Document, Model } from "mongoose";

export interface IStudent extends Document {
  fullName: string;
  email: string;
  schoolId: string;
  schoolName: string;
  password: string;
}

const StudentSchema: Schema = new Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  schoolId: { type: String, required: true },
  schoolName: { type: String, required: true },
  password: { type: String, required: true },
});

// Prevent model overwrite issues in Next.js
export default (mongoose.models.Student as Model<IStudent>) ||
  mongoose.model<IStudent>("Student", StudentSchema);
