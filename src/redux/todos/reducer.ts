import {createReducer} from "deox";
import {addTodo, removeTodo, setTodoChecked} from "./action";

export interface TodoEntry {
    label: string,
    checked: boolean;
    id: number
}

const initialState = {
    list: [] as TodoEntry[],
    nextId: 1
};

export type TodoState = typeof initialState;

export const todosReducer = createReducer(initialState, (handleAction) => [
    handleAction(addTodo, (state, action) => ({
        ...state,
        list: [...state.list, {id: state.nextId, label: action.payload.label, checked: false}],
        nextId: state.nextId + 1
    })),
    handleAction(setTodoChecked, (state, action) => ({
        ...state,
        list: state.list.map((entry) => {
            if (entry.id === action.payload.id) {
                return {
                    ...entry,
                    checked: action.payload.checked,
                };
            }
            return entry;
        }),
        nextId: state.nextId
    })),
    handleAction(removeTodo, (state, action) => ({
        ...state,
        list: state.list.filter((entry) => entry.id !== action.payload.id)
    }))
]);
