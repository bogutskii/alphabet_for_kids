import React, {useState} from "react";
import "./alphabet-style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import UpperLineAlph from "../src/Comonents/UpperLineAlph"
import Stats from "./Comonents/Stats";
import Word from "./Comonents/Word";
import {connect} from "react-redux";


const Alphabet = (props) => {
const {letters, current} = props
    let randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;


    return (

        <div>


            {/*<UpperLineAlph abc={abc} count={count} setCount={(count => setCount(count))}/>*/}


            <div className="wrap">

                {/*<a className="wrap-child-active-25" onClick={previous}>*/}
                {/*    &#8826;*/}
                {/*</a>*/}

                <div
                    style={{color: randomColor}}
                    className="wrap-child-active-50"
                >
                    {props.letters[props.current.currentIndex].letter}

                </div>


                {/*/!*<a className="wrap-child-active-25" onClick={next}>*!/*/}
                {/*    &#8827;*/}
                {/*</a>*/}

            </div>


             <h4>{props.current.currentIndex + 1} / 26 </h4>
        </div>
    );
};


const mapStateToProps = (state) => ({
    letters: state.letters,
    current: state.current
})

const mapDispatchToProps = (dispatch) => ({

    changeCreateModal: (value) => dispatch({
        type: 'CHANGE_CREATE_MODAL',
        payload: {
            value: value
        }
    }),

})


export default connect(mapStateToProps, mapDispatchToProps)(Alphabet);