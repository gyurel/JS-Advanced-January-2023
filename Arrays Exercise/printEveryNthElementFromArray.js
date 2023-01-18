function solve(...params){
    return params[0].filter((a, b) => b % params[1] == 0);
}

solve(['5', 
'20', 
'31', 
'4', 
'20'], 
2
);

// ['5', '31', '20']

solve(['dsa',
'asd', 
'test', 
'tset'], 
2
);

// ['dsa', 'test']

solve(['1', 
'2',
'3', 
'4', 
'5'], 
6
);

// ['1']