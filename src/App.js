import React from "react";
import "./styles.css";
import Alphabet from "./Components/Alphabet";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navigation from './Components/NavBar/Navigation';
import VideoPlaylist from './Components/VideoPlaylist';
import AboutPage from './Components/AboutPage';
import Test from "./Components/test/Test";
import SequenceTest from "./Components/test/SequenceTest";

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation/>
        <Routes>
          <Route exact path="/" element={<Alphabet/>}/>
          <Route path="/video" element={<VideoPlaylist/>}/>
          <Route path="/test" element={<Test/>}/>
          <Route path="/about" element={<AboutPage/>}/>
          <Route path="/sequence" element={<SequenceTest/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
