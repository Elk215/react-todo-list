import React from 'react';
import './ListItem.css';

const ListItem = ({id, title, done, important, change, makeDone, makeImportant}) => {

    let listItemClass = 'listItem';
    let listItemImportantClass = 'listItem__important';
    if(important) {
        listItemClass += ' listItem--important';
        listItemImportantClass += ' listItem__important--active';
    }
    
    let listItemAction = 'listItem__action';
    if(done) {
        listItemClass += ' listItem--checked';
        listItemAction += ' hidden';
    }

    return(
        <li key={id} className={listItemClass} checked={done} important={important}>
            <span className="listItem__wrap">
                <span className="listItem__check" onClick={makeDone}>
                    <span></span>
                </span>
                <input type="text" className="listItem__field" value={title} disabled="true" />
            </span>
            <span className={"listItem__wrap" + listItemAction}>
                <button className="listItem__save hidden">Save</button>
                <button className="listItem__cancel hidden">Cancel</button>
                <button className={listItemImportantClass} onClick={makeImportant}>!</button>
                <button className="listItem__change">Change</button>
            </span>
        </li>
    );
};

export default ListItem;