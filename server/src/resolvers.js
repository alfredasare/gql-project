const _ = require("lodash");

// dummy data
const books = [
    { title: 'Name of the Wind', subType: 'Fantasy', genre: "FICTION", id: '1', authorId: '1' },
    { title: 'The Final Empire', subType: 'Fantasy', genre: "NON_FICTION", id: '2', authorId: '2' },
    { title: 'The Hero of Ages', subType: 'Fantasy', genre: "FICTION", id: '4', authorId: '2' },
    { title: 'The Long Earth', subType: 'Sci-Fi', genre: "FICTION", id: '3', authorId: '3' },
    { title: 'The Colour of Magic', subType: 'Fantasy', genre: "FICTION", id: '5', authorId: '3' },
    { title: 'The Light Fantastic', subType: 'Fantasy', genre: "FICTION", id: '6', authorId: '3' },
];

const authors = [
    {name: 'Patrick Rothfuss', age: 44, id: '1'},
    {name: 'Brandon Sanderson', age: 42, id: '2'},
    {name: 'Terry Pratchett', age: 66, id: '3'}
];

module.exports = {
    Query: {
        book(__, {input}, ctx) {
            return _.find(books, {
                id: input.id
            });
        },

        books(__, {input}, ctx) {
            return books;
        },

        author(__, {input}, ctx) {
            return _.find(authors, {
                id: input.id
            });
        },

        authors(__, {input}, ctx) {
            return authors;
        }

    },

    Book: {
        author(book, __, ctx) {
            return _.find(authors, {
                id: book.authorId
            });
        }
    },

    Author: {
        books(author, __, ctx) {
            return _.filter(books, {
                authorId: author.id
            });
        }
    }
};