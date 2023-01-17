function solve(nr){
    let numbString = nr.toString().split('');

    let firstDigit = numbString[0];

    let arrSum = 0;

    let allSame = numbString.every((current)=> current == firstDigit);
    let sum = numbString.map((a)=>Number(a)).reduce((a, b)=> a+b, arrSum);
    

    console.log(allSame);
    console.log(sum);

}

solve(2222222);
solve(1234);
