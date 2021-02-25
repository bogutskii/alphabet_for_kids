import React from "react";
import "./upperLineAlph.css";

import {connect} from "react-redux";


const UpperLineAlph = (props) => {

    return <div className='center-div'>
        <div className="all-alph">
            {props.letters.map((el, i) =>
                i === props.current ? (
                    <span className={`selected ${[0, 4, 8, 14, 20, 24].includes(i) ? 'vowels' : ''}`} key={i}>
                      {el.letter}
                    </span>
                ) : (
                    <span onClick={() => props.changeLetterOnClicked(i)} className="letterCircle" key={i}>
                      {el.letter}
                    </span>
                )
            )}
        </div>
    </div>

}

const mapStateToProps = (state) => ({
    letters: state.letters,
    current: state.current.currentIndex
})

const mapDispatchToProps = (dispatch) => ({

    changeLetterOnClicked: (index) => dispatch({
        type: 'CHANGE_LETTER_ON_CLICKED',
        payload: {
            index: index
        }
    }),

})


export default connect(mapStateToProps, mapDispatchToProps)(UpperLineAlph);


