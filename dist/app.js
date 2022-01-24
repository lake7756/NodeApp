"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const utility_1 = require("./utility");
const app = (0, express_1.default)();
app.get("/", (req, res) => {
    const output = (0, utility_1.reverse)("Hola amigos! Namaste.");
    res.send(output);
});
app.listen("8000", () => {
    console.log("Server is running at port 8000");
});
