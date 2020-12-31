import React from "react";
import "./upperLineAlph.css";



export default function UpperLineAlph (props){
return <div className='center-div'>
        <div className="all-alph">
            {props.abc.map((letter, i) =>
                i === props.count ? (
                    <span className="selected" key={i}>
                      {letter}
                    </span>
                ) : (
                    <span className="letterCircle" key={i}>
                      {letter}
                    </span>
                )
            )}
        </div>
    </div>

}


