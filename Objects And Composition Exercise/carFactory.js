function solve(currentCarOrder){
    let resultObj = {};

    let engines = {
        'smallEngine': { 'power': 90, 'volume': 1800 },
        'normalEngine': { 'power': 120, 'volume': 2400 },
        'monsterEngine': { 'power': 200, 'volume': 3500 },
    }

    
    let carriages = {
        'hatchback': { 'type': 'hatchback', 'color': '<as required>' },
        'coupe': { 'type': 'coupe', 'color': '<as required>' },
    }
    

    resultObj['model'] = currentCarOrder['model'];

    for (const value of Object.values(engines)) {
        if(value['power'] >= currentCarOrder['power']){
            resultObj['engine'] = value;
            break;
        }
    }

    resultObj['carriage'] = carriages[currentCarOrder['carriage']];
    resultObj['carriage']['color'] = currentCarOrder['color'];

    let wheelSize = currentCarOrder['wheelsize']
    if(currentCarOrder['wheelsize'] % 2 == 0){
        wheelSize -= 1
    }

    resultObj['wheels'] = Array(4).fill(wheelSize);

    // console.log(resultObj);
    return resultObj;
}

solve({ model: 'VW Golf II',
power: 90,
color: 'blue',
carriage: 'hatchback',
wheelsize: 14 }
);

solve({ model: 'Opel Vectra',
power: 110,
color: 'grey',
carriage: 'coupe',
wheelsize: 17 }
);
