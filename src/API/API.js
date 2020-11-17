import * as axios from "axios";

const instanse = axios.create({
        baseURL: "https://to-do-task-server.herokuapp.com/",
    }
)

export const contactsAPI = {
    setContact(email, password) {
        return instanse.post(`sessions`, {email: email, password: password})
            .then(response => response);
    },
    setRegistr(email, password, password_confirmation, first_name, last_name) {
        return instanse.post(`registrations`, {email: email, password: password, password_confirmation: password_confirmation,
            first_name: first_name, last_name: last_name})
            .then(response => response);
    },
    getToDoList(contact_id) {
        return instanse.get(`todo/${contact_id}`)
            .then(response => response);
    },
    editToDoList(id, contact_id, title, description, priority, done, due_date) {
        return instanse.patch(`todo/${id}`, {contact_id: contact_id, title: title, description: description, priority: priority, done: done, due_date: due_date})
            .then(response => response);
    },
    setToDoListPoint(contact_id, title) {
        return instanse.post(`todo`, {contact_id: contact_id, title: title})
            .then(response => response);
    },
    deleteToDoListPoint(id) {
        return instanse.delete(`todo/${id}`)
            .then(response => response);
    },
}