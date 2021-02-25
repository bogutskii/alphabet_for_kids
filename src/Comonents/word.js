import React from 'react';
import {connect} from "react-redux";

const Word = (props) => {

    return props.show ? <></> : <div className="wrap-child-active-15" >
        {props.letters[props.currentIndex].words + ' '+ props.letters[props.currentIndex].transaction}
    </div>

}

const mapStateToProps = (state) => ({
    currentIndex: state.current.currentIndex,
    letters: state.letters,
    show: state.test.testStart
})


export default connect(mapStateToProps, null)(Word);