function solve(arr, rotations){
    let resultArr = arr;

    for (let index = 0; index < rotations; index++) {
        resultArr.unshift(resultArr.pop());
    }

    console.log(resultArr.join(' '));
}

solve(['1', 
'2', 
'3', 
'4'], 
2
);

solve(['Banana', 
'Orange', 
'Coconut', 
'Apple'], 
15
);
