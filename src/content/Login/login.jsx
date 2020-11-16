import React from "react";
import {reduxForm} from "redux-form";
import {Field} from "redux-form";
import {connect} from "react-redux";
import {setLogIn} from "../../redux/authReducers";
import Button from "@material-ui/core/Button";
import {renderTextField} from "../ToDoPost/toDoPost";

const LoginForm = ({handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field placeholder={"login"} name={"login"} component={renderTextField}/>
            </div>
            <div>
                <Field placeholder={"Password"} name={"password"} component={renderTextField}/>
            </div>
            <div>
                <button><Button placeholder={"login"}>Login</Button></button>
            </div>
        </form>
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









