import React from 'react';
import {connect} from "react-redux";

const InitialLetterWord = ({currentLanguage, letters, currentIndex}) => {
  const {words, transcription} = letters[currentLanguage][currentIndex];
  return (
    <div className="wrap-child-active-15">
      {words + ' [' + transcription+']'}
    </div>
  );
}

const mapStateToProps = (state) => ({
  currentIndex: state.currentIndex,
  currentLanguage: state.currentLanguage,
  letters: state.alphabets,
})


export default connect(mapStateToProps, null)(InitialLetterWord);