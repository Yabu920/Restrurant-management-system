import { Schema } from 'mongoose';

export const MenuSchema = new Schema({
  name: String,
  price: Number,
  description: String,
  available: Boolean,
});
