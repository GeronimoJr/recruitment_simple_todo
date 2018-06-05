import React, { Component } from 'react';
import './TodoList.css';

const TodoList = ({ tasks, getStripedStyle }) => (
    <div className="TodoList">
        <ul>
            {tasks.map(task => <li className={getStripedStyle(task.id)} key={task.id}>Task number {task.id}</li>)}
        </ul>
    </div>
);

export default TodoList;