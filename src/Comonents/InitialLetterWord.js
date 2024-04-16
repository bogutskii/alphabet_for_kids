import React from 'react';
import {connect} from "react-redux";

const InitialLetterWord = ({show, letters, currentIndex}) => {
  if (show) {
    return null;
  }

  const {words, transaction} = letters[currentIndex];
  return (
    <div className="wrap-child-active-15">
      {words + ' ' + transaction}
    </div>
  );
}

const mapStateToProps = (state) => ({
  currentIndex: state.current.currentIndex,
  letters: state.letters,
  show: state.test.testStart
})


export default connect(mapStateToProps, null)(InitialLetterWord);