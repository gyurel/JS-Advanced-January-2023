function solve(arr){
    let resultArr = [arr[0]];

    for (let index = 1; index < arr.length; index++) {
        let current = arr[index];
        if(current > resultArr[resultArr.length - 1]){
            resultArr.push(current);
        }
    }

    console.log(resultArr);
}

solve([1, 
    3, 
    8, 
    4, 
    10, 
    12, 
    3, 
    2, 
    24]
);

solve([1, 
    2, 
    3,
    4]
);

solve([20, 
    3, 
    2, 
    15,
    6, 
    1]
);

