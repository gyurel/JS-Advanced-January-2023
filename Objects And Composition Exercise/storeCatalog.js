function solve(products){
    let resultObject = {}

    for (const articule of products) {
        let key = articule[0].toUpperCase();
        let [product, price] = articule.split(' : ');
        price = Number(price);

        if(!resultObject.hasOwnProperty(key)){
            resultObject[key] = {};
            resultObject[key][product] = price;
        }else{
            resultObject[key][product] = price;
        }
    }

    let sortedObject = Object.keys(resultObject).sort((a, b) => a.localeCompare(b));


    for (const key of sortedObject) {
        console.log(key);
        let sortedProducts = Object.keys(resultObject[key]).sort((a, b) => a.localeCompare(b));
        for (const product of sortedProducts) {
            let currentProduct = product;
            let currentPrice = resultObject[key][product];
            console.log(`  ${currentProduct}: ${currentPrice}`);
        }
    }
}

// solve(['Appricot : 20.4',
// 'Fridge : 1500',
// 'TV : 1499',
// 'Deodorant : 10',
// 'Boiler : 300',
// 'Apple : 1.25',
// 'Anti-Bug Spray : 15',
// 'T-Shirt : 10']
// );

solve(['Banana : 2',
"Rubic's Cube : 5",
'Raspberry P : 4999',
'Rolex : 100000',
'Rollon : 10',
'Rali Car : 2000000',
'Pesho : 0.000001',
'Barrel : 10']
);
