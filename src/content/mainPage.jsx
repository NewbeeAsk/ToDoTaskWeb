import React from 'react';
import MyPostsContainer from "./ToDoPost/toDoPostContainer";
import CompleteWorkComponent from "./Complete_uncomplete/complete/CompleteWorkContainer";
import UnCompleteWorkComponent from "./Complete_uncomplete/uncomplete/UnCompleteWorkContainer";
import s from './mainpage.module.css'
import {connect} from "react-redux";
import {getToDoListThunk} from "../redux/toDoReducer";
import BatchDeleteComponent from "./Complete_uncomplete/batchDelete";

class ToDo extends React.Component {
    componentDidMount() {
        if(this.props.userId !== 0){
            this.props.getToDoListThunk(this.props.userId)
        }

    }
    render() {
        return (
            <div className={s.contentWrapper}>
                <div className={s.input}><MyPostsContainer/></div>
                <div className={s.batchDelete}><BatchDeleteComponent/></div>
                <div className={s.complete}><CompleteWorkComponent/></div>
                <div className={s.uncomplete}><UnCompleteWorkComponent/></div>
            </div>
        );
    }
}
let mapStateToProps = (state) => ({
    userId: state.auth.userData.id,
});


export const ToDoContainer = connect(mapStateToProps, {getToDoListThunk}) (ToDo);
