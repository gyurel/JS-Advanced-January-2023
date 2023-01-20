function solve(arr){

    let resultObj = {};

    while(arr.length > 0){
        let propertyName = arr.shift();
        let propertyValue = arr.shift();
        resultObj[propertyName] = Number(propertyValue);
    }

    console.log(resultObj);
}


solve(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);

solve(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']);
