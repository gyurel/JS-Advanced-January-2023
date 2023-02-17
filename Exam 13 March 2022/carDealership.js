class CarDealership{
    constructor(name){
        this.name = name;
        this.availableCars = [];
        this.soldCars = [];
        this.totalIncome = 0;
    }

    addCar (model, horsepower, price, mileage){
        if(!(typeof model == 'string'&& model != '' && typeof horsepower == 'number' 
        && horsepower >= 0 && typeof price == 'number' && price >= 0 
        && typeof mileage == 'number' && mileage >= 0)){
            throw new Error("Invalid input!");
        }

        let currentCar = {model, horsepower, price, mileage}
        this.availableCars.push(currentCar);

        return `New car added: ${model} - ${horsepower} HP - ${mileage.toFixed(2)} km - ${price.toFixed(2)}$`
    }

    sellCar (model, desiredMileage){
        for (let index = 0; index < this.availableCars.length; index++) {
            let car = this.availableCars[index];
            let sellPrice;

            if(car.model == model){
                let mileageDiff = car.mileage - desiredMileage;

                if(car.mileage <= desiredMileage){
                    sellPrice = car.price;

                }else if(mileageDiff <= 40000){
                    sellPrice = car.price * 0.95;

                }else{
                    sellPrice = car.price * 0.9;
                }
            
            let currentCar = {model,
                 'horsepower': car.horsepower,
                 sellPrice,
                }
            this.soldCars.push(currentCar);

            this.totalIncome += sellPrice;

            return `${model} was sold for ${sellPrice.toFixed(2)}$`
            }
        }

        throw new Error(`${model} was not found!`)
    }

    currentCar (){
        if(this.availableCars.length == 0){
            return "There are no available cars";
        }

        let resultText = ["-Available cars:"]
        
        this.availableCars.forEach((e) => resultText.push(`---${e.model} - ${e.horsepower} HP - ${e.mileage.toFixed(2)} km - ${e.price.toFixed(2)}$`));
        return resultText.join('\n');
    }

    salesReport (criteria){
        if(!(criteria == 'horsepower' || criteria == 'model')){
            throw new Error("Invalid criteria!");
        }

        let sortedArr;
        if(criteria == 'horsepower'){
            sortedArr = this.soldCars.sort((a, b) => b.horsepower - a.horsepower);
        }else{
            sortedArr = this.soldCars.sort((a,b) => a.model.localeCompare(b.model));
        }

        let resultArr = [`-${this.name} has a total income of ${this.totalIncome.toFixed(2)}$`, `-${this.soldCars.length} cars sold:`];

        sortedArr.forEach((car) => resultArr.push(`---${car.model} - ${car.horsepower} HP - ${car.sellPrice.toFixed(2)}$`));

        return resultArr.join('\n');
    }
}


let dealership = new CarDealership('SoftAuto');
dealership.addCar('Toyota Corola', 100, 3500, 190000);
dealership.addCar('Mercedes C63', 300, 29000, 187000);
dealership.addCar('Audi A3', 120, 4900, 240000);
dealership.sellCar('Toyota Corolla', 230000);
dealership.sellCar('Mercedes C63', 110000);
console.log(dealership.salesReport('horsepower'));

// -SoftAuto has a total income of 29600.00$
// -2 cars sold:
// ---Mercedes C63 - 300 HP - 26100.00$
// ---Toyota Corolla - 100 HP - 3500.00$
