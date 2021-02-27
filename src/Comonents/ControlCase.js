import React from 'react';
import {connect} from "react-redux";

const ControlCase = (props) => {

    return  <div>


    </div>

}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({

   upperCase: (value) => dispatch({
        type: 'UPPER_CASE',

    }),
    lowerCase: (value) => dispatch({
        type: 'LOWER_CASE',
    }),
    bothCase: (value) => dispatch({
        type: 'BOTH_CASE',
    }),

})


export default connect(mapStateToProps, mapDispatchToProps)(ControlCase);