import {contactsAPI} from "../API/API";

const SET_CONTACT_DATA = 'SET_CONTACT_DATA';

let initialState = {
    userData: {id:0},
    isAuth: false
};

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_CONTACT_DATA:
            return {...state, userData: action.data, isAuth: true}
        default:
            return state;
    }
}
export const setContactData = (data) => ({type: SET_CONTACT_DATA, data: data});

//криейт сешн, получаем токен
export const setLogIn = (email, password) => (dispatch) => {
    return contactsAPI.setContact(email, password)
        .then(response => {
            if (response.status === 201) {
                let data = response.data
                dispatch(setContactData(data))
            }
        })
}

//регистрация
export const setRegistration = (email, password, password_confirmation, first_name, last_name) => (dispatch) => {
    return contactsAPI.setRegistr(email, password, password_confirmation, first_name, last_name)
        .then(response => {
            if (response.status === 201) {
                           }
        })

}
export default authReducer;