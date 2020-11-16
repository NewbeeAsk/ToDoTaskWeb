import {contactsAPI} from "../API/API";

const ADD_WORK = 'ADD_WORK';
const SET_TODO_EDIT_POINT = 'SET_TODO_EDIT_POINT';
const SET_TODOLIST = 'SET_TODOLIST';
const SET_EDIT_ELEMENT = 'SET_EDIT_ELEMENT';
const DELETE_EDIT_ELEMENT = 'DELETE_EDIT_ELEMENT';
const CHANGE_BATCH_DELETE = 'CHANGE_BATCH_DELETE';
const CHANGE_BATCH_DELETE_ALL = 'CHANGE_BATCH_DELETE_ALL';
const SORT_ALL = 'SORT_ALL';

let initialState = {
    changeBatchDeleteAll: false,
    editedElement: {id: 0},
    newWork: "",
    uncomplete: [],
    complete: []
};

const toDoReducer = (state = initialState, action) => {
    let stateCopy = {
        ...state,
        uncomplete: [...state.uncomplete],
        complete: [...state.complete],
    };
    switch (action.type) {
        case SORT_ALL:
            stateCopy.complete.sort((a,b) => (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0));
            stateCopy.uncomplete.sort((a,b) => (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0));
            return stateCopy;
        case CHANGE_BATCH_DELETE_ALL:
            stateCopy.changeBatchDeleteAll = !stateCopy.changeBatchDeleteAll;
            stateCopy.complete.map(el => {el.batchDelete = stateCopy.changeBatchDeleteAll; return el} )
            stateCopy.uncomplete.map(el => {el.batchDelete = stateCopy.changeBatchDeleteAll; return el} )
            return stateCopy;
        case CHANGE_BATCH_DELETE:
            stateCopy.complete.map(el => {if (el.id === action.id){el.batchDelete = !el.batchDelete} return el} )
            stateCopy.uncomplete.map(el => {if (el.id === action.id){el.batchDelete = !el.batchDelete} return el} )
            return stateCopy;
        case ADD_WORK:
            action.newToDoPoint.batchDelete = false;
            stateCopy.uncomplete.push(action.newToDoPoint);
            return stateCopy;
        case SET_EDIT_ELEMENT:
            stateCopy.editedElement = action.element;
            return stateCopy;
        case DELETE_EDIT_ELEMENT:
            stateCopy.complete = state.complete.filter(el => el.id !== action.id)
            stateCopy.uncomplete = state.uncomplete.filter(el => el.id !== action.id)
            return stateCopy;
        case SET_TODO_EDIT_POINT:
            debugger
            stateCopy.complete = state.complete.filter(el => el.id !== action.data.id)
            stateCopy.uncomplete = state.uncomplete.filter(el => el.id !== action.data.id)
            if (action.data.done)
            {stateCopy.complete.push(action.data)}
            else
            {stateCopy.uncomplete.push(action.data)}
            return stateCopy;
        case SET_TODOLIST:
            action.data.map(el => el.batchDelete = false)
            stateCopy.complete = action.data.filter(el => el.done === true)
            stateCopy.uncomplete = action.data.filter(el => el.done !== true)
            return stateCopy;
        default:
            return state;
    }
}

export const addWorkActionCreator = (newToDoPoint) => ({type: 'ADD_WORK', newToDoPoint})
export const setToDoData = (data) => ({type: SET_TODOLIST, data});
export const setToDoEditPoint = (data) => ({type: SET_TODO_EDIT_POINT, data});
export const setEditedElement = (element) => ({type: SET_EDIT_ELEMENT, element});
export const deleteWorkActionCreator = (id) => ({type: DELETE_EDIT_ELEMENT, id});
export const batchDeleteActionCreator = (id) => ({type: CHANGE_BATCH_DELETE, id});
export const batchDeleteAllActionCreator = () => ({type: CHANGE_BATCH_DELETE_ALL,});
export const sortAC = () => ({type: SORT_ALL,});

//добавляем новый воркпоинт
export const createToDoPointThunk = (userId, title) => (dispatch) => {
    return contactsAPI.setToDoListPoint(userId, title)
        .then(response => {
            if (response.status === 201) {
                let data = response.data
                dispatch(addWorkActionCreator(data))
            }
        })
}
//сетаем всё туду контакта
export const getToDoListThunk = (userId) => (dispatch) => {
    return contactsAPI.getToDoList(userId)
        .then(response => {
            if (response.status === 201) {
                let data = response.data
                dispatch(setToDoData(data))
            }
        })
    }
//санка для всех изсенений на беке
export const EditToDoPointThunk = (el) => (dispatch) => {
    debugger
    return contactsAPI.editToDoList(el.id, el.contact_id, el.title, el.description, el.priority, el.done, el.due_date)
        .then(response => {
            debugger
            if (response.status === 201) {
                let data = response.data
                dispatch(setToDoEditPoint(data))
            }
        })
}
//видаляем воркпоинт
export const deleteToDoPointThunk = (id) => (dispatch) => {
    return contactsAPI.deleteToDoListPoint(id)
        .then(response => {
            if (response.status === 200) {
                dispatch(deleteWorkActionCreator(id))
            }
        })
}
export const batchDeleteThunk = (ids) => (dispatch) => {
    debugger
    return ids.forEach(el => {
        contactsAPI.deleteToDoListPoint(el)
            .then(response => {
                if (response.status === 200) {
                    dispatch(deleteWorkActionCreator(el))
                }
            })
        }
    )
}
export default toDoReducer;


