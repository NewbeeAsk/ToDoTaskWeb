import './App.css';
import HeaderContainer from "./Header/headerContainer";
import {LoginContainer} from "./content/Login/login";
import Route from "react-router-dom/es/Route";
import {BrowserRouter} from "react-router-dom";
import React from "react";
import {RegistrationContainer} from "./content/registrationPage/registrationPage";
import {ToDoContainer} from "./content/mainPage";
import EditToDoPointComponent from "./content/editToDoPoint/editToDoPointComponent";

function App(props) {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <HeaderContainer className="header"/>
                <div className="app-wrapper-content">
                    <Route path='/profile' render={() => <ToDoContainer/>}/>
                    <Route path='/login' render={() => <LoginContainer/>}/>
                    <Route path='/registrate' render={() => <RegistrationContainer/>}/>
                    <Route path='/edit' render={() => <EditToDoPointComponent/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
