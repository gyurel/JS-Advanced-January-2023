function sortArray(...params){

    return function execute(){
        if(params[1] == 'asc'){
            return params[0].sort((a, b) => a - b);
        }else{
            return params[0].sort((a, b) => b - a);
        }   
    }();
}

sortArray([14, 7, 17, 6, 8], 'asc');
sortArray([14, 7, 17, 6, 8], 'desc');
