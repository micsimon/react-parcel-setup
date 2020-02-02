import React from 'react'
import {useDispatch} from "react-redux";
import {removeTodo, setTodoChecked} from "../../../redux/todos/action";

interface TodoListEntryProperties {
    id: number,
    label: string,
    checked: boolean;
}

export default ({id, label, checked}: TodoListEntryProperties) => {

    const dispatch = useDispatch();

    const onClick = () => dispatch(setTodoChecked(id, !checked));

    const removeEntry = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        dispatch(removeTodo(id));
    };

    return (
        <li onClick={onClick}>
            <span>{checked ? '☑' : '☐'}</span> <span className="label">{label}</span>
            <button onClick={removeEntry}>x</button>
        </li>
    )
}
