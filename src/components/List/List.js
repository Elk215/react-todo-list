import React from 'react';
import ListItem from './ListItem/ListItem';
import './List.css';

const List = ({items, makeImportant, makeDone, onDelete}) => {
    const tasks = items.map((item => {
        const {id, ...other} = item;
        return(
            <ListItem 
                id = {id}
                {...other}
                makeDone={() => makeDone(id)}
                makeImportant={() => makeImportant(id)}
                onDelete={() => onDelete(id)}
            />
        );
    }));

    return(
        <ul className="list">
            {tasks}
        </ul>
    );
};

export default List;