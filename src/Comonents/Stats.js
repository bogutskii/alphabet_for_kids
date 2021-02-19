import React from "react";
import "../styles.css";
import Accordion from "./Accordion"
import {connect} from "react-redux";


const Stats = (props)=>{
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


const mapStateToProps = (state) => ({
    letters: state.letters,
    test: state.test,
})

const mapDispatchToProps = (dispatch) => ({

    changeCreateModal: (value) => dispatch({
        type: 'CHANGE_CREATE_MODAL',
        payload: {
            value: value
        }
    }),

})


export default connect(mapStateToProps, mapDispatchToProps)(Stats);