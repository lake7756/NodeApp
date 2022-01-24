import  {reverse}  from "../utility";
import chai from "chai";

describe("Testing app.js",()=>{
    const input = "Hola amigos! Namaste.";
    const output = ".etsamaN !sogima aloH";

    it("Testing 2+2 = 4", ()=>{
        chai.assert.equal(2+2,5);
    })

    it("Testing reverse method",()=>{
        const res = reverse(input);
        chai.assert.equal(res, output);
    })
})