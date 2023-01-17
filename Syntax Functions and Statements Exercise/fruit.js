function calculatePrise(...params){
    let fruitType = params[0];
    let weightKg = Number(params[1]) / 1000;
    let priceKg = Number(params[2]);
    let money = weightKg * priceKg;

    console.log(`I need $${money.toFixed(2)} to buy ${weightKg.toFixed(2)} kilograms ${fruitType}.`)
}


calculatePrise('orange', 2500, 1.80);
calculatePrise('apple', 1563, 2.35);
