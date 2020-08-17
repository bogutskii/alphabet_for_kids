import React, { useState } from "react";
import "./alphabet-style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
const Alphabet = (props) => {
  let randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  //const [alphabet, setAlphabet] = useState("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
 
  const abc = [
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

  const [count, setCount] = useState(0);
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
let rand = Math.floor(Math.random()*26)
setCount(rand)
  }

  return (
    <div>
   
<p className="all-alph">
        {abc.map((letter, i) =>
          i === count ? (
            <span className="selected" key={i}>{letter}</span>
          ) : (
            <span className="letterCircle"key={i}>{letter}</span>
          )
        )}

</p>
  
      <hr />

<div className="wrap">

          <a className="wrap-child-active-25"  onClick={previous}>
          &#8826;
          </a>

          <div style={{ color: randomColor }} className="wrap-child-active-50">
            {abc[count] + abc[count].toLowerCase()}
          </div>

          <a className="wrap-child-active-25" onClick={next}>
          &#8827;
          </a>

</div>
      <hr />



      <div className="btn-group" role="group" aria-label="Basic example">
  <button type="button" className="btn btn-secondary"  onClick={previous}>Previous</button>
  <button type="button" className="btn btn-secondary"onClick={next}>Next</button>
  <button type="button" className="btn btn-secondary"  onClick={randomLetter}>Random</button>
</div>


</div>
  );
};
export default Alphabet;
