function solve(...params){
    
    let devisor = 0

    for (let index = 1; index < 10; index++) {
        if (params[0] % index == 0 && params[1] % index == 0 && index > devisor){
            devisor = index;
        }        
    }
    console.log(devisor);
}

solve(15, 5);
solve(2154, 458);
