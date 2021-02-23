import React from "react";

import Accordion from "./Accordion"
import {connect} from "react-redux";


const Stats = (props)=>{
    const {stats} = props
        return (
            <div>
                <h1>Your score!</h1>
                <Accordion title={"Correct: "+ stats.corList.length}
                           children={stats.corList.join(', ')}/>
                <Accordion title={"Wrong: " + stats.incList.length}
                           children={stats.incList.join(', ')}/>
                <Accordion title={"Skipped: " + stats.pasList.length}
                           children={stats.pasList.join(', ')}/>

            </div>
        )
    };


const mapStateToProps = (state) => ({
    stats: state.stats,

})
//
// const mapDispatchToProps = (dispatch) => ({
//
//     changeCreateModal: (value) => dispatch({
//         type: 'SHOW_OR_HIDE_STATS',
//         payload: {
//             value: value
//         }
//     }),
//
// })


export default connect(mapStateToProps, null)(Stats);
// export default Stats