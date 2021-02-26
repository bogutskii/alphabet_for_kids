import React from "react";
import "../styles.css";
import {connect} from "react-redux";


const TestButtons = (props) => {

    const {nextTest, correct, wrong, skip, testCounter} = props


    return (

        <div onClick={() => nextTest()}>
            <button className="btn btn-secondary" onClick={() => correct(testCounter)}>
                Correct
            </button>

            <button className="btn btn-secondary" onClick={() => wrong(testCounter)}>
                Wrong
            </button>

            <button className="btn btn-secondary" onClick={() => skip(testCounter)}>
                Skip
            </button>

        </div>
    );
}


const mapStateToProps = (state) => ({
    currentIndex: state.current.currentIndex,
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
