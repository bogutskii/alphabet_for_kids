import React from 'react';
import {connect} from "react-redux";
import {Button, ButtonGroup} from 'reactstrap'
// import {toggleCase} from "./redux/actions";
const ControlCase =({toggleCase, activeCase})=>{
  return <div className="control-case-btn">
    <ButtonGroup>
      <Button color="primary" outline onClick={() => toggleCase("upper")}
              active={activeCase === 'upper'}>A</Button>
      <Button color="primary" outline onClick={() => toggleCase('lower')}
              active={activeCase === 'lower'}>a</Button>
      {/*<Button color="warning" onClick={() => toggleCase('both')} active={activeCase === 'both'}>Aa</Button>*/}
    </ButtonGroup>
  </div>

}

const mapStateToProps = (state) => ({
  activeCase: state.currentCase
})

const mapDispatchToProps = (dispatch) => ({

  toggleCase: (activeCase) => dispatch({
    type: 'TOGGLE_CASE',
    payload: {
      activeCase: activeCase,
    }
  }),


})


export default connect(mapStateToProps, mapDispatchToProps)(ControlCase);