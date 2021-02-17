import React from "react";
import "./styles.css";
import Alphabet from "./Alphabet.js";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Navigation from './Comonents/NavBar/Navigation';
import VideoPlaylist from './Comonents/VideoPlaylist'
import Stats from "./Comonents/Stats";
import {connect} from 'react-redux'


function App(props) {

    return (
        <Router>
            <div className="App">
                <Navigation/>
                {/*<Route exact path="/" render={Alphabet}/>*/}
                <Alphabet/>

                <Route path='/Video' render={VideoPlaylist}/>
                <Route path='/Stats' render={Stats}/>
                <Route path='/Video' render={VideoPlaylist}/>
            </div>
        </Router>
    );
}


const mapStateToProps = (state) => ({
    letters: state.letters,
    test: state.test,
})

const mapDispatchToProps = (dispatch) => ({

    changeCreateModal: (value) => dispatch({
        type: 'CHANGE_CREATE_MODAL',
        payload: {
            value: value
        }
    }),

})


export default connect(mapStateToProps, mapDispatchToProps)(App);