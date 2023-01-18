function solve(...params){
    console.log(params[0].join(params[1]));
}

solve(['One', 
'Two', 
'Three', 
'Four', 
'Five'], 
'-'
);
// One-Two-Three-Four-Five
solve(['How about no?', 
'I',
'will', 
'not', 
'do', 
'it!'], 
'_'
);
// How about no?_I_will_not_do_it!