import React from "react";
import "./upperLineAlph.css";
import {connect} from "react-redux";

const Alpha_line = ({letters,currentLanguage, current, changeLetterOnClicked}) => {
  const vowelsIndices = [0, 4, 8, 14, 20, 24];
  return (
    <div className='center-div'>
      <div className="all-alph">
        {letters[currentLanguage].map((el, i) => (
          <span
            className={`letterSquare ${i === current ? 'selected' : ''} ${vowelsIndices.includes(i) ? 'vowels' : ''}`}
            key={i}
            onClick={i !== current ? () => changeLetterOnClicked(i): null}
          >
            {el.letter}
          </span>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  letters: state.alphabets,
  current: state.current.currentIndex,
  currentLanguage: state.currentLanguage,
})

const mapDispatchToProps = (dispatch) => ({

  changeLetterOnClicked: (index) => dispatch({
    type: 'CHANGE_LETTER_ON_CLICKED',
    payload: {
      index: index
    }
  }),

})


export default connect(mapStateToProps, mapDispatchToProps)(Alpha_line);


