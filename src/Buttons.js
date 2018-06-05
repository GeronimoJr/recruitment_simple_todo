import React, { Component } from 'react';
import './Buttons.css';

const Buttons = ({ addTask, removeTask, clearAllTasks }) => (
    <div className="Buttons">
        <button onClick={addTask}>Add</button>
        <button onClick={removeTask}>Remove</button>
        <button onClick={clearAllTasks}>Clear</button>
    </div>
);

export default Buttons;