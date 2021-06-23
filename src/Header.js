import React from 'react';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './style/Header.scss';
const Header=()=>{
    return (
        <header>
            <h1>Resty</h1>

            <nav>
       <ul>
        <li>
           <Link exact  to="/">Home</Link>
        </li>
        <li>
           <Link to="/history">History</Link>
        </li>
        <li>
           <Link to="/help">Help</Link>
        </li>
       </ul>
    </nav>

        </header>
    )
}

export default Header;