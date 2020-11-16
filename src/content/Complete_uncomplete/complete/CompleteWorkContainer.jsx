import CompleteWork from "./CompleteWork";
import {connect} from "react-redux";
import {
    batchDeleteActionCreator,
    deleteToDoPointThunk,
    EditToDoPointThunk,
    setEditedElement
} from "../../../redux/toDoReducer";
import React from "react";

const mapStateToProps = (state) => {
    return {
        todo: state.toDoPage,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        EditToDoPoint: (el) => {
            dispatch(EditToDoPointThunk(el));
        },
        EditedElement: (element) => {
            dispatch(setEditedElement(element));
        },
        deleteToDoPoint: (id) => {
            dispatch(deleteToDoPointThunk(id));
        },
        batchDelete: (id) => {
            dispatch(batchDeleteActionCreator(id));
        }
    }
}
const CompleteWorkComponent = connect(mapStateToProps, mapDispatchToProps) (CompleteWork);

export default CompleteWorkComponent;