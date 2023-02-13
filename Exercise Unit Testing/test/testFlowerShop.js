const { assert, expect } = require("chai");

const flowerShop = {
    calcPriceOfFlowers(flower, price, quantity) {
         if (typeof flower != 'string' || !Number.isInteger(price) || !Number.isInteger(quantity)) {
             throw new Error('Invalid input!');
         } else {
             let result = price * quantity;
             return `You need $${result.toFixed(2)} to buy ${flower}!`;
       }
   },
    checkFlowersAvailable(flower, gardenArr) {
       if (gardenArr.indexOf(flower) >= 0) {
           return `The ${flower} are available!`;
       } else {
           return `The ${flower} are sold! You need to purchase more!`;
       }
   },
    sellFlowers(gardenArr, space) {
       let shop = [];
       let i = 0;
       if (!Array.isArray(gardenArr) || !Number.isInteger(space) || space < 0 || space >= gardenArr.length) {
           throw new Error('Invalid input!');
       } else {
           while (gardenArr.length > i) {
               if (i != space) {
                   shop.push(gardenArr[i]);
               }
               i++
           }
       }
       return shop.join(' / ');
   }
}

describe("flowerShop", function() {
    describe("calcPriceOfFlowers", function() {

        it("the function returns the product result of the multiplication of price and quantity", function() {
            assert.equal(flowerShop.calcPriceOfFlowers('rose', 5, 5), 'You need $25.00 to buy rose!')
        });

        it("the function throws an error with invalid fist parameter different than a string", function(){
            expect(() => {
                flowerShop.calcPriceOfFlowers(5, 5, 5);
            }).to.throw('Invalid input!');
        });

        it("the function throws an error with invalid second different than a number", function(){
            expect(() => {
                flowerShop.calcPriceOfFlowers(5, 'rose', 5);
            }).to.throw('Invalid input!');
        });

        it("the function throws an error with invalid third parameter different than a number", function(){
            expect(() => {
                flowerShop.calcPriceOfFlowers(5, 5, 'rose');
            }).to.throw('Invalid input!');
        });

        it("the result is rounded to the second digit after the decimal point", function() {
            assert.equal(flowerShop.calcPriceOfFlowers('rose', 5, 5), 'You need $25.00 to buy rose!')
        });
     });

     describe("checkFlowersAvailable", function() {

        it("function returns the correct result when the flower is in the array", function() {
            assert.equal(flowerShop.checkFlowersAvailable('Rose', ['Rose', 'Lily', 'Orchid']), `The Rose are available!`);
        });

        it("function returns the correct result when the flower is not in the array", function() {
            assert.equal(flowerShop.checkFlowersAvailable('Rose', ['rose', 'Lily', 'Orchid']), 'The Rose are sold! You need to purchase more!');
        });

        
     });

     describe("sellFlowers", function() {

        it("function throws an error with invalid fist argument different than an array", function() {
            expect(() => {
                flowerShop.sellFlowers(5, 5);
            }).to.throw('Invalid input!');
        });

        it("function throws an error with invalid second argument different than a number", function() {
            expect(() => {
                flowerShop.sellFlowers(['Rose', 'Lyly', 'Orchid'], []);
            }).to.throw('Invalid input!');
        });

        it("function throws an error with when second argument out of range", function() {
            expect(() => {
                flowerShop.sellFlowers(['Rose', 'Lyly', 'Orchid'], 3);
            }).to.throw('Invalid input!');
        });

        it("function returns correct result when passed correct arguments", function() {
            assert.equal(flowerShop.sellFlowers(['Rose', 'Lyly', 'Orchid'], 0), 'Lyly / Orchid');
        });
     });
});
