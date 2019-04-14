import React, { Component } from 'react';

import Welcome from './components/Welcome';
import Search from './components/Search';
import Info from './components/Info';
import Filter from './components/Filter';
import List from './components/List';
import CreateItem from './components/CreateItem';

import './App.css';

export default class App extends Component {
  
  state = {
    tasks: [
      {
        id: 1,
        title: 'Task1',
        done: false,
        important: false,
        disabled: true
      }
    ]
  }

  render() {
    return (
      <div className="app">
        <Welcome />
        <Search />
        <div className="app__justify">
          <Info />
          <Filter />
        </div>
        <List />
        <CreateItem />
      </div>
    );
  }
}

