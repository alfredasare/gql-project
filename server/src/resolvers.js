const _ = require("lodash");
const axios = require("axios");


module.exports = {
    Query: {
        book(__, {input}) {
            return axios.get(`http://localhost:3004/books/${input.id}`)
                .then(result => result.data);

        },

        books(__, {input}) {
            return axios.get("http://localhost:3004/books")
                .then(results => results.data);
        },

        author(__, {input}) {
            return axios.get(`http://localhost:3004/authors/${input.id}`)
                .then(result => result.data);
        },

        authors(__, {input}) {
            return axios.get("http://localhost:3004/authors")
                .then(results => results.data);
        }
    },

    Mutation: {
        addBook(__, {input}) {
            return axios.post("http://localhost:3004/books", {
                id: input.id,
                title: input.title,
                subType: input.subType,
                genre: input.genre,
                img: input.img,
                authorId: input.authorId
            })
                .then(result => result.data);
        },

        editBook(__, {input}) {
            return axios.patch(`http://localhost:3004/books/${input.id}`, {
                id: input.id,
                title: input.title,
                subType: input.subType,
                genre: input.genre,
                img: input.img,
                authorId: input.authorId
            })
                .then(result => result.data);
        },

        deleteBook(__, {id}) {
            return axios.delete(`http://localhost:3004/books/${id}`)
                .then(result => result.data);
        },

        addAuthor(__, {input}) {
            return axios.post("http://localhost:3004/authors", {
                id: input.id,
                name: input.name,
                age: input.age
            })
                .then(result => result.data);
        }
    },

    Book: {
        author(book, __) {
            return axios.get("http://localhost:3004/authors")
                .then(results => {
                    return _.find(results.data, {
                        id: book.authorId
                    })
                });
        }
    },

    Author: {
        books(author, __x) {
            return axios.get("http://localhost:3004/books")
                .then(results => {
                    return _.filter(results.data, {
                        authorId: author.id
                    });
                });
        }
    }
};
