import React from 'react';
import ListItem from './ListItem/ListItem';
import './List.css';

const List = ({items, makeImportant, makeDone}) => {
    const tasks = items.map((item => {
        const {id, ...other} = item;
        return(
            <ListItem 
                id = {id}
                {...other}
                makeDone={() => makeDone(id)}
                makeImportant={() => makeImportant(id)}
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