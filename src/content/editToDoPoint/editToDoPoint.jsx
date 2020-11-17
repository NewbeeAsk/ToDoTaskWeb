import React from "react";
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {renderTextField} from "../ToDoPost/toDoPost";
import Button from "@material-ui/core/Button";
import {EditToDoPointThunk} from "../../redux/toDoReducer";
import renderDateTimePicker from "./datapicker";
import {maxLengthValidator, minValueValidator, numberValidator, requiredRieldValidator} from "../validators/validators";

const maxLength100 = maxLengthValidator(100);
const minValue = minValueValidator(Date());

const EditToDo = ({handleSubmit}, props) => {

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field  validate={[requiredRieldValidator, maxLength100]} name={"newPost"} placeholder={"title"} name={"title"} component={renderTextField}/>
            </div>
            <div>
                <Field placeholder={"description"} name={"description"} component={renderTextField}/>
            </div>
            <div>
                <Field component={"input"} name={"done"} type={"checkbox"}/> Done?
            </div>
            <div>
                <Field validate={[numberValidator]} placeholder={"Priority(nember)"} name={"priority"} component={renderTextField}/>
            </div>
            <div>
                <label>Due date</label>
                <Field
                    validate={[minValue]}
                    name="due_date"
                    showTime={false}
                    component={renderDateTimePicker}
                />
            </div>
            <div>
                <button><Button placeholder={"save"}>Save</Button></button>

            </div>
        </form>
    )
}

const EditToDoForm = reduxForm({form: "edit"})(EditToDo)

const EditToDoReduxForm = (props) => {
    const onSubmit = (values) => {
        debugger
        props.EditToDoPointThunk(values, values.contact_id=props.contact_id, values.id=props.editElement.id);
    }
    return <EditToDoForm onSubmit={onSubmit}/>
}

const mapStateToProps = (state) => {
    return {
        editElement: state.toDoPage.editedElement,
        contact_id: state.auth.userData.id,
    }
}
const EditToDoReduxFormContainer = connect(mapStateToProps, {EditToDoPointThunk})(EditToDoReduxForm);
export default EditToDoReduxFormContainer;