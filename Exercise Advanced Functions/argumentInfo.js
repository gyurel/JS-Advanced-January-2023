function solve(...args){
    let resultObj = {};


    for (const element of args) {
        let currentType = typeof element;
        if(resultObj[currentType]){
            resultObj[currentType] += 1;
        }else{
            resultObj[currentType] = 1;
        }
        console.log(`${currentType}: ${element}`);
    }

    let newArr = Array.from(Object.entries(resultObj)).sort(
        function (a, b){
            return b[1] - a[1];
        }
    );

    for (const type of newArr) {
        console.log(`${type[0]} = ${type[1]}`);
    }
}

solve('cat', 42, function () { console.log('Hello world!'); });
