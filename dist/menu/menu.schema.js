"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuSchema = void 0;
const mongoose_1 = require("mongoose");
exports.MenuSchema = new mongoose_1.Schema({
    name: String,
    price: Number,
    description: String,
    available: Boolean,
});
//# sourceMappingURL=menu.schema.js.map