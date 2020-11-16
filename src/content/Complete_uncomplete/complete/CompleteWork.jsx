import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import {NavLink} from "react-router-dom";
import Checkbox from "@material-ui/core/Checkbox";

let CompleteWork = (props) => {
    return <div>
        {
            props.todo.complete.map(el =>
                    <div key={el.id}>
                <span>
                    <div onClick={()=>{props.EditedElement(el)}}>
                    <NavLink to={'/edit'}>
                        <TextField id="outlined-basic" value={el.title} variant="outlined"/>
                    </NavLink>
                        </div>
                        <Button variant="contained" color="secondary" onClick={() => {
                            props.EditToDoPoint(el, el.done = false);
                        }}>Uncomplete</Button>
                    <Button variant="contained" color="secondary" onClick={() => {
                        props.deleteToDoPoint(el.id);
                    }}>Delete</Button>
                     <Checkbox
                         checked={el.batchDelete}
                         onChange={() => {props.batchDelete(el.id);}}
                         inputProps={{ 'aria-label': 'primary checkbox' }}
                     />
                </span>
                    </div>
            )
        }
    </div>
}
export default CompleteWork;