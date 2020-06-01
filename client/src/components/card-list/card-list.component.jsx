import React from "react";
import './card-list.styles';
import {CardListContainer} from "./card-list.styles";
import CardComponent from "../card/card.component";

const CardList = () => {

    const a = [1,2,3,4,5];

    const renderCards = () => {
        return a.map(item => (
            <CardComponent/>
        ))
    };

    return (
        <CardListContainer>
            {renderCards()}
        </CardListContainer>
    );
};

export default CardList
