const { expect, assert } = require("chai");

const findNewApartment = require("../examProblem 3.js").findNewApartment;


describe("findNewApartment", function() {
    describe("isGoodLocation", function() {
        it("function throws if value of first parameter is not a string", function() {
            expect(() => {
                findNewApartment.isGoodLocation(5, false);
            }).to.throw("Invalid input!");
        });

        it("function throws if value of second parameter is not a boolean", function() {
            expect(() => {
                findNewApartment.isGoodLocation('Sofia', 5);
            }).to.throw("Invalid input!");
        });

        it("function returns the correct output if city not one of Sofia, Plovdiv, Varna", function() {
            assert.equal(findNewApartment.isGoodLocation('Haskovo', false), "This location is not suitable for you.");
        });

        
        it("function returns the correct output with correct arguments but second argument true", function() {
            assert.equal(findNewApartment.isGoodLocation('Sofia', true), "You can go on home tour!");
        });

        it("function returns the correct output with correct arguments but second argument false", function() {
            assert.equal(findNewApartment.isGoodLocation('Sofia', false), "There is no public transport in area.");
        });
    });

    describe("isLargeEnough", function() {
        it("function throws if value of first parameter is not a array", function() {
            expect(() => {
                findNewApartment.isLargeEnough(5, 50);
            }).to.throw("Invalid input!");
        });

        it("function throws if the first argument is an empty array", function() {
            expect(() => {
                findNewApartment.isLargeEnough([], 50);
            }).to.throw("Invalid input!");
        });

        it("function throws if value of second parameter is not a number", function() {
            expect(() => {
                findNewApartment.isLargeEnough([20, 70, 60, 30, 80], "a");
            }).to.throw("Invalid input!");
        });

        it("function returns the correct output with first parameter array and second a number", function() {
            assert.equal(findNewApartment.isLargeEnough([20, 70, 60, 30, 80], 25), "70, 60, 30, 80");
        });
    });

    describe("isItAffordable", function() {
        it("function throws if value of first parameter is not a number", function() {
            expect(() => {
                findNewApartment.isItAffordable('2000', 2500);
            }).to.throw("Invalid input!");
        });

        it("function throws if value of second parameter is not a number", function() {
            expect(() => {
                findNewApartment.isItAffordable(2000, '2500');
            }).to.throw("Invalid input!");
        });

        it("function throws if value of fist parameter is less than zero", function() {
            expect(() => {
                findNewApartment.isItAffordable(-2000, 2500);
            }).to.throw("Invalid input!");
        });

        it("function throws if value of second parameter is less than zero", function() {
            expect(() => {
                findNewApartment.isItAffordable(2000, -2500);
            }).to.throw("Invalid input!");
        });

        it("function returns the correct output if budget less than price", function() {
            assert.equal(findNewApartment.isItAffordable(20000, 2500), "You don't have enough money for this house!");
        });

        it("function returns the correct output if budget enough", function() {
            assert.equal(findNewApartment.isItAffordable(2000, 2500), "You can afford this home!");
        });
    });
});
