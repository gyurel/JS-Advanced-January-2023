function add(number){
    let sum = 0;
    
    

    function innerAdd(number2){
        sum += number2;
        return innerAdd;
    }

    innerAdd.toString = () => {
        return sum;
    }

    return innerAdd(number);
}

console.log(add(4)(3).toString());