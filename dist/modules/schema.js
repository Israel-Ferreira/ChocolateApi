"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var ChocolateSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    tipo: { type: String, required: true },
    pais: { type: String, required: true },
    foto: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});
exports.default = ChocolateSchema;
//# sourceMappingURL=schema.js.map