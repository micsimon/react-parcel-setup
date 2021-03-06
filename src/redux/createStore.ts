import {configureStore} from 'deox'
import {combineReducers} from "redux";
import {todosReducer} from "./todos/reducer";

export default () => configureStore({
    reducer: combineReducers({
        todos: todosReducer
    })
});
