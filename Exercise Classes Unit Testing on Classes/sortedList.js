class List {
    constructor(){
        this.numList = [];
        this.size = this.numList.length;
    }

    add(element){
        this.numList.push(element);
        this.size = this.numList.length;
        this.numList.sort((a, b) => a - b);
    }

    remove(index){
        if(index >= 0 && index < this.numList.length){
            this.numList.splice(index, 1);
            this.size = this.numList.length;
        }else{
            throw new Error('Index out of range');
        }
    }

    get(index){
        if(index >= 0 && index < this.numList.length){
            return this.numList[index];
        }else{
            throw new Error('Index out of range');
        }
    }

    // size(){
    //     return this.size;
    // }
}


let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1)); 
list.remove(1);
console.log(list.get(1));
console.log(list.size);
