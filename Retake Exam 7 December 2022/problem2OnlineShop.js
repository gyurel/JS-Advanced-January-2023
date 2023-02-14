class OnlineShop{
    constructor(warehouseSpace){
        this.warehouseSpace = warehouseSpace;
        this.products = [];
        this.sales = [];
    }

    loadingStore(product, quantity, spaceRequired){
        if(spaceRequired > this.warehouseSpace){
            throw new Error("Not enough space in the warehouse.");
        }

        let currentProduct = {
            product,
            quantity,
        };

        this.products.push(currentProduct);
        this.warehouseSpace -= spaceRequired;
        return `The ${product} has been successfully delivered in the warehouse.`
    }

    quantityCheck(product, minimalQuantity){
        for (const item of this.products){
            if(item.product == product){
                if(minimalQuantity <= 0){
                    throw new Error("The quantity cannot be zero or negative.");
                }else if(minimalQuantity <= item.quantity){
                    return `You have enough from product ${product}.`;

                }else{
                    let difference = minimalQuantity - item.quantity
                    item.quantity = minimalQuantity;
                    return `You added ${difference} more from the ${product} products.`;
                }
            }
        }
        
        throw new Error(`There is no ${product} in the warehouse.`);
    }

    sellProduct(product){
        for (const item of this.products){
            if(item.product == product){
                item.quantity -= 1;
                let currentProduct = {
                    product,
                    'quantity': 1,
                }
                this.sales.push(currentProduct);
                return `The ${product} has been successfully sold.`
            }
        }
        throw new Error(`There is no ${product} in the warehouse.`);
    }

    revision(){
        let result = [`You sold ${this.sales.length} products today!`, "Products in the warehouse:"];

        if(this.sales.length == 0){
            throw new Error("There are no sales today!");
        }

        this.products.forEach((product) => result.push(`${product.product}-${product.quantity} more left`));
        return result.join('\n');
    }
}




const myOnlineShop = new OnlineShop(500)
console.log(myOnlineShop.loadingStore('headphones', 10, 200));
console.log(myOnlineShop.loadingStore('laptop', 5, 200));

console.log(myOnlineShop.quantityCheck('headphones', 10));
console.log(myOnlineShop.quantityCheck('laptop', 10));

console.log(myOnlineShop.sellProduct('headphones'));
console.log(myOnlineShop.sellProduct('laptop'));

console.log(myOnlineShop.revision());

// The headphones has been successfully delivered in the warehouse. 
// The laptop has been successfully delivered in the warehouse. 
// You have enough from product headphones. 
// You added 5 more from the laptop products. 
// The headphones has been successfully sold. 
// The laptop has been successfully sold. 
// You sold 2 products today!
// Products in the warehouse: 
// headphones-9 more left 
// laptop-9 more left
