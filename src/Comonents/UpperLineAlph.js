import React from "react";
import "./upperLineAlph.css";



export default function UpperLineAlph (props){
return <div className='center-div'>
        <div className="all-alph">
            {props.abc.map((letter, i) =>
                i === props.count ? (
                    <span className={`selected ${[0,4,8,14,20,24].includes(i)? 'vowels' : ''}`} key={i}>
                      {letter}
                    </span>
                ) : (
                    <span onClick={()=>props.setCount(i)} className="letterCircle" key={i}>
                      {letter}
                    </span>
                )
            )}
        </div>
    </div>

}


