import {
    batchDeleteActionCreator,
    deleteToDoPointThunk,
    EditToDoPointThunk,
    setEditedElement
} from "../../../redux/toDoReducer";
import {connect} from "react-redux";
import React from "react";
import UnCompleteWork from "./UnCompleteWork";

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
const UnCompleteWorkComponent = connect(mapStateToProps, mapDispatchToProps) (UnCompleteWork);

export default UnCompleteWorkComponent;