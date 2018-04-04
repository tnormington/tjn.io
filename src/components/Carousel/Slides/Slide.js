import React from 'react';
import './Slide.sass'

import Cta from '../../Cta/Cta'

export default (props) => {
    return (
        <div className="slide__outer"
            style={{
                backgroundImage: `url(${props.bg})`
            }}>
            <div className="slide__inner">
                <h1>{props.title}</h1>
                <p>{props.content}</p>
                { props.to &&
                    <Cta to={props.to} title="Check it out" />
                }
            </div>
        </div>
    )
}