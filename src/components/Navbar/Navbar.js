import React, { useState } from 'react';
import NavLogo from './NavLogo';
import Hamburger from './Hamburger';
import NavRight from './NavRight'

function NavBar(props){

    let navRight = <NavRight />
    
        return(
            <div className="navContainer">
                <NavLogo />
                {navRight}
                <Hamburger onClick={props.click}/>
            </div>
        )
    }


export default NavBar;
