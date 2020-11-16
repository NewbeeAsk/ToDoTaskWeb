import {contactsAPI} from "../API/API";

const SET_CONTACT_DATA = 'SET_CONTACT_DATA';

let initialState = {
    userId: 1,
    isAuth: false,
    authentication_token: null,
};

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_CONTACT_DATA:
            return {...state, userId: action.userId, isAuth: true}
        default:
            return state;
    }
}
export const setContactData = (id) => ({type: SET_CONTACT_DATA, userId: id});

//криейт сешн, получаем токен
export const setLogIn = (email, password) => (dispatch) => {
    return contactsAPI.setContact(email, password)
        .then(response => {
            if (response.status === 201) {
                let id = response.data.id
                dispatch(setContactData(id))
            }
        })
}

//регистрация
export const setRegistration = (email, password, password_confirmation) => (dispatch) => {
    return contactsAPI.setRegistr(email, password, password_confirmation)
        .then(response => {
            if (response.status === 201) {
                           }
        })

}
export default authReducer;