import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import './SequenceTest.css';
import GameOptions from "../Options/GameOptions";

const generateSequenceQuestion = (letters) => {
  const alphabet = letters.map(letter => letter.letter);
  const start = Math.floor(Math.random() * (alphabet.length - 4));
  const missingIndex = start + Math.floor(Math.random() * 3);
  const correctAnswer = alphabet[missingIndex];
  const sequence = alphabet.slice(start, start + 4).map((letter, index) =>
    index + start === missingIndex ? '_' : letter
  );

  let answers = [correctAnswer];
  while (answers.length < 4) {
    const randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
    if (!answers.includes(randomLetter)) {
      answers.push(randomLetter);
    }
  }
  answers.sort(() => Math.random() - 0.5);

  return {
    question: sequence.join(' '),
    formattedQuestion: sequence.map((letter, index) => ({
      letter,
      isMissing: index + start === missingIndex
    })),
    answers,
    correctAnswer,
    missingIndex
  };
};

const SequenceTest = ({ alphabet,currentLanguage }) => {
  const [testState, setTestState] = useState({
    currentQuestion: '',
    formattedQuestion: [],
    answerOptions: [],
    correctAnswer: '',
    answered: false,
    correctCount: 0,
    answerFeedback: ''
  });

  useEffect(() => {
    if (alphabet.length > 0) {
      startTest();
    }
  }, [alphabet]);

  const startTest = () => {
    const question = generateSequenceQuestion(alphabet[currentLanguage]);
    setTestState({
      ...testState,
      currentQuestion: question.question,
      formattedQuestion: question.formattedQuestion,
      answerOptions: question.answers,
      correctAnswer: question.correctAnswer,
      answered: false,
      userAnswer: null,
      answerFeedback: ''
    });
  };

  const handleAnswer = (answer) => {
    const isCorrect = answer === testState.correctAnswer;
    const realAnswer = testState.formattedQuestion.map(item => ({
      ...item,
      letter: item.isMissing ? answer : item.letter
    }));
    setTestState({
      ...testState,
      formattedQuestion: realAnswer,
      answered: true,
      userAnswer: answer,
      answerFeedback: isCorrect ? 'correct' : 'incorrect'
    });
  };

  return (
    <div className="sequence-game-container">
      <h1 className="sequence-game-title">Sequence Letters</h1>
      <GameOptions showCase={false}/>
      <p className="sequence-game-question">
        {testState.formattedQuestion.map((item, index) => (
          <span key={index} style={{
            color: testState.answered && item.isMissing ?
              (testState.answerFeedback === 'correct' ? 'green' : 'red') : 'black'
          }}>
            {item.letter}
          </span>
        ))}
      </p>
      <div className='sequence-game-answers'>
        {testState.answerOptions.map((option, index) => (
          <button key={index}
                  className={`sequence-game-button ${testState.answered ? (option === testState.correctAnswer ? 'correct' : 'incorrect') : ''}`}
                  onClick={() => handleAnswer(option)}
                  disabled={testState.answered}>
            {option}
          </button>
        ))}
      </div>
      {testState.answered && (
        <div className={`sequence-game-feedback ${testState.answerFeedback}`}>
          {testState.answerFeedback === 'correct' ? 'Correct!' : 'Incorrect!'}
        </div>
      )}
      <div className='sequence-game-new-question'>
        <button className='sequence-game-button' onClick={startTest}>New Question</button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  alphabet: state.alphabets,
  currentLanguage: state.currentLanguage
});

export default connect(mapStateToProps)(SequenceTest);
