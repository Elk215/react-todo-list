import React from 'react';
import ListItem from './ListItem/ListItem';
import './List.css';

const List = ({items, makeImportant}) => {
    const tasks = items.map((item => {
        const {id, ...other} = item;
        return(
            <ListItem 
                id = {id}
                {...other}
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