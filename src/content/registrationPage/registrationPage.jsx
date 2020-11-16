import React from "react";
import {reduxForm} from "redux-form";
import {Field} from "redux-form";
import {connect} from "react-redux";
import {setRegistration} from "../../redux/authReducers";
import {renderTextField} from "../ToDoPost/toDoPost";
import Button from "@material-ui/core/Button";

const RegistrationForm = ({handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field placeholder={"email"} name={"email"} component={renderTextField}/>
            </div>
            <div>
                <Field placeholder={"Password"} name={"password"} component={renderTextField}/>
            </div>
            <div>
                <Field placeholder={"Password_confirmation"} name={"password_confirmation"} component={renderTextField}/>
            </div>
            <div>
                <button><Button placeholder={"registration"}>Registration</Button></button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: "registration"})(RegistrationForm)

const Registration = (props) => {
    const onSubmit = (values) => {
        props.setRegistration(values.email, values.password, values.password_confirmation)
    }
    return <LoginReduxForm onSubmit={onSubmit}/>

}
let mapStateToProps = (state) => ({

});
export const RegistrationContainer = connect(mapStateToProps, {setRegistration})(Registration);









