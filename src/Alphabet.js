import React, {useState} from "react";
import "./alphabet-style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import UpperLineAlph from "./Comonents/upperLineAlph"
//import Stats from "./Comonents/test/test";
import Word from "./Comonents/word";
import {connect} from "react-redux";


const Alphabet = (props) => {
    const {letters, current, effects, previousLetter, nextLetter} = props

    let randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    let nextEffect = effects[Math.floor(Math.random() * effects.length)]


    const checkKey = (e) => {

        console.log(e, e.keyCode)
        if (e.keyCode === '37') {
            previousLetter(-1)
        } else if (e.keyCode === '39') {
            nextLetter(1)
        }
    }

    return (

        <div onKeyDown={(e)=>checkKey(e)} >


            <UpperLineAlph/>


            <div className="wrap">

                <a className="wrap-child-active-25" onClick={() => previousLetter(-1)}>
                    &#8826;
                </a>

                <div
                    style={{color: randomColor}}
                    className={`wrap-child-active-50 ${nextEffect}`}

                >
                    {letters[current].letter}
                    <Word/>

                </div>

                <a className="wrap-child-active-25" onClick={() => nextLetter(1)}>
                    &#8827;
                </a>

            </div>


            <h4>{props.current + 1} / 26 </h4>
        </div>
    );
};


const mapStateToProps = (state) => ({
    letters: state.letters,
    current: state.current.currentIndex,
    effects: state.effects.classNames
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