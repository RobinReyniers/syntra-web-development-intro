class LibrarySection {
  constructor() {
    this.books = [];
  }

  search(term) {
    return this.books.filter((book) =>
      book.author.toLowerCase().includes(term.toLowerCase())
    );
  }

  get all() {
    return this.books;
  }

  get available() {
    return this.books.filter((book) => book.inStock > 0);
  }

  get borrowed() {
    return this.books.filter((book) => book.borrowed > 0);
  }

  borrow(isbn) {
    this.books.map((book) => {
      if (book.ISBN === isbn) {
        book.borrowed++;
        book.inStock--;
        return book;
      }
    });
  }
}

class DramaSection extends LibrarySection {
  constructor() {
    super();
    this.books = [
      {
        title: "50 shades of Gray",
        author: "Vertonghen",
        ISBN: 120948,
        inStock: 20,
        bookPlacement: "Drama|200|1",
        borrowed: 0,
        cover: "url",
        description: "This book is about 50 shades of Gray",
      },
      {
        title: "50 shades of Gray",
        author: "Vertonghen",
        ISBN: 120948,
        inStock: 18,
        bookPlacement: "Drama|200|1",
        borrowed: 2,
        cover: "url",
        description: "This book is about 50 shades of Gray",
      },
      {
        title: "50 shades of Gray",
        author: "Vertonghen",
        ISBN: 120948,
        inStock: 0,
        bookPlacement: "Drama|200|1",
        borrowed: 0,
        cover: "url",
        description: "This book is about 50 shades of Gray",
      },
    ];
  }
}

// This class will tie everything together
class Library {
  constructor() {
    const dramaBooks = new DramaSection();
    const state = {
      books: dramaBooks.all,
    };

    document.querySelectorAll(".nav-selection").forEach((nav) => {
      nav.addEventListener("click", (e) => {
        const type = e.target.parentNode.dataset.bookType;
        this.state.books = dramaBooks[type];
      });
    });

    this.state = new Proxy(state, {
      set: this.update,
    });
    this.bookList = new BookList(this.state);
  }

  update = (target, property, value) => {
    // Allow the update to happen
    target[property] = value;

    if (property === "books") {
      this.bookList.render();
    }
  };
}

class BookList {
  // Based on the state of the library, we show the books
  constructor(state) {
    this.state = state;
    //  Select the element in the DOM, and append the books.
    this.bookContainer = document.querySelector(".books");
    state.books.forEach((book) => {
      const bookInstance = new Book(book);
      this.bookContainer.appendChild(bookInstance.el);
    });
  }

  render() {
    // Clear the UI
    this.bookContainer.innerHTML = "";
    // Build the UI up again

    this.state.books.forEach((book) => {
      const bookInstance = new Book(book);
      this.bookContainer.appendChild(bookInstance.el);
    });
  }
}

// Responsible for shape of a book in te application (HTML)
class Book {
  constructor(book) {
    this.book = book;
  }

  get el() {
    return this.#htmlToElement(this.#bookCard());
  }

  #htmlToElement(htmlString) {
    const template = document.createElement("template");
    htmlString = htmlString.trim();
    template.innerHTML = htmlString;
    return template.content.firstChild;
  }

  #bookCard() {
    return `
    <article class='book'>
    <img src='${this.book.cover}'></img>
    <section>${this.book.title}
    <h5>${this.book.author}</h5>
    <p>${this.book.description}</p>
    <section>
    <p>${this.book.inStock}</p>
    <button class='collect' data-id='${this.book.ISBN}'>Collect</button>
    <button class='return' data-id='${this.book.ISBN}>Return</button>
    </section>
    </section>
    </article>`;
  }
}

window.DramaSection = DramaSection;

const app = new Library();
