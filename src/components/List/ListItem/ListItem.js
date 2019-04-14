import React from 'react';
import './ListItem.css';

const ListItem = () => {
    return(
        <li className="listItem">
            <span className="listItem__wrap">
                <label className="listItem__check">
                    <input type="checkbox" />
                    <span></span>
                </label>
                <input type="text" className="listItem__field" value="5" disabled="true" />
            </span>
            <span className="listItem__wrap">
                <button className="listItem__save hidden">Save</button>
                <button className="listItem__cancel hidden">Cancel</button>
                <button className="listItem__important">!</button>
                <button className="listItem__change">Change</button>
            </span>
        </li>
    );
};

export default ListItem;