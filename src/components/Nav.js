import '../styles/navstyle.css';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import React from 'react';
import Rick_and_Morty_logo from "./images/Rick_and_Morty_logo.png";

class Nav extends React.Component {

    render() {
        return (
            <nav>
                <Router></Router>
                <div className="logo"><Link to="/"><img src={Rick_and_Morty_logo} alt="rick and morty logo"/></Link>
                </div>
                <ul className="nav_links">
                    <li><Link to="/characters"><h2>Characters</h2></Link></li>
                    <li><Link to="/locations"><h2>Locations</h2></Link></li>
                    <li><Link to="/episodes"><h2>Episodes</h2></Link></li>
                    <li><Link to="/about"><h2>About</h2></Link></li>
                </ul>
            </nav>
        );
    }
}

export default Nav;