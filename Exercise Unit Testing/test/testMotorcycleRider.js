const { expect, assert } = require('chai');
const motorcycleRider = require('../Motorcycle Rider.js').motorcycleRider;

// const motorcycleRider = {
//     licenseRestriction(category) {
//       if (category === "AM") {
//         return 'Mopeds with a maximum design speed of 45 km. per hour, engine volume is no more than 50 cubic centimeters, and the minimum age is 16.'
//       } else if (category === "A1") {
//         return 'Motorcycles with engine volume is no more than 125 cubic centimeters, maximum power of 11KW. and the minimum age is 16.'
//       } else if (category === "A2") {
//         return 'Motorcycles with maximum power of 35KW. and the minimum age is 18.'
//       } else if (category === "A") {
//         return 'No motorcycle restrictions, and the minimum age is 24.'
//       } else {
//         throw new Error("Invalid Information!");
//       }
//     },
//     motorcycleShowroom(engineVolume, maximumEngineVolume) {
//       if (!Array.isArray(engineVolume) || typeof maximumEngineVolume !== "number" || engineVolume.length < 1 || maximumEngineVolume < 50) {
//         throw new Error("Invalid Information!");
//       }
//       let availableBikes = [];
//       engineVolume.forEach((engine) => {
  
//         if (engine <= maximumEngineVolume && engine >= 50) {
//           availableBikes.push(engine);
//         }
//       });
//       return `There are ${availableBikes.length} available motorcycles matching your criteria!`;
//     },
//     otherSpendings(equipment, consumables, discount) {
//       if (
//         !Array.isArray(equipment) ||
//         !Array.isArray(consumables) ||
//         typeof discount !== "boolean"
//       ) {
//         throw new Error("Invalid Information!");
//       }
//       let totalPrice = 0;
  
//       equipment.forEach((element) => {
//         if (element === "helmet") {
//           totalPrice += 200
//         } else if (element === "jacked") {
//           totalPrice += 300
//         }
//       });
  
//       consumables.forEach((element) => {
//         if (element === "engine oil") {
//           totalPrice += 70
//         } else if (element === "oil filter") {
//           totalPrice += 30
//         }
//       });
//       if (discount) {
//         totalPrice = totalPrice * 0.9;
//         return `You spend $${totalPrice.toFixed(2)} for equipment and consumables with 10% discount!`
//       } else {
//         return `You spend $${totalPrice.toFixed(2)} for equipment and consumables!`
//       }
  
//     }
//   };


describe("motorcycleRider", function() {
    describe("licenseRestriction", function() {
        it("function throws an error when invalid argument passed", function() {
            expect(() => {
                motorcycleRider.licenseRestriction(5);
            }).to.throw("Invalid Information!");
        });

        it("function returns correct results with correct argument AM", function(){
            assert.equal(motorcycleRider.licenseRestriction("AM"), 'Mopeds with a maximum design speed of 45 km. per hour, engine volume is no more than 50 cubic centimeters, and the minimum age is 16.')
        })

        it("function returns correct results with correct argument A1", function(){
            assert.equal(motorcycleRider.licenseRestriction("A1"), 'Motorcycles with engine volume is no more than 125 cubic centimeters, maximum power of 11KW. and the minimum age is 16.')
        })

        it("function returns correct results with correct argument A2", function(){
            assert.equal(motorcycleRider.licenseRestriction("A2"), 'Motorcycles with maximum power of 35KW. and the minimum age is 18.')
        })

        it("function returns correct results with correct argument A", function(){
            assert.equal(motorcycleRider.licenseRestriction("A"), 'No motorcycle restrictions, and the minimum age is 24.')
        })
     });
     
    describe("motorcycleShowroom", function() {
        it("function throws if first argument not an array", function(){
            expect(()=>{
                motorcycleRider.motorcycleShowroom(5, 100);
            }).to.throw("Invalid Information!");
        })

        it("function throws if first argument length less than 1", function(){
            expect(()=>{
                motorcycleRider.motorcycleShowroom([], 100);
            }).to.throw("Invalid Information!");
        })

        it("function throws if second argument not a number", function(){
            expect(()=>{
                motorcycleRider.motorcycleShowroom([200, 300], []);
            }).to.throw("Invalid Information!");
        })

        it("function throws if second argument less than 50", function(){
            expect(()=>{
                motorcycleRider.motorcycleShowroom([200, 300], 30);
            }).to.throw("Invalid Information!");
        })

        it("function returns correct answer when all arguments are correct", function(){
            assert.equal(motorcycleRider.motorcycleShowroom([200, 300], 300), `There are 2 available motorcycles matching your criteria!`)
        })
    });

    describe("otherSpendings", function() {
        it("function to throw if first argument different than array", function() {
            expect(()=>{
                motorcycleRider.otherSpendings(5, ['oil', 'cooler'], true);
            }).to.throw("Invalid Information!")
        })

        it("function to throw if second argument different than array", function() {
            expect(()=>{
                motorcycleRider.otherSpendings(['abs', 'servo'], 5, true);
            }).to.throw("Invalid Information!")
        })

        it("function to throw if third argument different than boolean", function() {
            expect(()=>{
                motorcycleRider.otherSpendings(['jacked', 'helmet'], ['oil filter', 'engine oil'], 5);
            }).to.throw("Invalid Information!")
        })

        it("function returns correct answer without discount", function(){
            assert.equal(motorcycleRider.otherSpendings(['jacked', 'helmet'], ['oil filter', 'engine oil'], false), "You spend $600.00 for equipment and consumables!")
        })

        it("function returns correct answer with discount", function(){
            assert.equal(motorcycleRider.otherSpendings(['jacked', 'helmet'], ['oil filter', 'engine oil'], true), "You spend $540.00 for equipment and consumables with 10% discount!")
        })
    });
    
});
