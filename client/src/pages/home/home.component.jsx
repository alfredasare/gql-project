import React from "react";
import './home.styles';
import Landing from "../../components/landing/landing.component";
import SubHeader from "../../components/subsection-header/sub-header.component";
import CardList from "../../components/card-list/card-list.component";

const Home = () => {

    return (
        <>
            <Landing />
            <SubHeader>
                <span className="active">Latest</span> wreads
            </SubHeader>
            <CardList />
        </>
    );

};

export default Home;