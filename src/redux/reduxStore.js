import {applyMiddleware, combineReducers, createStore} from "redux";
import toDoReducer from "./toDoReducer";
import thunkMiddleware from "redux-thunk";
import {reducer as formReducer} from "redux-form";
import authReducer from "./authReducers";

let reducers = combineReducers({
    toDoPage: toDoReducer,
    form: formReducer,
    auth: authReducer,
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store;
export default store;