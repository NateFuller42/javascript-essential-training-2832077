/*mybook*/

class book {
    constructor(
        title,
        genre,
        numPages,
        author,
        publisher
    ) {
        this.title = title;
        this.genre = genre;
        this.numPages = numPages;
        this.author = author;
        this._publisher = publisher;
    }

    get pages() {
        return this.numPages;
    }

    get publisher() {
        return this._publisher;
    }
}

export default book;