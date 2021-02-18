import React from "react";
import "./accordion.css";

import {connect} from 'react-redux'

const Accordion = ({ title, children }) => {
    const [isOpen, setOpen] = React.useState(false);
    return (
        <div className="accordion-wrapper">
            <div
                className={`accordion-title ${isOpen ? "open" : ""}`}
                onClick={() => setOpen(!isOpen)}
            >
                {title}
            </div>
            <div className={`accordion-item ${!isOpen ? "collapsed" : ""}`}>
                <div className="accordion-content">{children}</div>
            </div>
        </div>
    );
};


const mapStateToProps = (state) => ({
    stats: state.stats,
})

const mapDispatchToProps = (dispatch) => ({

    changeCreateModal: (value) => dispatch({
        type: 'CHANGE_CREATE_MODAL',
        payload: {
            value: value
        }
    }),

})


export default connect(mapStateToProps, mapDispatchToProps)(Accordion);
