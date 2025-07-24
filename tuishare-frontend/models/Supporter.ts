import mongoose, { Schema, Document, Model } from "mongoose";

export interface ISupporter extends Document {
  name: string;
  email: string;
  country: string;
  password: string;
}

const SupporterSchema: Schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  country: { type: String, required: true },
  password: { type: String, required: true },
});

// Prevent model overwrite issues in Next.js
export default (mongoose.models.Supporter as Model<ISupporter>) ||
  mongoose.model<ISupporter>("Supporter", SupporterSchema);
