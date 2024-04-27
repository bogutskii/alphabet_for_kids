import React from 'react';
import {connect} from "react-redux";

const InitialLetterWord = ({show,currentLanguage, letters, currentIndex}) => {
  if (show) {
    return null;
  }

  const {words, transaction} = letters[currentLanguage][currentIndex];
  return (
    <div className="wrap-child-active-15">
      {words + ' ' + transaction}
    </div>
  );
}

const mapStateToProps = (state) => ({
  currentIndex: state.current.currentIndex,
  currentLanguage: state.currentLanguage,
  letters: state.alphabets,
  show: state.test.testStart
})


export default connect(mapStateToProps, null)(InitialLetterWord);