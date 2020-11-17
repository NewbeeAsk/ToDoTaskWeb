import React from "react";
import {Field, reduxForm} from "redux-form";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import {requiredRieldValidator, maxLengthValidator} from "../validators/validators";
import s from './todopost.module.css'

const maxLength100 = maxLengthValidator(100);

export const renderTextField = ({
                             label,
                             input,
                             meta: { touched, invalid, error },
                             ...custom
                         }) => (
    <TextField
        label={label}
        placeholder={label}
        error={touched && invalid}
        helperText={touched && error}
        {...input}
        {...custom}
    />
)

const MyWork = (props) => {
    return (
        <div className={s.block}>
            <form onSubmit={props.handleSubmit}>
                <div>
                <Field className={s.field} validate={[requiredRieldValidator, maxLength100]} name={"newPost"} component={renderTextField}></Field>
                </div>
                <button className={s.button}><Button>Add new Work</Button></button>
            </form>
        </div>
    )
}

const MyWorkRedux = reduxForm({form: "post"})(MyWork)

const WorkContainerComponent = (props) => {
    const onSubmit = (values) => {
        props.addPost(props.userId, values.newPost)
    }
    return (
        <MyWorkRedux onSubmit={onSubmit}/>
    )

}

export default WorkContainerComponent;