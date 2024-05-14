import React from "react";
import {connect} from "react-redux";
import TestButtons from "./testButtons";
import '../Alphabet.css'
import Stats from "./Stats";
import GameOptions from "../Options/GameOptions";

const Test = (props) => {
  const {currentLanguage, alphabets, test, startTest, stopTest} = props;
  let randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;

  return (
    <div className="test-game-container">
      <button
        className="test-game-button"
        onClick={() => startTest([...alphabets[currentLanguage]].sort(() => Math.random() - 0.5))}
      >
        {test.testStart ? 'Restart test' : 'Start test'}
      </button>

      {test.testStart && (
        <button
          className="test-game-button"
          onClick={stopTest}
        >
          Stop
        </button>
      )}

      {!test.testStart && <GameOptions />}

      {test.testStart && (
        <div  style={{color: randomColor}}>
          <ul className="test-letters-list">
            {alphabets[currentLanguage].map((obj, i) =>
              i === test.testCounter ? <li className="wrap-child-active-50" key={i}>{obj.letter}</li> : null
            )}
          </ul>
        </div>
      )}

      <div className='test-game-options'>
        {test.testStart && <TestButtons />}
        {test.testStart && <h3 className="test-counter">Left: {alphabets[currentLanguage].length - test.testCounter}</h3>}
      </div>

      <Stats />
    </div>
  );
};

const mapStateToProps = (state) => ({
  stats: state.stats,
  test: state.test,
  alphabets: state.alphabets,
  currentLanguage: state.currentLanguage,
});

const mapDispatchToProps = (dispatch) => ({
  nextTest: (value) => dispatch({
    type: 'NEXT_TEXT_COUNTER',
    payload: { value },
  }),
  startTest: (value) => dispatch({
    type: 'START_TEST',
    payload: { value },
  }),
  stopTest: () => dispatch({
    type: 'STOP_TEST',
  }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Test);
