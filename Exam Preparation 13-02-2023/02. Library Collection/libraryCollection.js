class LibraryCollection {
    constructor(capacity){
        this.capacity = capacity;
        this.books = [];
    }

    addBook(bookName, bookAuthor){
        if(this.books.length == this.capacity){
            throw new Error("Not enough space in the collection.")
        }else{
            let newBook = {
                bookName, 
                bookAuthor, 
                payed: false,
            }
            this.books.push(newBook);
            return `The ${bookName}, with an author ${bookAuthor}, collect.`;
        }
    }

    payBook(bookName){
        let found = false;
        for (const a of this.books) {
            if(a.bookName == bookName){
                found = true;
                if(a.payed == false){
                    a.payed = true;
                    return `${bookName} has been successfully paid.`;
                }else if(a.payed == true){
                    throw new Error(`${bookName} has already been paid.`);
                }
            }
        }
        if(!found){
            throw new Error(`${bookName} is not in the collection.`);
        }
    }

    removeBook(bookName){
        let found = false;
        for (let index = 0; index < this.books.length; index++) {
            let a = this.books[index];
            if(a.bookName == bookName){
                found = true;
                if(a.payed == false){
                    throw new Error(`${bookName} need to be paid before removing from the collection.`)
                }else{
                    this.books.splice(index, 1);
                    return `${bookName} remove from the collection.`;
                }
            }
        }
        if(!found){
            throw new Error(`The book, you're looking for, is not found.`);
        }
    }

    getStatistics(bookAuthor){
        if(bookAuthor == undefined){
            let resultArr = [`The book collection has ${this.capacity - this.books.length} empty spots left.`];

            this.books
            .sort((a, b) => a.bookName.localeCompare(b.bookName))
            .forEach((a) => resultArr.push(`${a.bookName} == ${a.bookAuthor} - ${a.payed ? 'Has Paid' : 'Not Paid'}.`));

            return resultArr.join('\n');
        }else{
            let resultBooks = this.books
            .filter((a) => a.bookAuthor == bookAuthor);
            let resultStrings = '';

            if(resultBooks.length == 0){
                throw new Error(`${bookAuthor} is not in the collection.`);
            }else{
                for (const book of resultBooks) {
                    let currentSring = `${book.bookName} == ${book.bookAuthor} - ${book.payed ? 'Has Paid' : 'Not Paid'}.`;
                    resultStrings += currentSring;
                    return resultStrings;
                }
            }
        }
    }
}

// const library = new LibraryCollection(2)
// console.log(library.addBook('In Search of Lost Time', 'Marcel Proust'));
// console.log(library.addBook('Don Quixote', 'Miguel de Cervantes'));
// console.log(library.addBook('Ulysses', 'James Joyce'));

// const library = new LibraryCollection(2)
// library.addBook('In Search of Lost Time', 'Marcel Proust');
// console.log(library.payBook('In Search of Lost Time'));
// console.log(library.payBook('Don Quixote'));

// const library = new LibraryCollection(2)
// library.addBook('In Search of Lost Time', 'Marcel Proust');
// library.addBook('Don Quixote', 'Miguel de Cervantes');
// library.payBook('Don Quixote');
// console.log(library.removeBook('Don Quixote'));
// console.log(library.removeBook('In Search of Lost Time'));

// const library = new LibraryCollection(2)
// console.log(library.addBook('Don Quixote', 'Miguel de Cervantes'));
// console.log(library.getStatistics('Miguel de Cervantes'));

const library = new LibraryCollection(5)
library.addBook('Don Quixote', 'Miguel de Cervantes');
library.payBook('Don Quixote');
library.addBook('In Search of Lost Time', 'Marcel Proust');
library.addBook('Ulysses', 'James Joyce');
console.log(library.getStatistics());
