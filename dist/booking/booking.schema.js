"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingSchema = void 0;
const mongoose_1 = require("mongoose");
exports.BookingSchema = new mongoose_1.Schema({
    user: { type: mongoose_1.Schema.Types.ObjectId, ref: 'User' },
    tableNumber: Number,
    createdAt: { type: Date, default: Date.now },
});
//# sourceMappingURL=booking.schema.js.map