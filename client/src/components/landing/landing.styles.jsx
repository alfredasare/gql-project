import styled from "styled-components";
import {neutral, typeScale} from "../../utils";

export const LandingContainer = styled.header`
  margin-top: 100px;
  height: 60vh;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  
  
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${require("../../assets/images/marcelo-irigoyen-l7dKqgDz008-unsplash.jpg")});
    background-size: cover;                      
    background-repeat: no-repeat;
    background-position: center center;
    filter: brightness(40%);
  }
`;

export const MainLandingContent = styled.div`
  position: relative;
  width: 50%;
  text-align: left;
  color: ${neutral[100]};
`;

export const MainHeader = styled.h1`
  font-size: 3.0rem;
  letter-spacing: 1rem;
`;

export const MainContent = styled.div`
    font-size: ${typeScale.header3};
    line-height: 0.8rem;
    
    p {
      line-height: 1em;
    }
`;

export const LandingForm = styled.form`
    margin-top: 40px;
    margin-bottom: 30px;
    border-radius: 4px;
    background-color: #f5f5f5;
    height: 54px;
    display: flex;
    position: relative;
    transition: all .1s ease-in-out;
`;

export const LandingButton = styled.button`
    display: flex;
    align-items: center;
    box-shadow: none;
    border: none;
    padding: 0;
    background-color: transparent;
    text-align: inherit;
  
  &:hover {
    box-shadow: none;
  }
`;

export const ButtonIcon = styled.i`
    width: 20px;
    height: 20px;
    padding-left: 14px;
    box-sizing: content-box;
    color: #767676;
    transition: fill .1s ease-in-out;
`;

export const LandingInputContainer = styled.div`
  flex-grow: 1;
  display: flex;
`;

export const LandingInput = styled.input`
  box-shadow: none;
  padding-left: 14px;
  padding-right: 14px;
  flex-grow: 1;
  width: 100%;
  background: none;
  border: none;
  color: #111;
  
  &:focus {
    outline: none;
  }
`;

export const PopularGenres = styled.div`
  font-size: ${typeScale.header5};
`;