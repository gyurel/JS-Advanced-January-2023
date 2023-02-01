function solution(){
    let receiptsObj = {
        'apple': {'carbohydrate': 1, 'flavour': 2},
        'lemonade': {'carbohydrate': 10,  'flavour': 20},
        'burger': {'carbohydrate': 5, 'fat': 7, 'flavour': 3},
        'eggs': {'protein': 5, 'fat': 1, 'flavour': 1},
        'turkey': {'protein': 10,'carbohydrate': 10,'fat': 10, 'flavour': 10},
    };

    let stocksObj = {
        'protein': 0,
        'carbohydrate': 0,
        'fat': 0,
         'flavour': 0,
        };

    return function manufacturer(args){
        let commandsArr = args.split(' ');
        let command = commandsArr[0];

        if(command == 'restock'){
            let item = commandsArr[1];
            let quantity = Number(commandsArr[2]);

            stocksObj[item] += quantity;
            return "Success";
        }else if(command == 'prepare'){
            let item = commandsArr[1];
            let quantity = Number(commandsArr[2]);

            let currentReceipt = receiptsObj[item]

            for (const component of Object.entries(currentReceipt)) {
                let neededQuantity = quantity * component[1];

                if(stocksObj[component[0]] >= neededQuantity){
                    stocksObj[component[0]] -= neededQuantity;
                }else{
                    return `Error: not enough ${component[0]} in stock`
                }
            }

            return "Success";
        }else{
            return `protein=${stocksObj['protein']} carbohydrate=${stocksObj['carbohydrate']} fat=${stocksObj['fat']} flavour=${stocksObj['flavour']}`;
        }
    }
}

let manager = solution(); 
console.log (manager("restock carbohydrate 10")); // Success 
console.log (manager("restock flavour 10")); // Error: not enough carbohydrate in stock 
console.log (manager("prepare apple 1"));
console.log (manager("restock fat 10"));
console.log (manager("prepare burger 1"));
console.log (manager("report"));
