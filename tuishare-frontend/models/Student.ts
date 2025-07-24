import mongoose, { Schema } from "mongoose";

const StudentSchema = new Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  schoolId: { type: String, required: true },
  schoolName: { type: String, required: true },
  password: { type: String, required: true },
});

export default mongoose.models.Student ||
  mongoose.model("Student", StudentSchema);
