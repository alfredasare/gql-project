import React, {useState} from "react";
import './navbar.styles';
import {DefaultNav, MobileNav, NavBrand, NavContainer, NavLinkItem, NavLinks} from "./navbar.styles";
import Burger from "../burger/burger.component";
import Menu from "../menu/menu.component";

const NavBar = () => {

    const [open, setOpen] = useState(false);

    return (

        <NavContainer>
            <Menu open={open} setOpen={setOpen}/>
            <MobileNav>
                <NavBrand to="/#home"><span className="active">w</span>read</NavBrand>
                <Burger open={open} setOpen={setOpen}/>
            </MobileNav>
            <DefaultNav>
                <NavBrand to="/#home"><span className="active">w</span>read</NavBrand>
                <NavLinks>
                    <NavLinkItem exact={true} activeClassName="active" to="/#home">Home</NavLinkItem>

                </NavLinks>
            </DefaultNav>
        </NavContainer>
    );
};

export default NavBar;