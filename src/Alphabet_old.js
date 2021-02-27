import React, { useState } from "react";
import "./alphabet-style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import UpperLineAlph from "./Comonents/upperLineAlph"
import Stats from "./Comonents/test/test";
import Word from "./Comonents/word";


const Alphabet = (props) => {
  let randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;

  const alp = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z"
  ];
  const [abc, setAbc] = useState(alp.map((el) => el + el.toLowerCase()));
  const [count, setCount] = useState(0);
  const [hide, setHide] = useState(false);
  const [counter, setCounter] = useState(0);
  const [formCheck, setFormCheck] = useState(false);
  const [results, setResults] = useState({
    correct: 0,
    incorrect: 0,
    pasS: 0,
    incList: [],
    corList: [],
    pasList: []
  });
  const next = () => {
    if (count === 25) {
      setCount(0);
    } else {
      setCount(count + 1);
    }
  };
  const previous = () => {
    if (count === 0) {
      setCount(25);
    } else {
      setCount(count - 1);
    }
  };
  const randomLetter = () => {
    let rand = Math.floor(Math.random() * 26);
    setCount(rand);
  };
  const startTest = () => {
    setCount(0);
    setHide(!hide);
    setAbc([...abc].sort(() => 0.5 - Math.random()));
  };

  const correct = () => {
    skipWrongCorrect();
    setResults({
      ...results,
      correct: results.correct + 1,
      corList: [...results.corList, abc[count]]
    });
  };
  const wrong = () => {
    skipWrongCorrect();
    setResults({...results,
      incorrect: results.incorrect + 1,
      incList: [...results.incList, abc[count]]
    });
  };
  const skip = () => {
    skipWrongCorrect();
    setResults({...results,
      pasS: results.pasS + 1,
      pasList: [...results.pasList, abc[count]]
    });
  };

  const goBack = () => {
    setCount(0);
    setCounter(0);
    setFormCheck(!formCheck);
    setHide(!hide);
    setResults({
      correct: 0,
      incorrect: 0,
      pasS: 0,
      corList: [],
      incList: [],
      pasList: []
    });
    setAbc(abc.sort());
  };

  const stopTest = () => {
    setCount(0);
    setFormCheck(!formCheck);
    setAbc(abc.sort());
  };
  const skipWrongCorrect = () => {
    if (count === 25) {
      setCount(0);
      setFormCheck(!formCheck);
    }
    setCount(count + 1);
    setCounter(counter + 1);
  };

  const upperAndLowerCases = () => {
    setAbc(alp.map((el) => el + el.toLowerCase()));
  };

  const upperCase = () => {
    setAbc(abc.map((el) => el[0].toUpperCase()));
  };

  const lowerCase = () => {
    setAbc(abc.map((el) => el[0].toLowerCase()));
  };

  return (
      <>

        {!formCheck ? (
            <div>

              {hide ? (
                  ""
              ) : (
                  <UpperLineAlph abc={abc} count={count} setCount={(count=>setCount(count))}/>
              )}

              <div className="wrap">
                <a className="wrap-child-active-25" onClick={previous}>
                  &#8826;
                </a>

                <div
                    style={{ color: randomColor }}
                    className="wrap-child-active-50"
                >
                  {abc[count]}
                  <div className="wrap-child-active-15" >  <Word index={count} show={hide}/></div>
                </div>


                <a className="wrap-child-active-25" onClick={next}>
                  &#8827;
                </a>

              </div>


              {hide ? (
                  <button className="btn btn-secondary" onClick={stopTest}>
                    Stop Test
                  </button>
              ) : (
                  <button onClick={startTest} className="btn btn-secondary">
                    Start Test
                  </button>
              )}
              <p />

              <br />
              {hide ? (
                  <div>
                    <button className="btn btn-secondary" onClick={correct}>
                      Correct
                    </button>

                    <button className="btn btn-secondary" onClick={wrong}>
                      Wrong
                    </button>

                    <button className="btn btn-secondary" onClick={skip}>
                      Skip
                    </button>
                    <p />
                    {<h4>{counter + "/" + 26}</h4>}
                  </div>
              ) : (
                  ""
              )}
              <p />
              {hide ? (
                  ""
              ) : (
                  <div className="btn-group" role="group">
                    <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={previous}
                    >
                      Previous
                    </button>
                    <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={next}
                    >
                      Next
                    </button>
                    <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={randomLetter}
                    >
                      Random
                    </button>
                  </div>
              )}
              {hide ? (
                  ""
              ) : (
                  <div className="lower-upper-both">
                    <button
                        className="btn btn-secondary"
                        onClick={() => upperAndLowerCases()}
                    >
                      Both
                    </button>
                    <button className="btn btn-secondary" onClick={() => upperCase()}>
                      Upper
                    </button>
                    <button className="btn btn-secondary" onClick={() => lowerCase()}>
                      Lower
                    </button>
                  </div>
              )}
            </div>
        ) : (

            <div>
              <Stats results={results} goBack={goBack} hide={hide}/>

              <br />

              {hide ? (
                  <button onClick={goBack} className="btn btn-secondary">
                    Go back
                  </button>
              ) : (
                  ""
              )}
            </div>
        )}

      </>
  );
};



export default Alphabet;
