import mongoose, { Schema } from "mongoose";

const SupporterSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  country: { type: String, required: true },
});

export default mongoose.models.Supporter ||
  mongoose.model("Supporter", SupporterSchema);
