import styled, {css} from "styled-components";
import {neutral, portlandOrange, typeScale} from "../../utils";
import {NavLink} from "react-router-dom";
import {HashLink} from "react-router-hash-link";

export const NavContainer = styled.nav`
    display: block;
    height: 100px;
    width: 100%;
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: auto;
    z-index: 10;
    background-color: ${neutral[200]};
    transition: top 90ms linear;
`;


// Mobile
export const MobileNav = styled.div`
    min-width: 100%;
    padding-right: 20px;
    padding-left: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    
    @media screen and (min-width: 529px) {
        display: none;
    }
`;

export const Hamburger = styled.div`
    
`;


// Mobile END



// DESKTOP
export const DefaultNav = styled.div`
    min-width: 100%;
    padding-right: 30px;
    padding-left: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    
    @media screen and (max-width: 529px) {
        display: none;
    }
`;

export const NavBrand = styled(HashLink)`
    font-size: ${typeScale.header2};
    color: ${neutral[600]};
    
    &:hover {
        cursor: pointer;
    };
`;

export const NavLinks = styled.div`
    
`;

const NavRules = css`
  margin-right: 20px;
    margin-left: 20px;
    padding: 10px 5px;
    color: #333;
    font-size: 1em;
    transition: color 0.2s ease-in;
    position: relative;
    
    &:before {
        content: '';
        position: absolute;
        height: 100%;
        width: 100%;
        background-color: ${neutral[500]};
        opacity: 0;
        bottom: 0;
        transition: background-color 0.1s ease-in, left 0.1s ease-in;
        left: -40%;
    }
    
    &:hover {
        color: ${portlandOrange[100]};
        
        &:before {
            opacity: 0.1;
            left: -35%;
        }
    }
}
`;

export const NavLinkItem = styled(NavLink)`
    ${NavRules};
`;

// DESKTOP END