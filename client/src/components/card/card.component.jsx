import React from "react";
import './card.styles';
import {
    BookAuthor,
    BookPrice,
    BookTitle,
    Card,
    CardContent,
    CardImage,
    Divider,
    PriceLink,
    ViewLink
} from "./card.styles";

const CardComponent = () => {

    return (
        <Card>
            <CardImage src="https://firebasestorage.googleapis.com/v0/b/gql-project.appspot.com/o/book-covers%2Fchamber%20of%20secrets.jpg?alt=media&token=8d74e642-3a67-4efe-8b07-4f2ca04034cc"/>
            <CardContent>
                <BookTitle>Harry Potter and the Chamber of Secrets</BookTitle>
                <Divider/>
                <BookAuthor>J.K Rowling</BookAuthor>
                <Divider/>
                <PriceLink>
                    <ViewLink to="/">View Book</ViewLink>
                    <BookPrice>$ 12.00</BookPrice>
                </PriceLink>
            </CardContent>
        </Card>
    );
};

export default CardComponent;
