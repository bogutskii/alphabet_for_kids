import React from 'react'
import {NavLink} from "react-router-dom";
import "./header.css"

const Navigation = () => {
  return <div className='navigation'>
    <div className='nav-Menu'>
      <NavLink to='/' className="btn-rose m-1">Alphabet</NavLink>
      <NavLink to='/video' className="btn-rose m-1">Video</NavLink>
      <NavLink to='/test' className="btn-rose m-1">Test</NavLink>
      <NavLink to='/about' className="btn-rose m-1">About</NavLink>
      <NavLink to='/sequence' className="btn-rose m-1">Sequence</NavLink>
    </div>
  </div>
}
export default Navigation;