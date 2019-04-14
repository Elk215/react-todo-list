import React, {Component} from 'react';
import './Filter.css';

export default class Filter extends Component {
    render() {
        return (
            <div className="filter">
                <button className="filter__btn filter__btn--active">All</button>
                <button className="filter__btn">Done</button>
                <button className="filter__btn">Left</button>
            </div>
        );
    }
}