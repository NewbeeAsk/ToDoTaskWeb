import React from "react";
import {Button} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import {NavLink} from "react-router-dom";
import Checkbox from "@material-ui/core/Checkbox";

let UnCompleteWork = (props) => {
    return <div>
        {
            props.todo.uncomplete.map(el =>
                <div key={el.id}>
                <span>
                    <div>
                        <NavLink to={'/edit'} onClick={() => {
                            props.EditedElement(el)
                        }}>
                            <TextField id="outlined-basic" value={el.title} variant="outlined"/>
                        </NavLink>
                        <div>
                    <Button variant="contained" color="primary" onClick={() => {
                        props.EditToDoPoint(el, el.done = true);
                    }}>complete</Button>
                    <Button variant="contained" color="secondary" onClick={() => {
                        props.deleteToDoPoint(el.id);
                    }}>Delete</Button>
                        <Checkbox
                            checked={el.batchDelete}
                            onChange={() => {
                                props.batchDelete(el.id);
                            }}
                            inputProps={{'aria-label': 'primary checkbox'}}
                        />
                        </div>
                    </div>

                </span>
                </div>
            )
        }
    </div>

}
export default UnCompleteWork;