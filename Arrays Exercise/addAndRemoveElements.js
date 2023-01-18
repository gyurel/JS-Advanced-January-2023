function solve(arr){
    let inputCommands = arr;

    let resultArr = [];
    
    // const commands = {
    //     'add': (resultArr, index) => resultArr.push(index),
    //     'remove': (resultArr) => resultArr.pop(),
    // };

    for (let index = 1; index < inputCommands.length +1; index++){
        let currentCommand = inputCommands[index - 1];
        if(currentCommand == 'add'){
            // commands[currentCommand];
            resultArr.push(index);
        }else if(currentCommand == 'remove'){
            // commands[currentCommand];
            resultArr.pop();
        }
    }

    if(resultArr.length == 0){
        console.log('Empty');
    }else{
        for (let index = 0; index < resultArr.length; index++) {
            console.log(resultArr[index]);
        }
    }
}

solve(['add', 
'add', 
'add', 
'add']
);

solve(['add', 
'add', 
'remove', 
'add', 
'add']
);

solve(['remove', 
'remove', 
'remove']
);
