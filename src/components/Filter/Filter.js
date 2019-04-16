import React from 'react';
import './Filter.css';


const buttons = [
    { name: 'All', key: 'all'},
    { name: 'Done', key: 'done'},
    { name: 'Left', key: 'left'}
];

const Filter = ({filterBase,doFilterTasks}) => {
    
    const result = buttons.map(({name, key}) => {
        const isActive = key === filterBase;
        const classNames = 'filter__btn ' + (isActive ? 'filter__btn--active' : '');
        return (
            <button key={key} className={classNames} onClick={() => doFilterTasks(key)}>{name}</button>
        );
    });

    return (
        <div className="filter">
            {result}
        </div>
    );
};

export default Filter;