import React from 'react';
import ExistElementContainer from "./existDataOfEditPoint";
import EditToDoReduxFormContainer from "./editToDoPoint";
import s from './editToDoPoint.module.css'

const EditToDoPointComponent = (props) => {

    return (
        <div className={s.contentWrapper}>
            <EditToDoReduxFormContainer className={s.EditToDoReduxFormContainer}/>
            <ExistElementContainer className={s.ExistElementContainer}/>
        </div>
    );
}

export default EditToDoPointComponent;