import React, {Component} from 'react';
import './Search.css';

export default class Search extends Component  {
    render() {
        return (
            <form className="search">
                <input type="text" className="search__inp" placeholder="What you search?"/>
            </form>
        );
    };
}