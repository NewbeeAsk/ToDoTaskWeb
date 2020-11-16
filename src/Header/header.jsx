import React from 'react';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
            <div>
                {props.isAuth
                    ? props.userId
                    : <NavLink to={'/login'} >Login</NavLink>
                }
                <NavLink to={'/registrate'} >registrate</NavLink>
                <NavLink to={'/profile'} >profile</NavLink>
            </div>
    );
}
export default Header;