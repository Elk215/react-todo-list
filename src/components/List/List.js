import React from 'react';
import ListItem from './ListItem/ListItem';
import './List.css';

const List = ({items, makeImportant, makeDone, onDelete, changeTask, changeFieldValue, saveChange, cancelChange}) => {

 

    const tasks = items.map((item => {
        const {id, ...other} = item;
        return(
            <ListItem 
                key = {id}
                {...other}
                makeDone={() => makeDone(id)}
                makeImportant={() => makeImportant(id)}
                onDelete={() => onDelete(id)}
                changeTask={() => changeTask(id)}
                changeFieldValue={changeFieldValue}
                saveChange={() => saveChange()}
                cancelChange={() => cancelChange()}
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