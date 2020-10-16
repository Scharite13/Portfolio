import React, { Component } from 'react';

class NavBar extends Component {
    render(){
        return(
            <div className="navContainer">
                <ul className="navList">
                    <li className="navItem">Home</li>
                    <li className="navItem">About Me</li>
                    <li className="navItem">Resume</li>
                    <li className="navItem">Projects</li>
                    <li className="navItem">Contact Me</li>
                </ul>
            </div>
        )
    }
}

export default NavBar;
