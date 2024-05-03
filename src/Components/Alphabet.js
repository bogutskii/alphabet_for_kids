import React from "react";
import "../alphabet-style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Alpha_line from "./Alpha_line"
//import Stats from "./Components/test/test";
import InitialLetterWord from "./InitialLetterWord";
import {connect} from "react-redux";
import GameOptions from "./Options/GameOptions";

const Alphabet = ({letters, currentLanguage, currentIndex, currentCase, effects, previousLetter, nextLetter}) => {
  let randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  let nextEffect = effects[Math.floor(Math.random() * effects.length)];

  const checkKey = (e) => {
    if (e.keyCode === 37) {
      previousLetter(-1);
    } else if (e.keyCode === 39) {
      nextLetter(1);
    }
  }
  let currentLetter = letters[currentLanguage][currentIndex].letter;
  if(currentCase === 'upper'){
    currentLetter = currentLetter[0].toUpperCase()
  }else if(currentCase === 'lower'){
    currentLetter = currentLetter[0].toLowerCase()
  // }
  // else if(currentCase === 'both'){
  //   currentLetter = currentLetter[0].toUpperCase() + currentLetter[0].toLowerCase()
  }

  return (
    <div className="content" tabIndex="0" onKeyDown={checkKey} style={{outline: "none"}}>
      <GameOptions/>
      <Alpha_line/>
      <div className="wrap">
        <a className="wrap-child-active-25" onClick={() => previousLetter(-1)} href="#" role="button">
          &#8826;
        </a>
        <div
          style={{color: randomColor}}
          className={`wrap-child-active-50 ${nextEffect}`}
        >
          {currentLetter}
          <InitialLetterWord/>
        </div>
        <a className="wrap-child-active-25" onClick={() => nextLetter(1)} href="#" role="button">
          &#8827;
        </a>
      </div>
      {/*<h4>{current + 1} / 26</h4>*/}
    </div>
  );
};

const mapStateToProps = (state) => ({
  letters: state.alphabets,
  currentLanguage: state.currentLanguage,
  currentIndex: state.currentIndex,
  effects: state.effects.classNames,
  currentCase: state.currentCase
});

const mapDispatchToProps = (dispatch) => ({
  previousLetter: (value) => dispatch({
    type: 'PREVIOUS_LETTER',
    payload: {
      value: value
    }
  }),
  nextLetter: (value) => dispatch({
    type: 'NEXT_LETTER',
    payload: {
      value: value
    }
  }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Alphabet);
