import React from 'react';
import './Welcome.css';

const Welcome = () => {
    return (
        <div className="welcome">
            <h4 className="welcome__title">Hello</h4>
            <p className="welcome__info">It's my todo-list app</p>
            <p className="welcome__info">You can take this code on <a href="https://github.com/Elk215/react-todo-list">my github repository</a></p>
        </div>
    );
};

export default Welcome;