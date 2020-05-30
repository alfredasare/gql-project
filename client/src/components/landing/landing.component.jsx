import React from "react";
import './landing.styles';
import {
    ButtonIcon,
    LandingButton,
    LandingContainer,
    LandingForm, LandingInput, LandingInputContainer,
    MainContent,
    MainHeader,
    MainLandingContent,
    PopularGenres
} from "./landing.styles";

const Landing = () => {

    return (
        <LandingContainer>
            <MainLandingContent>
                <MainHeader>
                    <span className="active">w</span>read.
                </MainHeader>
                <MainContent>
                    <p>Unlimited number of books to choose from</p>
                    <p>Powered by readers and authors all over the world</p>
                </MainContent>
                <LandingForm>
                    <LandingButton>
                        <ButtonIcon className="fas fa-search" />
                    </LandingButton>
                    <LandingInputContainer>
                        <LandingInput type="search"/>
                    </LandingInputContainer>
                </LandingForm>
                <PopularGenres>
                    <p>Popular genres this week: Fantasy, Sci-Fi, Action</p>
                </PopularGenres>
            </MainLandingContent>
        </LandingContainer>
    );
};

export default Landing;