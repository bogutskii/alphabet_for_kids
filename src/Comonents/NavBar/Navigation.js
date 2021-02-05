import React from 'react'
import {NavLink} from "react-router-dom";

const Navigation = () => {
    return <div>
        <NavLink to='/Video'>Video</NavLink>
        <NavLink to='/Test'>Test</NavLink>
        <NavLink to='/Stats'>Stats</NavLink>
        <NavLink to='/About'>About</NavLink>
    </div>
}
export default Navigation;