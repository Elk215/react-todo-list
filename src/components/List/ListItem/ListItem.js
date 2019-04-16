import React, {Component} from 'react';
import './ListItem.css';

export default class ListItem extends Component{ 
    

    render() {
        const { title, done, disable,important, change, makeDone, makeImportant, onDelete, changeTask, changeFieldValue, saveChange, cancelChange} = this.props;
        let listItemClass = 'listItem';
        let listItemImportantClass = 'listItem__important';
        if(important) {
            listItemClass += ' listItem--important';
            listItemImportantClass += ' listItem__important--active';
        }

        let listItemAction = ' listItem__action';
        if(done) {
            listItemClass += ' listItem--checked';
            listItemAction += ' hidden';
        }

        let propDisabled = !change ? {'disabled' : 'disabled'} : {};
        let itemDisabled = disable ? ' disabled' : '';
        let propChange = change ? ' hidden' : '';
        let changeField = change ? 'listItem__field active' : 'listItem__field';
        let propChange2 = !change ? ' hidden' : '';

        return(
            <li className={listItemClass + itemDisabled} checked={done}>
                <span className="listItem__wrap">
                    <span className={"listItem__check" + propChange} onClick={makeDone}>
                        <span></span>
                    </span>
                    <input type="text" className={changeField} onChange={changeFieldValue} value={title}  {...propDisabled} />
                </span>
                <span className="listItem__wrap">
                    <span className={"listItem__wrap" + listItemAction}>
                        <button className={"listItem__save" + propChange2} onClick={saveChange}>Save</button>
                        <button className={"listItem__cancel" + propChange2} onClick={cancelChange}>Cancel</button>
                        <button className={listItemImportantClass + propChange} onClick={makeImportant}>&uarr;</button>
                        <button className={"listItem__change" + propChange} onClick={changeTask}>Change</button>
                    </span>
                    <button className={"listItem__delete" + propChange} onClick={onDelete}>Delete</button>
                </span>
            </li>
        );
    };
};