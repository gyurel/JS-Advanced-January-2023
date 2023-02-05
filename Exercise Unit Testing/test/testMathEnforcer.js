const {expect, assert} = require("chai");
const mathEnforcer = require("../mathEnforcer.js").mathEnforcer; 

describe('mathEnforcer', () => {
    it('if argument different than a number .addFive returns undefined', () => {
        expect(mathEnforcer.addFive('five')).to.be.undefined;
    })

    it('function .addFive gets correct number argument and adds five', () => {
        assert.equal(mathEnforcer.addFive(5), 10);
    })

    it('function .addFive returns correct answer with a floating point number', () => {
        assert.equal(mathEnforcer.addFive(5.5), 10.5);
    })

    it('if argument different than a number .subtractTen returns undefined', () => {
        expect(mathEnforcer.subtractTen('five')).to.be.undefined;
    })

    it('function .subtractTen gets correct number argument and subtracts ten', () => {
        assert.equal(mathEnforcer.subtractTen(5), -5);
    })

    it('function .subtractTen returns correct answer with a floating point number', () => {
        assert.equal(mathEnforcer.subtractTen(10.5), 0.5);
    })

    it('if any argument different than a number .sum returns undefined', () => {
        expect(mathEnforcer.sum('five', 5)).to.be.undefined;
    })

    it('function .sum gets correct number arguments and sums them', () => {
        assert.equal(mathEnforcer.sum(5, 5), 10);
    })

    it('function .sum gets a floating point argument argument and sums them correctly', () => {
        assert.equal(mathEnforcer.sum(5.5, 5), 10.5);
    })
});