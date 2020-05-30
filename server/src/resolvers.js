const _ = require("lodash");
const axios = require("axios");


module.exports = {
    Query: {
        book(__, {input}, ctx) {
            return axios(`http://localhost:3004/books/${input.id}`)
                .then(result => result.data);

        },

        books(__, {input}, ctx) {
            return axios("http://localhost:3004/books")
                .then(results => results.data);
        },

        author(__, {input}, ctx) {
            return axios(`http://localhost:3004/authors/${input.id}`)
                .then(result => result.data);
        },

        authors(__, {input}, ctx) {
            return axios("http://localhost:3004/authors")
                .then(results => results.data);
        }
    },

    Book: {
        author(book, __, ctx) {
            return axios("http://localhost:3004/authors")
                .then(results => {
                    return _.find(results.data, {
                        id: book.authorId
                    })
                });
        }
    },

    Author: {
        books(author, __, ctx) {
            return axios("http://localhost:3004/books")
                .then(results => {
                    return _.filter(results.data, {
                        authorId: author.id
                    });
                });
        }
    }
};