"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utility_1 = require("../utility");
const chai_1 = __importDefault(require("chai"));
describe("Testing app.js", () => {
    const input = "Hola amigos! Namaste.";
    const output = ".etsamaN !sogima aloH";
    it("Testing 2+2 = 4", () => {
        chai_1.default.assert.equal(2 + 2, 4);
    });
    it("Testing reverse method", () => {
        const res = (0, utility_1.reverse)(input);
        chai_1.default.assert.equal(res, output);
    });
});
