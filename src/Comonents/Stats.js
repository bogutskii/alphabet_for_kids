import React from "react";
import "../styles.css";



export default function Stats (props){
    return  <div>
        <h1>Your score!</h1>
        <div>
            <h3>Correct:{props.results.correct} </h3>
        </div>

        <div>
            <h3>
                Wrong: {props.results.incorrect}&nbsp;&nbsp;&nbsp;
                {props.results.incList.length > 0 ? (
                    <select>
                        {props.results.incList.map((el) => (
                            <option>{el}</option>
                        ))}
                    </select>
                ) : ""}
            </h3>
        </div>

        <div>
            <h3>
                Skipped:{props.results.pasS} &nbsp;&nbsp;&nbsp;
                {props.results.pasList.length > 0 ? (
                    <select>
                        {props.results.pasList.map((el) => (
                            <option>{el}</option>
                        ))}
                    </select>
                ) : ""}
            </h3>
        </div>
        <button onClick={props.goBack} className="btn btn-secondary">
            Go back
        </button>
    </div>
};


