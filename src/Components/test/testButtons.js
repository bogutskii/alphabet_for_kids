import React from "react";
import '../../alphabet-style.css'
import {connect} from "react-redux";

const TestButtons = (props) => {
    const {nextTest, correct, wrong, skip, testCounter} = props
    return (
      <div onClick={() => nextTest()}>
        <button className="test-game-button correct_test m-10" onClick={() => correct(testCounter)}>Correct</button>
        <button className="test-game-button wrong m-10" onClick={() => wrong(testCounter)}>Wrong</button>
        <button className="test-game-button skip m-10" onClick={() => skip(testCounter)}>Skip</button>
      </div>
    );
}

const mapStateToProps = (state) => ({
    currentIndex: state.currentIndex,
    stats: state.stats,
    testCounter: state.test.testCounter
})

const mapDispatchToProps = (dispatch) => ({
    correct: (value) => dispatch({
        type: 'CORRECT_LETTER',
        payload: {
            value: value
        }
    }),
    wrong: (value) => dispatch({
        type: 'WRONG_LETTER',
        payload: {
            value: value
        }
    }),
    skip: (value) => dispatch({
        type: 'SKIP_LETTER',
        payload: {
            value: value
        }
    }),
    nextTest: (value) => dispatch({
        type: 'NEXT_TEST_COUNTER',
        payload: {
            value: value
        }
    }),

})


export default connect(mapStateToProps, mapDispatchToProps)(TestButtons);
