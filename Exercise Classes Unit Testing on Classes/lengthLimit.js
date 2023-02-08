class Stringer{
    constructor(innerString, innerLength){
        this.innerString = innerString;
        this.innerLength = Number(innerLength);
    }

    increase(length){
        this.innerLength = this.increaseLength += length;
    }

    decrease(length){
        if(this.innerLength - length < 0){
            this.innerLength = 0;
        }else{
            this.innerLength = this.innerLength - length;
        }
    }

    toString(){
        if(this.innerLength < this.innerString.length){
            let charsToCut = this.innerString.length - this.innerLength;
            let currentString = this.innerString;
            let currentStringArr = currentString.split('');
            currentStringArr.reverse();

            for (let index = 0; index < charsToCut; index++) {
                currentStringArr.shift();
            }
            currentStringArr.reverse();

            return `${currentStringArr.join('')}...`;

        }else{
            return this.innerString;
        }
    }
}

let test = new Stringer("Test", 5);
console.log(test.toString()); // Test

test.decrease(3);
console.log(test.toString()); // Te...

test.decrease(5);
console.log(test.toString()); // ...

test.increase(4); 
console.log(test.toString()); // Test
