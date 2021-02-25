import React from "react";
import "../styles.css";
import {connect} from "react-redux";


const TestButtons = (props) => {


  let letters = [
        {letter: "A", words: "Apple", transaction: "[ei]"},
        {letter: "B", words: "Ball", transaction: "[bi:]"},
        {letter: "C", words: "Cat", transaction: "[ci:]"},
        {letter: "D", words: "Dog", transaction: "[di:]"},
        {letter: "E", words: "Eat", transaction: "[i:]"},
        {letter: "F", words: "Fox", transaction: "[ef]"},
        {letter: "G", words: "Grass", transaction: "[ʤi:]"},
        {letter: "H", words: "Hat", transaction: "[eiʧ]"},
        {letter: "I", words: "Ice", transaction: "[ai]"},
        {letter: "J", words: "Jam", transaction: "[ʤei]"},
        {letter: "K", words: "Kid", transaction: "[kei]"},
        {letter: "L", words: "Life", transaction: "[el]"},
        {letter: "M", words: "Mouse", transaction: "[em]"},
        {letter: "N", words: "Nose", transaction: "[en]"},
        {letter: "O", words: "Oak", transaction: "[ou]"},
        {letter: "P", words: "Pet", transaction: "[pi:]"},
        {letter: "Q", words: "Queen", transaction: "[kju:]"},
        {letter: "R", words: "Red", transaction: "[a:]"},
        {letter: "S", words: "Sport", transaction: "[es]"},
        {letter: "T", words: "Tab", transaction: "[ti:]"},
        {letter: "U", words: "Up", transaction: "[ju:]"},
        {letter: "V", words: "Van", transaction: "[vi:]"},
        {letter: "W", words: "Water", transaction: "[‘dablju:]"},
        {letter: "X", words: "Xenia", transaction: "[eks]"},
        {letter: "Y", words: "Yes", transaction: "[wai]"},
        {letter: "Z", words: "Zebra", transaction: "[zed]"}
    ]
    //console.log(letters.map((obj,i)=> {...obj, id: i}))




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
