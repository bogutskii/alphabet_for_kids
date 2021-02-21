import React from "react";
import "../styles.css";
import Accordion from "./Accordion"
import {connect} from "react-redux";


const Stats = (props)=>{
        return (
            <div>
                <h1>Your score!</h1>
                <Accordion title={"Correct: "+ props.stats.correct}
                           children={props.stats.corList.join(', ')}/>
                <Accordion title={"Wrong: " + props.stats.incorrect}
                           children={props.stats.incList.join(', ')}/>
                <Accordion title={"Skipped: " + props.stats.skip}
                           children={props.stats.pasList.join(', ')}/>

            </div>
        );
    };


const mapStateToProps = (state) => ({
    stats: state.stats,

})

const mapDispatchToProps = (dispatch) => ({

    changeCreateModal: (value) => dispatch({
        type: 'SHOW_OR_HIDE_STATS',
        payload: {
            value: value
        }
    }),

})


export default connect(mapStateToProps, mapDispatchToProps)(Stats);