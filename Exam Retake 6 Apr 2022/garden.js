class Garden {
	constructor(spaceAvailable){
        this.spaceAvailable = spaceAvailable;
        this.plants = [];
        this.storage = [];
    }

    addPlant (plantName, spaceRequired){
        if(this.spaceAvailable < spaceRequired){
            throw new Error("Not enough space in the garden.");
        }

        let currentPlant = {
            plantName, 
            spaceRequired, 
            ripe: false,
            quantity: 0,
        }

        this.spaceAvailable -= currentPlant.spaceRequired;

        this.plants.push(currentPlant);
        return `The ${plantName} has been successfully planted in the garden.`
    }

    ripenPlant(plantName, quantity){
        let currentPlant;
        for (const plant of this.plants) {
            for (const [key, val] of Object.entries(plant)) {
                if(val == plantName){
                    currentPlant = plant;
                }
            }
        }

        if(!currentPlant){
            throw new Error(`There is no ${plantName} in the garden.`);
        }
        
        if(currentPlant.ripe){
            throw new Error(`The ${plantName} is already ripe.`);
        }

        if(quantity <= 0){
            throw new Error(`The quantity cannot be zero or negative.`);
        }

        currentPlant.ripe = true;
        currentPlant.quantity += quantity;

        if(quantity == 1){
            return `${quantity} ${plantName} has successfully ripened.`;
        }else{
            return `${quantity} ${plantName}s have successfully ripened.`;
        }
    }

    harvestPlant(plantName){
        let currentPlant;

        for (const plant of this.plants) {
            for (const [key, val] of Object.entries(plant)) {
                if(val == plantName){
                    currentPlant = plant;
                    break;
                }
                
            }
        }

        if(!currentPlant){
            throw new Error(`There is no ${plantName} in the garden.`)
        }

        if(!currentPlant.ripe){
            throw new Error(`The ${plantName} cannot be harvested before it is ripe.`)
        }

        for (let index = 0; index < this.plants.length; index++) {
            let object = this.plants[index];
            if(object.plantName == currentPlant.plantName){
                this.plants.splice(index, 1);
            }            
        }

        let newPlant = {
            plantName: currentPlant.plantName,
            quantity: currentPlant.quantity,
        }

        this.storage.push(newPlant);

        this.spaceAvailable += currentPlant.spaceRequired;

        return `The ${plantName} has been successfully harvested.`
    }

    generateReport(){
        let resultArr = [`The garden has ${this.spaceAvailable} free space left.`];
        let sortedGarden = this.plants.sort((a, b) => a.plantName.localeCompare(b.plantName));

        let resultString = "Plants in the garden: ";
        let tempArr = [];

        for (const plant of this.plants) {
            let currentName = plant.plantName;
            tempArr.push(currentName);
        }

        let newString = tempArr.join(', ');

        resultString += newString;
        resultArr.push(resultString);

        if(this.storage.length == 0){
            resultArr.push("Plants in storage: The storage is empty.")
        }

        let thirdLineString = "Plants in storage: ";
        let thirdLineArr = [];

        for (const plant of this.storage) {
            thirdLineArr.push(`${plant.plantName} (${plant.quantity})`);
        }

        let tempThirdString = thirdLineArr.join(', ');
        thirdLineString += tempThirdString;
        resultArr.push(thirdLineString);

        return resultArr.join('\n');
    }
}


// const myGarden = new Garden(250)
// console.log(myGarden.addPlant('apple', 20));
// console.log(myGarden.addPlant('orange', 200));
// console.log(myGarden.addPlant('raspberry', 10));
// console.log(myGarden.ripenPlant('apple', 10));
// console.log(myGarden.ripenPlant('orange', 1));
// console.log(myGarden.harvestPlant('orange'));
// console.log(myGarden.generateReport());

// The apple has been successfully planted in the garden.
// The orange has been successfully planted in the garden.
// The raspberry has been successfully planted in the garden.
// 10 apples have successfully ripened.
// 1 orange has successfully ripened.
// The orange has been successfully harvested.
// The garden has 220 free space left.
// Plants in the garden: apple, raspberry
// Plants in storage: orange (1)

const myGarden = new Garden(250)
console.log(myGarden.addPlant('apple', 20));
console.log(myGarden.addPlant('orange', 200));
console.log(myGarden.addPlant('olive', 50));

// The apple has been successfully planted in the garden.
// The orange has been successfully planted in the garden.
// Uncaught Error Error: Not enough space in the garden.
