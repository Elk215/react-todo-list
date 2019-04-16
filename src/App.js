import React, { Component } from 'react';

import Welcome from './components/Welcome';
import Search from './components/Search';
import Info from './components/Info';
import Filter from './components/Filter';
import List from './components/List';
import CreateItem from './components/CreateItem';

import './App.css';

export default class App extends Component {
  
  id = 1;

  state = {
    tasks: [
      this.createTask('Task1'),
      this.createTask('Task2'),
      this.createTask('Task3')
    ],
    searchValue: '',
    filterBase: 'all',
    changeFieldValue: '',
    changeFieldOldValue: '',
    changeFieldId: ''
  }

  createTask(title) {
    return {
      id: this.id++,
      title,
      done: false,
      important: false,
      change: false,
      disable: false
    };
  };

  makeImportant = (id) => {
    const {tasks} = this.state;
    const importantItem = tasks.findIndex((task)=>task.id === id);
    const newProperty = !tasks[importantItem].important;
    const newPropertyArray = {...tasks[importantItem], important: newProperty };
    const newArray = [...tasks.slice(0, importantItem), newPropertyArray, ...tasks.slice(importantItem + 1) ];
    const importantItems = newArray.filter((task)=>task.important === true);
    const notImportantItems = newArray.filter((task)=>task.important === false);
    this.setState(() => {
      const newTasks = [...importantItems, ...notImportantItems];
      return {
        tasks: newTasks
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
      const importantItems = newArray.filter((task)=>task.done === true);
      const notImportantItems = newArray.filter((task)=>task.done === false);
      const newTasks = [...notImportantItems, ...importantItems];
      return {
        tasks: newTasks
      }
    });
  };

  searchTask = (searchValue) => {
    this.setState({searchValue});
  }

  doFilterTasks = (filterBase) => {
    this.setState({filterBase});
  }

  onDelete = (id) => {
    const {tasks} = this.state;
    const deleteItem = tasks.findIndex((task)=>task.id === id);
    const newArray = [...tasks.slice(0,deleteItem), ...tasks.slice(deleteItem + 1)];
    this.setState(() => {
      const topPart = newArray.filter((item) => item.important);
      const middlePart = newArray.filter((item) => item.done === false && item.important ===false);
      const bottomPart = newArray.filter((item) => item.done);
      const newTasks = [...topPart, ...middlePart, ...bottomPart];
      return {
        tasks: newTasks
      }
    });

  };

  onTaskAdded = (title) => {
    const {tasks} = this.state;
    const topPart = tasks.filter((task)=>task.done === false);
    const bottomPart = tasks.filter((task)=>task.done === true);
    this.setState((state) => {
      const task = this.createTask(title);
      const newArray = [...topPart, task, ...bottomPart];
      return {
         tasks: newArray
      };
    })
  };

  filterItems(items, filterBase) {
    if (filterBase === 'all') {
      return items;
    } else if (filterBase === 'left') {
      return items.filter((item) => (!item.done));
    } else if (filterBase === 'done') {
      return items.filter((item) => item.done);
    }
  }

  searchItems(items, searchValue) {
    if (searchValue.length === 0) {
      return items;
    }

    return items.filter((item) => {
      return item.title.toLowerCase().indexOf(searchValue.toLowerCase()) > -1;
    });
  }

  changeTask  = (id) => {
    const {tasks} = this.state;
    const index = tasks.findIndex((task)=>task.id === id);
    const task = tasks[index];
    const value = task.id;
    const newLeftArray = {...tasks.slice(0,index).map((task)=>task.disable = true)};
    const newRightArray = {...tasks.slice(index + 1).map((task)=>task.disable = true)};
    
    const newElement = {...task, change: true }; 
    const newTasks = [...tasks.slice(0,index), newElement, ...tasks.slice(index + 1)];
    const oldValue = task.title;
    this.setState(() => {
      return {
        tasks: newTasks,
        changeFieldId: value,
        changeFieldOldValue: oldValue,
        changeFieldValue: oldValue
      }
    });

  };

  changeFieldValue = (e) => {
    const {tasks, changeFieldId} = this.state;
    const index = tasks.findIndex((task)=>task.id === changeFieldId);
    const task = tasks[index];
    const newElement = {...task, title: e.target.value };
    const newTasks = [...tasks.slice(0,index), newElement, ...tasks.slice(index + 1)];
    const newValue = e.target.value;
    this.setState(() => {
      return {
        tasks: newTasks,
        changeFieldValue: newValue
      }
    });
  }

  saveChange = () => {
    const {tasks, changeFieldId,  changeFieldValue, changeFieldOldValue} = this.state;
    const index = tasks.findIndex((task)=>task.id === changeFieldId);
    const task = tasks[index];
    let newValue = '';
    if(changeFieldValue === changeFieldOldValue) {
      newValue = changeFieldOldValue;
    } else if(changeFieldValue === ''){
      newValue = 'Empty';
    } else {
      newValue = changeFieldValue;
    }
    const newElement = {...task, title: newValue, change: false };
    const newLeftArray = {...tasks.slice(0,index).map((task)=>task.disable = false)};
    const newRightArray = {...tasks.slice(index + 1).map((task)=>task.disable = false)};
    const newTasks = [...tasks.slice(0,index), newElement, ...tasks.slice(index + 1)];
    this.setState(() => {
      return {
        tasks: newTasks
      }
    });
  }

  cancelChange = () => {
    const {tasks, changeFieldId, changeFieldOldValue} = this.state;
    const index = tasks.findIndex((task)=>task.id === changeFieldId);
    const task = tasks[index];
    
    const newElement = {...task, title: changeFieldOldValue, change: false };
    const newLeftArray = {...tasks.slice(0,index).map((task)=>task.disable = false)};
    const newRightArray = {...tasks.slice(index + 1).map((task)=>task.disable = false)};
    const newTasks = [...tasks.slice(0,index), newElement, ...tasks.slice(index + 1)];
    this.setState(() => {
      return {
        tasks: newTasks
      }
    });
  }

 
  render() {
    const {tasks, searchValue, filterBase} = this.state;
    const doneElements = tasks.filter((task) => task.done).length;
    const leftElements = tasks.length - doneElements;
    const visibleResult = this.searchItems(this.filterItems(tasks, filterBase), searchValue);
    return (
      <div className="app">
        <Welcome />
        <Search onSearchChange={this.searchTask} />
        <div className="app__justify">
          <Info leftElements={leftElements} doneElements={doneElements} />
          <Filter 
            filterBase={filterBase}
            doFilterTasks={this.doFilterTasks}
           />
        </div>
        <List 
          items={visibleResult} 
          makeImportant={this.makeImportant}
          makeDone={this.makeDone}
          onDelete={this.onDelete}
          changeTask={this.changeTask}
          changeFieldValue={this.changeFieldValue}
          cancelChange={this.cancelChange}
          saveChange={this.saveChange}
        />
        <CreateItem createTask={this.onTaskAdded}/>
      </div>
    );
  }
}

