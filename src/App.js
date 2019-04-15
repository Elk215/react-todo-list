import React, { Component } from 'react';

import Welcome from './components/Welcome';
import Search from './components/Search';
import Info from './components/Info';
import Filter from './components/Filter';
import List from './components/List';
import CreateItem from './components/CreateItem';

import './App.css';

export default class App extends Component {
  
  id = 0;

  state = {
    tasks: [
      this.createTask('Task1'),
      this.createTask('Task2'),
      this.createTask('Task3')
    ]
  }

  createTask(title) {
    return {
      id: this.id++,
      title,
      done: false,
      important: false,
      change: false
    };
  };

  makeImportant = (id) => {
    const {tasks} = this.state;
    const importantItem = tasks.findIndex((task)=>task.id === id);
    const newProperty = !tasks[importantItem].important;
    const newPropertyArray = {...tasks[importantItem], important: newProperty };
    const newArray = [...tasks.slice(0, importantItem), newPropertyArray, ...tasks.slice(importantItem + 1) ];

    this.setState(() => {
      const newObj = {tasks: newArray};
      const importantItems = newObj.tasks.filter((task)=>task.important === true);
      const notImportantItems = newObj.tasks.filter((task)=>task.important === false);
      return {
        tasks: [...importantItems, ...notImportantItems]
      }
    });
  };

  makeDone = (id) => {
    const {tasks} = this.state;
    const doneItem = tasks.findIndex((task)=>task.id === id);
    const newProperty = !tasks[doneItem].done;
    let newProperty2 = tasks[doneItem].important;
    if(tasks[doneItem].important) {
      newProperty2 = !tasks[doneItem].important;
    }
    const newPropertyArray = {...tasks[doneItem], done: newProperty, important: newProperty2 };
    const newArray = [...tasks.slice(0, doneItem), newPropertyArray, ...tasks.slice(doneItem + 1) ];

    this.setState(() => {
      const newObj = {tasks: newArray};
      const importantItems = newObj.tasks.filter((task)=>task.done === true);
      const notImportantItems = newObj.tasks.filter((task)=>task.done === false);
      return {
        tasks: [...notImportantItems, ...importantItems]
      }
    });
  };

  render() {
    return (
      <div className="app">
        <Welcome />
        <Search />
        <div className="app__justify">
          <Info />
          <Filter />
        </div>
        <List 
          items={this.state.tasks} 
          makeImportant={this.makeImportant}
          makeDone={this.makeDone}
        />
        <CreateItem />
      </div>
    );
  }
}

