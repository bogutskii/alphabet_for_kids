import Accordion from "./Accordion";
import {connect} from "react-redux";
import React from 'react'

const Stats = (props) => {
    const {stats} = props;
    return (
      <Accordion title="Stats">
        <div className="stats-text">
          {/*<h1 className="gradient-text-animation">Your score!</h1>*/}
          <div className="stats-title"> {"Correct: " + stats.corList.length}</div>
          <div className="stats-title">{"Wrong: " + stats.incList.length}</div>
          <div className="stats-title"> {"Skipped: " + stats.pasList.length}</div>
        </div>
      </Accordion>
    )
};


const mapStateToProps = (state) => ({
    stats: state.stats


})


export default connect(mapStateToProps, null)(Stats);