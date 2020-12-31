import React from "react";
import "../styles.css";
import Accordion from "./Accordion"


export default function Stats (props){
        return (
            <div>
                <h1>Your score!</h1>
                <Accordion title={"Correct: "+ props.results.correct}
                           children={props.results.corList.join(', ')}/>
                <Accordion title={"Wrong: " + props.results.incorrect}
                           children={props.results.incList.join(', ')}/>
                <Accordion title={"Skipped: " + props.results.pasS}
                           children={props.results.pasList.join(', ')}/>

            </div>
        );
    };

