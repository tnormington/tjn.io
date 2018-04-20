import React from 'react';

import './Container.sass'

export default ({children, className}) => {
    return (
        <div className={`container ${className}`}>
            { children }
        </div>
    )
}