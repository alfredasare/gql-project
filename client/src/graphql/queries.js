import {gql} from 'apollo-boost';

export const ALL_BOOKS = gql`
    query {
        books {
            id
            authorId
            title
            img
            author {
                id
                name
            }
        }
    }
`;
