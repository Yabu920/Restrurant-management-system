"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderSchema = void 0;
const mongoose = require("mongoose");
exports.OrderSchema = new mongoose.Schema({
    customerName: { type: String, required: true },
    items: [{ type: String, required: true }],
    totalPrice: { type: Number, required: true },
    createdDate: { type: Date, default: Date.now },
});
//# sourceMappingURL=order.schema.js.map