import React, {Component} from 'react';
import './Search.css';

export default class Search extends Component  {

    state = {
        searchValue: ''
    }

    searchTask = (e) => {
        const {onSearchChange = () => {}} = this.props;
        this.setState({
            searchValue: e.target.value
        });
        onSearchChange(e.target.value);
    }

    render() {
        return (
            <input type="text" className="search" onChange={this.searchTask} value={this.state.searchValue} placeholder="What you search?"/>
        );
    };
}