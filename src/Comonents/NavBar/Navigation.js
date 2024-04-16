import React from 'react'
import {NavLink} from "react-router-dom";

const Navigation = () => {
  return <div className='navigation'>
        <NavLink to='/' className="btn-rose m-1">Alphabet</NavLink>
        <NavLink to='/Video' className="btn-rose m-1">Video</NavLink>
        <NavLink to='/Test' className="btn-rose m-1">Test</NavLink>
        <NavLink to='/AboutPage' className="btn-rose m-1">About</NavLink>
    </div>
}
export default Navigation;