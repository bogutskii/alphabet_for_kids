import React from "react";

import Accordion from "./Accordion"
import {connect} from "react-redux";
import TestButtons from "./testButtons";
import Word from "./word";
import '../alphabet-style.css'


const Test = (props) => {
    const {stats, test} = props
    let randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;

    return (
        <div>

            <div
                style={{color: randomColor}}
                className="wrap-child-active-50"
            >
            <ul>
                {[...test.alphabetForTest].sort(()=> Math.random() - 0.5).map(
                    letter=> <li>{letter}</li>
                )}
            </ul>

            </div>

            {/*{test.testStart && <TestButtons/>}*/}

            {/*<h1>Your score!</h1>*/}
            {/*<Accordion title={"Correct: " + stats.corList.length}*/}
            {/*           children={stats.corList.join(', ')}/>*/}
            {/*<Accordion title={"Wrong: " + stats.incList.length}*/}
            {/*           children={stats.incList.join(', ')}/>*/}
            {/*<Accordion title={"Skipped: " + stats.pasList.length}*/}
            {/*           children={stats.pasList.join(', ')}/>*/}

        </div>
    )
};


const mapStateToProps = (state) => ({
    stats: state.stats,
    test: state.test

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


export default connect(mapStateToProps, null)(Test);
// export default Stats