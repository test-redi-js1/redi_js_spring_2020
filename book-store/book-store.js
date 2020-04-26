(() => {
    const book_1 = {
        name: "Raising goats for dummies",
        price: 15,
        pageCount: 340,
        image: "img/goats.jpg",
        rating: {
            reader: 5,
            critic: 4,
            getAverageRating() {
                return Math.ceil((this.reader + this.critic) / 2)
            }
        },
    };

    const book_2 = {
        name: "HTML. The Definitive Guide",
        price: 12,
        pageCount: 128,
        image: "img/html.jpg",
        rating: {
            reader: 3,
            critic: 5,
            getAverageRating() {
                return Math.ceil((this.reader + this.critic) / 2)
            }
        },
    };

    const book_3 = {
        name: "JavaScript: The Definitive Guide",
        price: 50,
        pageCount: 280,
        image: "img/java_script.jpg",
        rating: {
            reader: 4,
            critic: 4,
            getAverageRating() {
                return Math.ceil((this.reader + this.critic) / 2)
            }
        }
    };

    const book_4 = {
        name: "Zombie Raccoons & Killer Bunnies",
        price: 20,
        pageCount: 460,
        image: "img/zombie_raccoons.jpg",
        rating: {
            reader: 2,
            critic: 1,
            getAverageRating() {
                return Math.ceil((this.reader + this.critic) / 2)
            }
        },
    };

    const bookList = document.querySelector('.book-list');
    const books = [book_1, book_2, book_3, book_4];

    const getBookDescription = (rating) => {
        let stars = "";
        for (let i = 0; i < rating; i++) {
            stars = stars + "⭐";
        }
        return `${stars}
         This book got an average rating of ${rating} stars based on readers and critics evaluations
         
         `
    };

    function generateBookElWithHTML(book) {
        let bookEl = document.createElement('div');
        bookEl.classList.add("book");
        bookEl.innerHTML = `
                         <div class= 'book__img'>
                            <img  src="${book.image}">
                        </div>
                        <div class="book__info">
                            <div class="book__name"> ${book.name}</div>
                            <div class="book__pages">${book.pageCount} pages</div>
                            <div class="book__review">${getBookDescription(book.rating.getAverageRating())}</div>
                            <button class="book__price">Buy it now for ${book.price} €</button>
                        </div>
                `;
        return bookEl;
    }

    function generateBookElWithJS(book) {
        let bookEl = document.createElement('div');

        let bookImageWrapper = document.createElement('div');
        let bookImage = document.createElement('img');
        bookImage.classList.add('book__img');
        bookImageWrapper.appendChild(bookImage);
        bookImage.src = book.image;
        bookEl.appendChild(bookImageWrapper);

        let bookInfo = document.createElement('div');
        bookInfo.classList.add('book__info');
        bookEl.appendChild(bookInfo);

        let bookName = document.createElement('div');
        bookName.classList.add('book__name');
        bookName.innerText = book.name;
        bookInfo.appendChild(bookName);

        let bookPageCount = document.createElement('div');
        bookPageCount.classList.add('book__pages');
        bookPageCount.innerText = `${book.pageCount} pages`;
        bookInfo.appendChild(bookPageCount);

        let bookRating = document.createElement('div');
        bookRating.classList.add('book__review');
        bookRating.innerText = getBookDescription(book.rating.getAverageRating());
        bookInfo.appendChild(bookRating);

        let bookPrice = document.createElement('button');
        bookPrice.classList.add('book__price');
        bookPrice.innerText = `Buy it now for ${book.price} €`;
        bookInfo.appendChild(bookPrice);

        return bookEl;
    }

    books.forEach(book => {
        let bookEl = generateBookElWithHTML(book);
        bookList.appendChild(bookEl);
    });

})();
