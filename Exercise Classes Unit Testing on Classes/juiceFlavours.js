function solve(juiceInfo){

    let juicesStorage = {};
    let bottlesStorage = [];

    juiceInfo.forEach(element => {
        let currentJuiceArr = element.split(' => ');
        let juiceName = currentJuiceArr[0];
        let juiceQuantity = Number(currentJuiceArr[1]);

        if(juicesStorage[juiceName]){
            juicesStorage[juiceName] += juiceQuantity;
        }else{
            juicesStorage[juiceName] = juiceQuantity;
        }

        if(Math.floor(juicesStorage[juiceName] / 1000) > 0){
            let numberOfBottles = Math.floor(juicesStorage[juiceName] / 1000);

            let found = false;

            for (const bottle of bottlesStorage) {
                if(bottle[0] == juiceName){
                    found = true;
                    bottle[1] += numberOfBottles;
                    juicesStorage[juiceName] -= numberOfBottles * 1000;
                }
            }

            if(!found){
                let currentBottleStorage = [juiceName, numberOfBottles];
                bottlesStorage.push(currentBottleStorage);
                juicesStorage[juiceName] -= numberOfBottles * 1000;
            }

            
        }
        
    });

    bottlesStorage.forEach(element => {
        console.log(`${element[0]} => ${element[1]}`);
    });
}


solve(['Kiwi => 234',
'Pear => 2345',
'Watermelon => 3456',
'Kiwi => 4567',
'Pear => 5678',
'Watermelon => 6789']
);
