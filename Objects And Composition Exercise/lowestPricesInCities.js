function solve(inputArr){
    let resultObj = {};

    for (const town of inputArr) {
        let [city, product, price] = town.split(' | ');
        if(resultObj.hasOwnProperty(product) && Number(price) < resultObj[product]['price']){
            resultObj[product] = {'productName': product, 'cityName': city, 'price': Number(price)};
        }else if(!resultObj.hasOwnProperty(product)){
            resultObj[product] = {'productName': product, 'cityName': city, 'price': Number(price)};
        }
    }

    for (const value of Object.values(resultObj)){
        console.log(`${value['productName']} -> ${value['price']} (${value['cityName']})`);
    }

    // console.log(resultObj);
}

solve(['Sample Town | Sample Product | 1000',
'Sample Town | Orange | 2',
'Sample Town | Peach | 1',
'Sofia | Orange | 3',
'Sofia | Peach | 2',
'New York | Sample Product | 1000.1',
'New York | Burger | 10']
);
