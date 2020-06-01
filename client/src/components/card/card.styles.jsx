import styled from "styled-components";
import {Link} from "react-router-dom";
import {neutral, portlandOrange} from "../../utils";

export const Card = styled.div`
    width: 80%;
    height: auto;
    background-color: rgb(255, 255, 255);
    border-radius: 20px;
    padding: 0 0 12px 0;
    box-shadow: 0 27px 63px -24px rgba(0, 0, 0, 0.5);
    
    @media screen and (max-width: 520px) {
        width: 100%;
    }
   
`;

export const CardImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  object-position: 50% 0;
  border-radius: 20px 20px 0 0;
`;

export const CardContent = styled.div`
  padding: 10px 10px 10px 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;

export const Divider = styled.hr`
  width: 80%;
  margin: auto auto;
  opacity: 0.2;
`;

export const BookTitle = styled.div`
  padding: 10px;
`;

export const BookAuthor = styled.div`
  padding: 10px;
`;

export const PriceLink = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const BookPrice = styled.div`
  padding: 10px;
`;

export const ViewLink = styled(Link)`
  padding: 10px;
  color: ${neutral[500]};
  transition: color 0.1s ease-in;
  
  &:hover {
    color: ${portlandOrange[100]};
  }
`;
