class WineSelection{
    constructor(space){
        this.space = space;
        this.wines = [];
        this.bill = 0;
    }

    reserveABottle (wineName, wineType, price){
        // if(!(typeof wineName == 'string' && typeof wineType == 'string' && typeof price == 'number')){
        //     return;
        // }

        if(this.space == 0){
            throw new Error("Not enough space in the cellar.");
        }

        let currentBottle = {
            wineName, 
            wineType,
            price,
            'paid': false,
        }

        this.wines.push(currentBottle);
        this.space -= 1;
        return `You reserved a bottle of ${wineName} ${wineType} wine.`
    }

    payWineBottle( wineName, price ){
        if(!(typeof wineName == 'string' && typeof price == 'number')){
            return;
        }

        for (const wine of this.wines) {
            if(wine.wineName == wineName){
                if(wine.paid == true){
                    throw new Error(`${wineName} has already been paid.`);
                }else{
                    wine.paid = true;
                    this.bill += price;
                    return `You bought a ${wine.wineName} for a ${price}$.`
                }
            }
        }

        throw new Error(`${wineName} is not in the cellar.`)
    }

    openBottle(wineName){
        for (let index = 0; index < this.wines.length; index++) {
            let currentWine = this.wines[index];

            if(currentWine.paid == false){
                throw new Error(`${wineName} need to be paid before open the bottle.`)
            }else{
                this.wines.splice(index, 1);
                return `You drank a bottle of ${wineName}.`;
            }
            
        }

        throw new Error("The wine, you're looking for, is not found.");
    }

    cellarRevision(wineType){
        if(wineType == undefined){
            let resultArr = [`You have space for ${this.space} bottles more.`, `You paid ${this.bill}$ for the wine.`];

            let sortedWines = this.wines.sort((a, b) => a.wineName.localeCompare(b.wineName));

            for (const wine of this.wines) {
                resultArr.push(`${wine.wineName} > ${wine.wineType} - ${wine.paid == true ? "Has Paid" : "Not Paid"}.`);
            }

            return resultArr.join('\n');
        }else{
            for (const wine of this.wines) {
                if(wine.wineType == wineType){
                    return `${wine.wineName} > ${wine.wineType} - ${wine.paid == true ? "Has Paid" : "Not Paid"}.`;
                }
                
            }

            throw new Error(`There is no ${wineType} in the cellar.`)
        }
    }
}

const selection = new WineSelection(5)
console.log(selection.reserveABottle('Bodegas Godelia Mencía', 'Rose', 144));
console.log(selection.payWineBottle('Bodegas Godelia Mencía', 144));
console.log(selection.reserveABottle('Sauvignon Blanc Marlborough', 'White', 50));
console.log(selection.reserveABottle('Cabernet Sauvignon Napa Valley', 'Red', 120));
console.log(selection.cellarRevision());

// You have space for 2 bottles more.
// You paid 144$ for the wine.
// Bodegas Godelia Mencía > Rose - Has Paid.
// Cabernet Sauvignon Napa Valley > Red - Not Paid.
// Sauvignon Blanc Marlborough > White - Not Paid.
