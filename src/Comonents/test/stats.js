import Accordion from "./Accordion";
import {connect} from "react-redux";
import React from 'react'

const Stats = (props) => {
    const {stats} = props;

    return (

        <div>


            <h1 className="gradient-text-animation">Your score!</h1>

            <Accordion title={"Correct: " + stats.corList.length}
                       children={stats.corList.join(', ')}/>
            <Accordion title={"Wrong: " + stats.incList.length}
                       children={stats.incList.join(', ')}/>
            <Accordion title={"Skipped: " + stats.pasList.length}
                       children={stats.pasList.join(', ')}/>

        </div>
    )
};


const mapStateToProps = (state) => ({
    stats: state.stats


})


export default connect(mapStateToProps, null)(Stats);