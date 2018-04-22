import React from 'react'

import './ActiveIndicator.sass'

export default (props) => {
    const {
        width,
        height,
        x,
    } = props.activePos;

    return (
        <div 
            style={{
                width: width + 'px',
                height: height + 'px',
                left: x + 'px',
            }}
            className="active-indicator" />
    )
}