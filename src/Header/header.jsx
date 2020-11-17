import React from 'react';
import {NavLink} from "react-router-dom";
import Button from "@material-ui/core/Button";
import s from './header.module.css'

const Header = (props) => {
    return (
        <div className={s.header}>
            <div className={s.loginBlock}>
                {props.isAuth
                    ? props.userData.first_name + " " + props.userData.last_name
                    : <NavLink to={'/login'}><Button variant="contained" color="primary">Login</Button></NavLink>
                }
            </div>
            <div className={s.loginBlock}>
                <NavLink to={'/registrate'}><Button variant="contained" color="primary">Registration</Button></NavLink>
            </div>
            <div className={s.loginBlock}>
                <NavLink to={'/profile'}><Button variant="contained" color="primary">Main Page</Button></NavLink>
            </div>
        </div>
    );
}
export default Header;