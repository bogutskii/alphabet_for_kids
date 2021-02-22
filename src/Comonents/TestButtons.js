import React from "react";
import "../styles.css";
import {connect} from "react-redux";


const TestButtons = (props) => {


    return (

        <div>
            <button className="btn btn-secondary" onClick={() => props.correct(props.currentIndex)}>
                Correct
            </button>

            <button className="btn btn-secondary" onClick={() => props.wrong(props.currentIndex)}>
                Wrong
            </button>

            <button className="btn btn-secondary" onClick={() => props.skip(props.currentIndex)}>
                Skip
            </button>

        </div>
    );
}


const mapStateToProps = (state) => ({
    currentIndex: state.current.currentIndex,
    stats: state.stats

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

})


export default connect(mapStateToProps, mapDispatchToProps)(TestButtons);
