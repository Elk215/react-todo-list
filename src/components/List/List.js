import React from 'react';
import ListItem from './ListItem/ListItem';
import './List.css';

const List = () => {
    return(
        <ul className="list">
            <ListItem />
            <ListItem />
        </ul>
    );
};

export default List;