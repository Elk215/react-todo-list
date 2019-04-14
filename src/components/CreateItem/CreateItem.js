import React, {Component} from 'react';
import './CreateItem.css';

export default class CreateItem extends Component {
    render() {
        return(
            <form className="createItem">
                <input type="text" className="createItem__field" placeholder="What do you need to do?"/>
                <button className="createItem__btn">Create</button>
            </form>
        );
    };
}