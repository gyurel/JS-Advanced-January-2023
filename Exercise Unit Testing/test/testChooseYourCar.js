const { expect, assert } = require("chai");

let chooseYourCar = require("../chooseYourCar.js").chooseYourCar;

describe("chooseYourCar", function() {
    describe("choosingType", function() {
        it("function throws an error if year less than 1900", function() {
            expect(() => {
                chooseYourCar.choosingType("sedan", "blue", 1800);
            }).to.throw(`Invalid Year!`);
        });

        it("function throws an error if year less than 2022", function() {
            expect(() => {
                chooseYourCar.choosingType("sedan", "blue", 3022);
            }).to.throw(`Invalid Year!`);
            
        });

        it("function throws an error if type not sedan", function() {
            expect(() => {
                chooseYourCar.choosingType("hatchback", "blue", 2000);
            }).to.throw(`This type of car is not what you are looking for.`);
        });

        it("function returns the correct output when all arguments are correct and year is greater or equal to 2010", function() {
            assert.equal(chooseYourCar.choosingType("Sedan", "blue", 2011), `This blue Sedan meets the requirements, that you have.`)
        });
        
        it("function returns the correct output when all arguments are correct and year is less than 2010", function() {
            assert.equal(chooseYourCar.choosingType("Sedan", "blue", 2001), `This Sedan is too old for you, especially with that blue color.`)
        });
     });

     describe("brandName", function() {
        it("function throws an error if first argument is not an array", function() {
            expect(() => {
                chooseYourCar.brandName(5, 5);
            }).to.throw("Invalid Information!");
        });

        it("function throws an error if second argument is not a number", function() {
            expect(() => {
                chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], ["BMW", "Toyota", "Peugeot"]);
            }).to.throw("Invalid Information!");
        });

        it("function throws an error if second argument is less than zero", function() {
            expect(() => {
                chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], -1);
            }).to.throw("Invalid Information!");
        });

        it("function throws an error if second argument equal to array length", function() {
            expect(() => {
                chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], 3);
            }).to.throw("Invalid Information!");
        });

        it("function throws an error if second argument greater than array length", function() {
            expect(() => {
                chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], 10);
            }).to.throw("Invalid Information!");
        });

        it("function returns correct string when all arguments are correct", function() {
            assert.equal(chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], 1), `BMW, Peugeot`);
        });
     });

     describe("carFuelConsumption", function() {
        it("function throws an error if distance in kilometers is less than zero", function() {
            expect(() => {
                chooseYourCar.carFuelConsumption(-200, 10);
            }).to.throw("Invalid Information!");
        });

        it("function throws an error if distance in kilometers not a number", function() {
            expect(() => {
                chooseYourCar.carFuelConsumption("200", 10);
            }).to.throw("Invalid Information!");
        });

        it("function throws an error when consumpion in liters less than zero", function() {
            expect(() => {
                chooseYourCar.carFuelConsumption(200, -10);
            }).to.throw("Invalid Information!");
        });

        it("function throws an error when consumpion in liters not a number", function() {
            expect(() => {
                chooseYourCar.carFuelConsumption(200, "10");
            }).to.throw("Invalid Information!");
        });

        it("function returns the correct answer when consumption per 100km less than 7", function() {
            assert.equal(chooseYourCar.carFuelConsumption(200, 10), `The car is efficient enough, it burns 5.00 liters/100 km.`)
        });
        
        it("function returns the correct answer when consumption per 100km greater than 7", function() {
            assert.equal(chooseYourCar.carFuelConsumption(200, 15), `The car burns too much fuel - 7.50 liters!`)
        });
     });
});
