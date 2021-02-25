import React, {useState} from "react";
import "./alphabet-style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import UpperLineAlph from "./Comonents/upperLineAlph"
import Stats from "./Comonents/test";
import Word from "./Comonents/word";
import {connect} from "react-redux";


const Alphabet = (props) => {
    const {letters, current} = props

    let randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;


    return (

        <div>


            <UpperLineAlph/>


            <div className="wrap">

                <a className="wrap-child-active-25" onClick={() => props.previousLetter(-1)}>
                    &#8826;
                </a>

                <div
                    style={{color: randomColor}}
                    className="wrap-child-active-50"
                >
                    {props.letters[props.current].letter}
                    <Word/>

                </div>

                <a className="wrap-child-active-25" onClick={() => props.nextLetter(1)}>
                    &#8827;
                </a>

            </div>


            <h4>{props.current + 1} / 26 </h4>
        </div>
    );
};


const mapStateToProps = (state) => ({
    letters: state.letters,
    current: state.current.currentIndex
})

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

})


export default connect(mapStateToProps, mapDispatchToProps)(Alphabet);