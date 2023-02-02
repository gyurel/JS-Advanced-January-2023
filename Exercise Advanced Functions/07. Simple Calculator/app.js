function calculator() {
    let num1;
    let num2;
    let resultField;


    return {
        init: function (selector1, selector2, resultSelector){
            num1 = document.querySelector(selector1);
            num2 = document.querySelector(selector2);
            resultField = document.querySelector(resultSelector);
            return num1, num2, resultField
        },
    
        
        add: function (){
            debugger
            let result = Number(num1.value ) + Number(num2.value);
            resultField.value = result;
        },
    
        subtract: function (){
            let result = Number(num1.value ) - Number(num2.value);
            resultField.value = result;
            },
    } 
}

const calculate = calculator (); 
calculate.init ('#num1', '#num2', '#result'); 
