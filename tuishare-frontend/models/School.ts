import mongoose, { Schema } from "mongoose";

const SchoolSchema = new Schema({
  schoolName: { type: String, required: true },
  schoolEmail: { type: String, required: true, unique: true },
  schoolAddress: { type: String, required: true },
  contactPerson: { type: String, required: true },
  password: { type: String, required: true },
});

export default mongoose.models.School || mongoose.model("School", SchoolSchema);
