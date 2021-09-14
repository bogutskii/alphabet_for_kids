import React from 'react'
import {NavLink} from "react-router-dom";

const Navigation = () => {
  return <div>
        <NavLink to='/' className="btn btn-info m-1">Alphabet</NavLink>
        <NavLink to='/Video' className="btn btn-info m-1">Video</NavLink>
        <NavLink to='/Test' className="btn btn-info m-1">Test</NavLink>
        <NavLink to='/AboutPage' className="btn btn-info m-1">About</NavLink>
    </div>
}
export default Navigation;