import React from "react";
import {reduxForm} from "redux-form";
import {Field} from "redux-form";
import {connect} from "react-redux";
import {setLogIn} from "../../redux/authReducers";
import Button from "@material-ui/core/Button";
import {renderTextField} from "../ToDoPost/toDoPost";
import s from './login.module.css'
import {requiredRieldValidator} from "../validators/validators";

const LoginForm = ({handleSubmit}) => {
    return (
        <div>
        <form className={s.form} onSubmit={handleSubmit}>
            <div className={s.fields}>
                <Field validate={[requiredRieldValidator]} placeholder={"login"} name={"login"} component={renderTextField}/>
            </div>
            <div className={s.fields}>
                <Field validate={[requiredRieldValidator]} placeholder={"Password"} name={"password"} component={renderTextField}/>
            </div>
            <div className={s.fields}>
                <button><Button placeholder={"login"}>Login</Button></button>
            </div>
        </form>
        </div>
    )
}

const LoginReduxForm = reduxForm({form: "login"})(LoginForm)

const Login = (props) => {
    const onSubmit = (values) => {
        props.setLogIn(values.login, values.password)
    }
    return <LoginReduxForm onSubmit={onSubmit}/>

}
let mapStateToProps = (state) => ({

});
export const LoginContainer = connect(mapStateToProps, {setLogIn})(Login);









