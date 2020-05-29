const {gql} = require("apollo-server");

const typeDefs = gql`
    enum BookGenre {
        FICTION
        NON_FICTION
    }
    
    type Book {
        id: ID!
        title: String!
        subType: String!
        genre: BookGenre!
        author: Author
        authorId: ID!
    }
    
    input BookInput {
        id: ID
        title: String
        subType: String
        genre: BookGenre
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
    
    type Query {
        book(input: BookInput): Book
        books(input: BookInput): [Book]!
        author(input: AuthorInput): Author
        authors(input: AuthorInput): [Author]!
    }
    
    
`;

module.exports = typeDefs;