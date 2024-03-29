import React from "react";
import "./styles.css";
import Alphabet from "./Alphabet";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Navigation from './Comonents/NavBar/Navigation';
import VideoPlaylist from './Comonents/VideoPlaylist'
import AboutPage from './Comonents/aboutPage'
import Test from "./Comonents/test/test";
import {connect} from 'react-redux'



function App(props) {
const {state} = props
    return (
        <Router>
            <div className="App">
                <Navigation/>
                <Route exact path="/" component ={Alphabet}/>
                <Route path='/Video' render={VideoPlaylist}/>
                <Route path='/Test' component={Test}/>
                <Route path='/AboutPage' render={AboutPage}/>

                {/*<Stats/>*/}
            </div>
        </Router>
    );
}


const mapStateToProps = (state) => ({
    state: state
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