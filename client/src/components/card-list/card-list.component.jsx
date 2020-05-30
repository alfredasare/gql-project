import React from "react";
import './card-list.styles';
import {CardListContainer} from "./card-list.styles";
import CardComponent from "../card/card.component";

const CardList = () => {

    return (
        <CardListContainer>
            <CardComponent />
        </CardListContainer>
    );
};

export default CardList