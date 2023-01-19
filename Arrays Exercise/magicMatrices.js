function solve(matrix){
    let controlDigit = matrix[0].reduce((a, b) => a + b, 0, 0);

    for (let i = 0; i < matrix[0].length; i++) {
        currentRow = matrix[i].reduce((a, b) => a + b, 0, 0);

        if(currentRow != controlDigit){
            return false;
        } 
        currentCol = 0;
        for (let j = 0; j < matrix.length; j++) {
            let currentDigit = matrix[i][j];
            currentCol += currentDigit;
        }
        if(currentCol != controlDigit){
            return false;
        }
        currentCol = 0;
    }

    return true;
}

solve([[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]
   );

solve([[11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]]
   );

solve([[1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]]
   );