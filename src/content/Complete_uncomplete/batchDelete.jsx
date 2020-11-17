import React from "react";
import Button from "@material-ui/core/Button";
import {batchDeleteAllActionCreator, batchDeleteThunk, sortAC} from "../../redux/toDoReducer";
import {connect} from "react-redux";


let BatchDelete = (props) => {
    let deleteList = props.toDoPoints.complete.filter(el => el.batchDelete == true)
        .concat(props.toDoPoints.uncomplete.filter(el => el.batchDelete == true)).map(el => el.id);
    return <div>
        <Button variant="contained" color="secondary" onClick={() => {
            props.batchDeleteAll();
        }}>Select All</Button>
        <Button variant="contained" color="secondary" onClick={() => {
            props.batchDelete(deleteList);
        }}>Delete multiple</Button>
        <Button variant="contained" color="primary" onClick={() => {
            props.sort();
        }}>Sort</Button>
        </div>
}

const mapStateToProps = (state) => {
    return {
        toDoPoints: state.toDoPage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        batchDeleteAll: () => {
            dispatch(batchDeleteAllActionCreator());
        },
        batchDelete: (ids) => {
            dispatch(batchDeleteThunk(ids));
        },
        sort: () => {
            dispatch(sortAC());
        },
    }
}
const BatchDeleteComponent = connect(mapStateToProps, mapDispatchToProps) (BatchDelete);

export default BatchDeleteComponent;