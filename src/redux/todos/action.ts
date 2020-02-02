import {createAction} from "deox";

const ADD_TODO = 'TODO/ADD_TODO';
const SET_TODO_CHECKED = 'TODO/SET_TODO_CHECKED';
const REMOVE_TODO = 'TODO/REMOVE_TODO';

export const addTodo = createAction(ADD_TODO, (resolve) => (label: string) => resolve({label}));
export const setTodoChecked = createAction(SET_TODO_CHECKED, (resolve) => (id: number, checked: boolean) => resolve({
    id,
    checked
}));
export const removeTodo = createAction(REMOVE_TODO, (resolve => (id: number) => resolve({id})));
