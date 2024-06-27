import { Schema } from 'mongoose';

export const BookingSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  tableNumber: Number,
  createdAt: { type: Date, default: Date.now },
});
