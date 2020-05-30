import React from "react";
import './sub-header.styles';
import {HeaderContainer, SubHeader} from "./sub-header.styles";

const SubHeaderComponent = ({children}) => {

    return (
        <HeaderContainer>
            <SubHeader>
                {children}
            </SubHeader>
        </HeaderContainer>
    );
};

export default SubHeaderComponent;