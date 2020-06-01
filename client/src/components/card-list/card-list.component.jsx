import React from "react";
import {useQuery} from "@apollo/react-hooks";
import './card-list.styles';
import {CardListContainer} from "./card-list.styles";
import CardComponent from "../card/card.component";
import {ALL_BOOKS} from "../../graphql/queries";
import Loader from "../loader/loader.component";

const CardList = () => {

    const {data, loading, error} = useQuery(ALL_BOOKS);

    const renderCards = () => {
        return data.books.map(book => (
            <CardComponent book={book} key={book.id + 1000}/>
        ))
    };

    if (loading) {
        return <Loader/>;
    }

    if (error) {
        return <p>error</p>;
    }

    return (
        <CardListContainer>
            {renderCards()}
        </CardListContainer>
    );
};

export default CardList
