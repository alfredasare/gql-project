import {createGlobalStyle} from "styled-components";
import {primaryFont} from "./typography";
import {normalize} from 'polished';
import {portlandOrange} from "./colors";


export const GlobalStyle = createGlobalStyle`
    ${normalize()}
    html {
        font-size: 16px;
        box-sizing: border-box;
        overflow-x: hidden;
        scroll-behavior: smooth;
    }
    
    *, *:before, *:after {
        box-sizing: inherit;
    }
    
    body {
        margin: 0;
        font-family: ${primaryFont};
    }
    
    a {
        text-decoration: none;
    }
    
    .active {
        color: ${portlandOrange[100]}
    }  
    
    .hide-overflow {
      overflow-y: hidden;
    }
`;