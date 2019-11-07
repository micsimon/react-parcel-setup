import React from 'react';
import ReactDOM from 'react-dom'
import './index.css'
import ToDoList from './component/todo-list';

function App() {
    return (
        <div>
            <div className="header">Hello World1</div>
            <ToDoList/>
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById('app'));


