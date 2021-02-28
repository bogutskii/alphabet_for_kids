import React, {useState} from 'react';
import {connect} from "react-redux";
import {Button, ButtonGroup} from 'reactstrap'

const ControlCase = (props) => {
    const {toggleCase} = props
    const [cSelected, setCSelected] = useState(["upper"]);
    const [rSelected, setRSelected] = useState("upper");


    const onCheckboxBtnClick = (selected) => {
        setCSelected([])
        setRSelected(null)

        const index = cSelected.indexOf(selected);
        if (index < 0) {
            cSelected.push(selected);
        } else {
            cSelected.splice(index, 1);
        }
        setCSelected([...cSelected]);
        toggleCase(selected)
    }
    return <div>
        <h5>Case Options</h5>
        <ButtonGroup>
            <Button color="warning" onClick={() => onCheckboxBtnClick("upper")}
                    active={rSelected === 'upper'}>A</Button>
            <Button color="warning" onClick={() => onCheckboxBtnClick('lower')}
                    active={rSelected === 'lower'}>a</Button>
            <Button color="warning" onClick={() => onCheckboxBtnClick('both')} active={rSelected === 'both'}>Aa</Button>
        </ButtonGroup>
        <p>{rSelected}</p>

    </div>

}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch) => ({

    toggleCase: (activeCase) => dispatch({
        type: 'TOGGLE_CASE',
        payload: {
            activeCase: activeCase,
        }
    }),


})


export default connect(mapStateToProps, mapDispatchToProps)(ControlCase);