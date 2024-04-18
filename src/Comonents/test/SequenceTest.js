import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import './SequenceTest.css'

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
    answers,
    correctAnswer
  };
};

const SequenceTest = ({alphabet}) => {
  const [testState, setTestState] = useState({
    currentQuestion: '',
    answerOptions: [],
    correctAnswer: '',
    answered: false,
    correctCount: 0,
    answerFeedback: ''
  });

  useEffect(() => {
    startTest();
  }, []);

  const startTest = () => {
    const question = generateSequenceQuestion(alphabet);
    setTestState({
      ...testState,
      currentQuestion: question.question,
      answerOptions: question.answers,
      correctAnswer: question.correctAnswer,
      answered: false,
      answerFeedback: ''
    });
  };

  const handleAnswer = (answer) => {
    if (answer === testState.correctAnswer) {
      setTestState({
        ...testState,
        answered: true,
        correctCount: testState.correctCount + 1,
        answerFeedback: 'correct'
      });
    } else {
      setTestState({
        ...testState,
        answered: true,
        answerFeedback: 'incorrect'
      });
    }
  };
  return (
    <div className="container_game">
      <h1>Sequence Letters</h1>
      <div>
        <p className="question_game">{testState.currentQuestion}</p>
        <div>
          {testState.answerOptions.map((option, index) => (
            <button key={index}
                    className={`button_game ${testState.answered ? (option === testState.correctAnswer ? 'correct' : 'incorrect') : ''}`}
                    onClick={() => handleAnswer(option)}
                    disabled={testState.answered}>
              {option}
            </button>
          ))}
        </div>
        <div>
          {testState.answered && (
            <div className={testState.answerFeedback === 'correct' ? 'feedback correct' : 'feedback incorrect'}>
              {testState.answerFeedback === 'correct' ? 'Correct!' : 'Incorrect!'}
            </div>
          )}

        </div>
        <div className='wrap_game'>
          <button className='button_game' onClick={startTest}>New Question</button>
        </div>
      </div>
    </div>
  )
    ;

}
const mapStateToProps = (state) => ({
  alphabet: state.letters
});

export default connect(mapStateToProps)(SequenceTest);
