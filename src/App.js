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
    ],
    searchValue: ''
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

  searchTask = (searchValue) => {
    this.setState({searchValue});
  }

  searchItems(items, searchValue) {
    if (searchValue.length === 0) {
      return items;
    }

    return items.filter((item) => {
      return item.title.toLowerCase().indexOf(searchValue.toLowerCase()) > -1;
    });
  }

  onDelete = (id) => {
    const {tasks} = this.state;
    const deleteItem = tasks.findIndex((task)=>task.id === id);
    const newArray = [...tasks.slice(0,deleteItem), ...tasks.slice(deleteItem + 1)];
    console.log(newArray);
    this.setState(() => {
      const topPart = newArray.filter((item) => item.important);
      const middlePart = newArray.filter((item) => item.done === false && item.important ===false);
      const bottomPart = newArray.filter((item) => item.done);
      return {
        tasks: [...topPart, ...middlePart, ...bottomPart]
      }
    });

  };

  onTaskAdded = (title) => {
    const {tasks} = this.state;
    const topPart = tasks.filter((task)=>task.done === false);
    const bottomPart = tasks.filter((task)=>task.done === true);
    this.setState((state) => {
      const task = this.createTask(title);
      return { tasks: [...topPart, task, ...bottomPart] };
    })
  };

  
 

  render() {
    const {tasks, searchValue} = this.state;
    const doneElements = tasks.filter((task) => task.done).length;
    const leftElements = tasks.length - doneElements;
    const searchResult = this.searchItems(tasks, searchValue);
    return (
      <div className="app">
        <Welcome />
        <Search onSearchChange={this.searchTask} />
        <div className="app__justify">
          <Info leftElements={leftElements} doneElements={doneElements} />
          <Filter />
        </div>
        <List 
          items={searchResult} 
          makeImportant={this.makeImportant}
          makeDone={this.makeDone}
          onDelete={this.onDelete}
        />
        <CreateItem createTask={this.onTaskAdded}/>
      </div>
    );
  }
}

