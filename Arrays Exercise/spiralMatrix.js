function solve(length, width){
    let maxNum = length * width;
    let counterRounds = 0;
    let counterNumber = 1;
    let spiralMatrix = [];

    for (let index = 0; index < length; index++) {
        let currentArr = [];
        for (let i = 0; i < width; i++) {
            currentArr.push(0);
        }
        spiralMatrix.push(currentArr);
    }

    while(counterNumber < maxNum + 1){
        for (let t = 0 + counterRounds; t < spiralMatrix[0 + counterRounds].length - counterRounds; t++) {
            spiralMatrix[counterRounds][t] = counterNumber;
            counterNumber++;   
        };
        for (let r = 1 + counterRounds; r < spiralMatrix.length - counterRounds; r++) {
            spiralMatrix[r][spiralMatrix.length - 1 - counterRounds] = counterNumber;
            counterNumber++;
        };
        for (let b = spiralMatrix[0].length - 2 - counterRounds; b > -1 + counterRounds; b--) {
            spiralMatrix[spiralMatrix.length - 1 - counterRounds][b] = counterNumber;
            counterNumber++;
        };
        for (let l = spiralMatrix.length - 2 - counterRounds; l > 0 + counterRounds; l--) {
            spiralMatrix[l][counterRounds] = counterNumber;
            counterNumber++;
        }
        counterRounds++;
    }

    for (const arr of spiralMatrix) {
        console.log(arr.join(' '));
    }
}


solve(5, 5);
solve(3, 3);
