import React from "react";
import "./styles.css";
import Alphabet from "./Alphabet.js";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Navigation from './Comonents/NavBar/Navigation';

export default function App() {

    return (
        <Router>
            <div className="App">
                <Navigation/>

                <Alphabet/>
            </div>
        </Router>
    );
}
