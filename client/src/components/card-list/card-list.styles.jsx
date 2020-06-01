import styled from "styled-components";

export const CardListContainer = styled.section`
  margin: 50px;
  display: grid;
  grid-column-gap: 50px;
  grid-row-gap: 50px;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  
  @media screen and (max-width: 520px) {
    grid-template-columns: 1fr;
  }
  
  @media screen and (min-width: 521px) and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
 
  
  @media only screen 
    and (min-width: 1024px) 
    and (max-height: 1366px) 
    and (-webkit-min-device-pixel-ratio: 1.5) {
      grid-template-columns: repeat(2, 1fr);
    }
    
  @media screen and (min-width: 1367px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
