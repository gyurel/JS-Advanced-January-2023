function solve(str){
    let regularExpression = /[A-Za-z]+/g;

    let rawString = str.match(regularExpression);

    let resultWords = []

    for (const word of rawString) {
        currentWord = word.toUpperCase();
        resultWords.push(currentWord);
    }

    console.log(resultWords.join(', '));
}


solve('Functions in JS can be nested, i.e. hold other functions');
solve('Hi, how are you?');
solve('hello');
