import React from "react";
import {connect} from "react-redux";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";

const ExistElement = (props) => {
    let time
    if(props.editedElement.due_date !== null && props.editedElement.due_date !== undefined){
        time = props.editedElement.due_date.substring(0, 10);
    }else time = "Время не указано"
        return(
            <div>
                <div><Typography variant="subtitle1">Old title: {props.editedElement.title}</Typography></div>
                <div><Typography variant="subtitle1">Old description: {props.editedElement.description}</Typography></div>
                <div><Typography variant="subtitle1">Old priority: {props.editedElement.priority}</Typography></div>
                <div><Typography variant="subtitle1">Complete: {props.editedElement.done}</Typography></div>
                <div><Typography variant="subtitle1">Due_date: {time}</Typography></div>
            </div>
        )
}
let mapStateToProps = (state) => ({
    editedElement: state.toDoPage.editedElement,
});


const ExistElementContainer = connect(mapStateToProps,)(ExistElement);
export default ExistElementContainer;

