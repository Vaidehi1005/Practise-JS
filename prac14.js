class Book {
    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }

    getTitle() {
        return this.title;
    }

    getAuthor() {
        return this.author;
    }

    getPages() {
        return this.pages;
    }
}

let book = new Book("To search a life", "Robert Frost", 250);
console.log(book.getTitle());
console.log(book.getAuthor());
console.log(book.getPages()); 