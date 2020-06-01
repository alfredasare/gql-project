const {gql} = require("apollo-server");

const typeDefs = gql`
    enum BookGenre {
        FICTION
        NON_FICTION
    }
    
    type Book {
        id: ID!
        title: String
        subType: String!
        genre: BookGenre!
        img: String
        author: Author
        authorId: ID!
    }
    
    input BookInput {
        id: ID
        title: String
        subType: String
        genre: BookGenre
    }
    
    input NewBookInput {
        id: ID!
        title: String!
        subType: String!
        genre: BookGenre!
        authorId: ID!
        img: String!
    }
    
    input EditBookInput {
        id: ID!
        title: String
        subType: String
        genre: BookGenre
        authorId: ID
        img: String
    }
    
    type Author {
        id: ID!
        name: String!
        age: Int!
        books: [Book!]!
    }
    
    input AuthorInput {
        id: ID
        name: String
        age: Int
    }
    
    input NewAuthorInput {
        id: ID!
        name: String!
        age: Int!
    }
    
    type Query {
        book(input: BookInput): Book
        books(input: BookInput): [Book]!
        author(input: AuthorInput): Author
        authors(input: AuthorInput): [Author]!
    }
    
    type Mutation {
        addBook(input: NewBookInput!): Book!
        editBook(input: EditBookInput!): Book!
        deleteBook(id: ID!): Book
        addAuthor(input: NewAuthorInput!): Author!
    }
    
    
`;

module.exports = typeDefs;
