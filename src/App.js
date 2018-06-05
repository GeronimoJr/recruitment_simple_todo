import React, { Component } from 'react';
import TodoList from './TodoList';
import Buttons from './Buttons';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [{id: 1}]
    }
  }
  addTask = () => {
    const nextNumb = this.state.data.length + 1;
    const task = {id: nextNumb};
    const data = [...this.state.data, task];
    this.setState({
      data: data
    })
  }
  removeTask = () => {
    const taskToRemove = this.state.data.length;
    const data = this.state.data.filter(task => task.id !== taskToRemove);
    this.setState({
      data: data
    })
  }
  clearAllTasks = () => {
    this.setState({
      data: []
    })
  }
  getStripedStyle = (index) => {
    if (index % 2 === 0) {
      return "color";
    }
  }
  render() {
    return (
      <div className="App">
        <Buttons addTask={this.addTask} removeTask={this.removeTask} clearAllTasks={this.clearAllTasks} />
        <TodoList tasks={this.state.data} getStripedStyle={this.getStripedStyle} />
      </div>
    );
  }
}

export default App;
