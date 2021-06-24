import React from 'react';

//import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './style/Header.scss';
const Header=()=>{
    return (
        <header>
            <h1>Resty</h1>

            <nav>
       <ul>
        <li>
           <a href="/">Home</a>
        </li>
        <li>
           <a href="/history">History</a>
        </li>
        <li>
           <a href="/help">Help</a>
        </li>
       </ul>
    </nav>

        </header>
    )
}

export default Header;