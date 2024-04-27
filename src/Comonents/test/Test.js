import React from "react";
// import Accordion from "../Accordion"
import {connect} from "react-redux";
import TestButtons from "./testButtons";
import '../../alphabet-style.css'
import Stats from "./Stats";
import ControlCase from "../ControlCase";


const Test = (props) => {
  const { currentLanguage, alphabets, test, startTest} = props;
  let randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  return (
    <div className="test-game-container">
      <ControlCase/>
      <button className="test-game-button"
              onClick={() => startTest([...test.alphabetForTest].sort(() => Math.random() - 0.5))}>
        {test.testStart ? 'Restart test' : 'Start test'}
      </button>
      {test.testStart &&
        <div className="wrap-child-active-50" style={{color: randomColor}}>
          <ul className="test-letters-list">
            {alphabets[currentLanguage].map((obj, i) => i === test.testCounter ? <li key={i}>{obj.letter}</li> : null)}
          </ul>
        </div>
      }
      <div className='test-game-options'>

        {test.testStart && <TestButtons/>}
        {test.testStart && <h3 className="test-counter">Left: {26 - test.testCounter}</h3>}
      </div>

      <Stats/>
    </div>
  );

};

const mapStateToProps = (state) => ({
  stats: state.stats,
  test: state.test,
  alphabets: state.alphabets,
  currentLanguage: state.currentLanguage,


  })

const mapDispatchToProps = (dispatch) => ({
  nextTest: (value) => dispatch({
    type: 'NEXT_TEXT_COUNTER',
    payload: {
      value: value
    }
  }),
  startTest: (value) => dispatch({
    type: 'START_TEST',
    payload: {
      value: value
    }
  }),
})

export default connect(mapStateToProps, mapDispatchToProps)(Test);
