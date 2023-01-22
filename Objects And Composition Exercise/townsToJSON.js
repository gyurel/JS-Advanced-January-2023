function solve(inputArr){
    let resultArr = [];

    let townLabel = '';
    let latitudeLabel = '';
    let longitudeLabel = '';

    for (let index = 0; index < inputArr.length; index++) {
        if(index == 0){
            let labels = inputArr[index].split(/\s?\|\s?/g);
            townLabel = labels[1];
            latitudeLabel = labels[2];
            longitudeLabel = labels[3];
        }else{
            let splitedInput = inputArr[index].split(/\s?\|\s?/g);
            let currentObj = {};
            currentObj[townLabel] = splitedInput[1];
            currentObj[latitudeLabel] = Number(Number(splitedInput[2]).toFixed(2));
            currentObj[longitudeLabel] = Number(Number(splitedInput[3]).toFixed(2));
            resultArr.push(currentObj);
        }
    }

    console.log(JSON.stringify(resultArr));
}

solve(['| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |']
);

solve(['| Town | Latitude | Longitude |',
'| Veliko Turnovo | 43.0757 | 25.6172 |',
'| Monatevideo | 34.50 | 56.11 |']
);
