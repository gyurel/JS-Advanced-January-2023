const {expect, assert} = require("chai");
const isOddOrEven = require("../isOddOrEven.js").isOddOrEven;


describe("isOddOrEven", () => {
    it ("function called with number argument", () => {
        expect(isOddOrEven(1)).to.be.undefined;
    })

    it("function returns undefined with array argument", () => {
        expect(isOddOrEven([1, 2, 3])).to.be.undefined;
    })

    it("function called without argument returns undefined", () => {
        expect(isOddOrEven()).to.be.undefined;
    })

    it("string length is even", () => {
        assert.equal(isOddOrEven('me'), 'even');
    })

    it("string argument length is odd", () => {
        assert.equal(isOddOrEven("odd"), "odd");
    })

    it
});
