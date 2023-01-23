//Describe what a prototype is and how it can be used.
 //The prototype property is used primarily for inheritance; you add methods and properties on a function’s prototype property to make those methods and properties available to instances of that function.
//Explain prototypal inheritance
 //When a property from object is read and is missing Javascript automatically takes it from the prototype this is called prototypal inheritance.
//Explain what object.creates does
 // Object.creates extends objects from others.
//Explain how this behave in different situations
 //"this" is an inner function depends only on its own invocation type, but not on the outer function's context.To make this have a desired value, modify the inner function's context with indirect invocation (using .call() or .apply(), or create a bound function (using .bind().
let myLibrary = [];

class Book {
  constructor(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
  bookinfo() {
    return `${this.title},${this.author}, ${this.pages}, ${this.read}`
  }
}
   
const myBook = new Book("The Gifts of imperfection ", "Brene Brown ",465 , " not read yet")
console.log(myBook)
console.log(myBook.bookinfo())