const lookupChar = require("../charLookUp.js").lookupChar;
const {expect, assert} = require("chai");

describe("lookupChar", () => {
    it("first argument different than a string returns undefined", () => {
        expect(lookupChar(4, 5)).to.be.undefined;
    })

    it("second argument different than a number returns undefined", () => {
        expect(lookupChar("string", "string")).to.be.undefined;
    })

    it("the second parameter not in the valid index range returns Incorrect index", () => {
        assert.equal(lookupChar("string", 6), "Incorrect index");
    })

    it("the second parameter a negative number returns Incorrect index", () => {
        assert.equal(lookupChar("string", -6), "Incorrect index");
    })

    it("the second argument a floating point number returns Incorrect index", () => {
        expect(lookupChar("string", 0.6)).to.be.undefined;
    })

    it("happy case when bought values correct and function returns char on index", () => {
        assert.equal(lookupChar("string", 0), "s");
    })
})
