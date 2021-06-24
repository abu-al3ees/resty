import React from 'react';



import Home from '../home/home.js';
import Help from '../help/help.js';
import History from '../historyPage/historyPage';
//import { BrowserRouter} from 'react-router-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Main = () =>{
   return (
     <>
    
    <Router>
             <Route exact path="/" component={Home}  />
             <Route path="/help" component={Help} />
             <Route path="/history" component={History} />
     </Router>
     
     </>


   )

}

export default Main ;