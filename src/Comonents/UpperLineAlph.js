import React from "react";
import "../styles.css";



export default function UpperLineAlph (props){
return <div>
        <p className="all-alph">
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
        </p>
    </div>

}


