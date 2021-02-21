import React from 'react'
import {NavLink} from "react-router-dom";

const Navigation = () => {
    return <div>
        <NavLink to='/' className="btn btn-info">Main</NavLink>
        <NavLink to='/Alphabet' className="btn btn-info">Alphabet</NavLink>
        <NavLink to='/Video' className="btn btn-info">Video</NavLink>
        <NavLink to='/Test' className="btn btn-info">Test</NavLink>
        <NavLink to='/Stats' className="btn btn-info">Stats</NavLink>
        <NavLink to='/AboutPage' className="btn btn-info">About</NavLink>
    </div>
}
export default Navigation;