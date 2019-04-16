import React from 'react';
import './Info.css';

const Info = ({doneElements, leftElements}) => {
    return(
        <p className="info">Done
            <span className="info__done">{doneElements}</span>left
            <span className="info__left">{leftElements}</span>

        </p>
    );
};

export default Info;