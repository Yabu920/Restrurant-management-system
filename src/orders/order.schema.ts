import * as mongoose from 'mongoose';

export const OrderSchema = new mongoose.Schema({
  customerName: { type: String, required: true },
  items: [{ type: String, required: true }],
  totalPrice: { type: Number, required: true },
  createdDate: { type: Date, default: Date.now },
});
