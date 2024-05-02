import React from 'react'
import {NavLink} from "react-router-dom";
import ControlCase from "../ControlCase";
import LanguageSelector from "../LanguageSelector";
import "./header.css"

const Navigation = () => {
  return <div className='navigation'>
    <NavLink to='/' className="btn-rose m-1">Alphabet</NavLink>
    <NavLink to='/Video' className="btn-rose m-1">Video</NavLink>
    <NavLink to='/Test' className="btn-rose m-1">Test</NavLink>
    <NavLink to='/AboutPage' className="btn-rose m-1">About</NavLink>
    <NavLink to='/sequence' className="btn-rose m-1">Sequence</NavLink>
    <div className="app-options">
      <ControlCase/>
      <LanguageSelector/>

    </div>
  </div>
}
export default Navigation;