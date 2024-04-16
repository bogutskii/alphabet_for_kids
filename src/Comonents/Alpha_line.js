import React from "react";
import "./upperLineAlph.css";
import {connect} from "react-redux";

const Alpha_line = ({letters, current, changeLetterOnClicked}) => {
  const vowelsIndices = [0, 4, 8, 14, 20, 24];
  return (
    <div className='center-div'>
      <div className="all-alph">
        {letters.map((el, i) => (
          <span
            className={`letterCircle ${i === current ? 'selected' : ''} ${vowelsIndices.includes(i) ? 'vowels' : ''}`}
            key={i}
            onClick={i !== current ? () => changeLetterOnClicked(i) : undefined}
          >
            {el.letter}
          </span>
        ))}
      </div>
    </div>
  );
};

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


export default connect(mapStateToProps, mapDispatchToProps)(Alpha_line);


