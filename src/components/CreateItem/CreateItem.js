import React, {Component} from 'react';
import './CreateItem.css';

export default class CreateItem extends Component {

    state = {
        newElement: ''
    }

    getNewElement = (e) => {
        this.setState({
            newElement: e.target.value 
        });
    }

    createTask = (e) => {
        e.preventDefault();
        const {newElement} = this.state;
        this.setState({
            newElement: ''
        });
        const createTask = this.props.createTask || (() => {});
        createTask(newElement);

    } 

    render() {

        return(
            <form className="createItem" onSubmit={this.createTask}>
                <input type="text" className="createItem__field" value={this.state.newElement} onChange={this.getNewElement} placeholder="What do you need to do?"/>
                <button className="createItem__btn">Create</button>
            </form>
        );
    };
}