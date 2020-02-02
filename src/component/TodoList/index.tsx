import React, {useRef} from 'react';
import TodoListEntry from './TodoListEntry'
import {useDispatch, useSelector} from "react-redux";
import {selectTodos} from "../../redux/todos/selector";
import {TodoEntry} from "../../redux/todos/reducer";
import {addTodo} from "../../redux/todos/action";
import {Key} from 'ts-keycode-enum'

// key -> nutzt React, damit es nur die geänderten TodoListEntry Einträge erkennt ... performance

export default () => {

    const todos: TodoEntry[] = useSelector(selectTodos);

    const dispatch = useDispatch();

    const input = useRef<HTMLInputElement>();

    const submitTodo = () => {
        dispatch(addTodo(input.current.value));
        input.current.value = ''
    };

    const onKeyDown = (e: React.KeyboardEvent) => {
        if (e.keyCode === Key.Enter) {
            submitTodo()
        }
    };

    return (
        <div>
            <ul>
                {todos.map((todo) => <TodoListEntry label={todo.label} checked={todo.checked} key={todo.id}
                                                    id={todo.id}/>)}
                <li><input placeholder="heyyy111" ref={input} onKeyDown={onKeyDown}/></li>
                <button onClick={submitTodo}>click</button>
            </ul>
        </div>
    )
}
