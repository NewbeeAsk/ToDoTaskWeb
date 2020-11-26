import React from "react";
import {reduxForm} from "redux-form";
import {Field} from "redux-form";
import {connect} from "react-redux";
import {setRegistration} from "../../redux/authReducers";
import {renderTextField} from "../ToDoPost/toDoPost";
import Button from "@material-ui/core/Button";
import s from './registration.module.css';
import {requiredRieldValidator} from "../validators/validators";

const RegistrationForm = ({handleSubmit}) => {
    return (
        <form className={s.form} onSubmit={handleSubmit}>
            <div className={s.fields}>
                <Field validate={[requiredRieldValidator]} placeholder={"first_name"} name={"first_name"} component={renderTextField}/>
            </div>
            <div className={s.fields}>
                <Field validate={[requiredRieldValidator]} placeholder={"last_name"} name={"last_name"} component={renderTextField}/>
            </div>
            <div className={s.fields}>
                <Field validate={[requiredRieldValidator]} placeholder={"email"} name={"email"} component={renderTextField}/>
            </div>
            <div className={s.fields}>
                <Field validate={[requiredRieldValidator]} type="password" placeholder={"Password"} name={"password"} component={renderTextField}/>
            </div>
            <div className={s.fields}>
                <Field validate={[requiredRieldValidator]} type="password" placeholder={"Password_confirmation"} name={"password_confirmation"} component={renderTextField}/>
            </div>
            <div className={s.fields}>
                <button><Button placeholder={"registration"}>Registration</Button></button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: "registration"})(RegistrationForm)

const Registration = (props) => {
    const onSubmit = (values) => {
        props.setRegistration(values.email, values.password, values.password_confirmation, values.first_name, values.last_name)
    }
    return <LoginReduxForm onSubmit={onSubmit}/>

}
let mapStateToProps = (state) => ({

});
export const RegistrationContainer = connect(mapStateToProps, {setRegistration})(Registration);









