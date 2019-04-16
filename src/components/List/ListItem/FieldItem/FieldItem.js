import React, {Component} from 'react';
import './FieldItem.css';

export default class FieldItem extends Component {

    state = {
        fieldValue: this.props.value
    }

    onFieldChange = (e) => {
        this.setState({
            fieldValue: e.target.value
        });
        console.log(e.target.value);
    }

    

    render() {
        let propDisabled = !this.props.change ? {'disabled' : 'disabled'} : {};
        
        return (
            <input type="text" className={this.props.className} onChange={this.onFieldChange} value={this.state.fieldValue} {...propDisabled} />
        );
    };
}
