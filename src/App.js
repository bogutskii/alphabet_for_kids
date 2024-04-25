import React from "react";
import "./styles.css";
import Alphabet from "./Comonents/Alphabet";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navigation from './Comonents/NavBar/Navigation';
import VideoPlaylist from './Comonents/VideoPlaylist';
import AboutPage from './Comonents/AboutPage';
import Test from "./Comonents/test/Test";
import SequenceTest from "./Comonents/test/SequenceTest";

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation/>
        <Routes>
          <Route exact path="/" element={<Alphabet/>}/>
          <Route path="/Video" element={<VideoPlaylist/>}/>
          <Route path="/Test" element={<Test/>}/>
          <Route path="/AboutPage" element={<AboutPage/>}/>
          <Route path="/sequence" element={<SequenceTest/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
