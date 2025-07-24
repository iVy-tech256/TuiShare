import mongoose, { Schema, Document, Model } from "mongoose";

export interface ISchool extends Document {
  schoolName: string;
  schoolEmail: string;
  schoolAddress: string;
  contactPerson: string;
  password: string;
}

const SchoolSchema: Schema = new Schema({
  schoolName: { type: String, required: true },
  schoolEmail: { type: String, required: true, unique: true },
  schoolAddress: { type: String, required: true },
  contactPerson: { type: String, required: true },
  password: { type: String, required: true },
});

// Prevent model overwrite issues in Next.js
export default (mongoose.models.School as Model<ISchool>) ||
  mongoose.model<ISchool>("School", SchoolSchema);
