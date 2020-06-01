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

const CardComponent = ({book}) => {

    return (
        <Card>
            <CardImage src={book.img}/>
            <CardContent>
                <BookTitle>{book.title}</BookTitle>
                <Divider/>
                <BookAuthor>{book.author.name}</BookAuthor>
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
