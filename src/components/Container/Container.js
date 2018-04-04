import React from 'react';

import './Container.sass'

export default ({children}) => {
    return (
        <div className="container">
            { children }
        </div>
    )
}