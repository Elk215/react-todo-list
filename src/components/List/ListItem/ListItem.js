import React from 'react';
import './ListItem.css';

const ListItem = ({id, title, done, important, change, makeImportant}) => {

    let listItemClass = 'listItem';
    let listItemImportantClass = 'listItem__important';
    if(important) {
        listItemClass += ' listItem--important';
        listItemImportantClass += ' listItem__important--active';
    }

    return(
        <li key={id} className={listItemClass}  important={important}>
            <span className="listItem__wrap">
                <label className="listItem__check">
                    <input type="checkbox" checked={done} />
                    <span></span>
                </label>
                <input type="text" className="listItem__field" value={title} disabled="true" />
            </span>
            <span className="listItem__wrap">
                <button className="listItem__save hidden">Save</button>
                <button className="listItem__cancel hidden">Cancel</button>
                <button className={listItemImportantClass} onClick={makeImportant}>!</button>
                <button className="listItem__change">Change</button>
            </span>
        </li>
    );
};

export default ListItem;