import React, {useEffect} from 'react';
import { StyledMenu } from './menu.styles';
import {NavLink} from "react-router-dom";

const Menu = ({open, setOpen}) => {

    const isHidden = !!open;
    const tabIndex = isHidden ? 0 : -1;

    useEffect(() => {
        if (open) {
            document.querySelector("html").classList.add("hide-overflow");
        } else {
            document.querySelector("html").classList.remove("hide-overflow")
        }

    }, [open]);

    return <StyledMenu open={open} aria-hidden={!isHidden}>
        <NavLink to="/" tabIndex={tabIndex} onClick={() => setOpen(!open)}>
            Home
        </NavLink>
    </StyledMenu>
}
export default Menu;