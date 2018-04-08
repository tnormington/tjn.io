import React from 'react'
import Link from 'gatsby-link'

import './Cta.sass'

export default (props) => {
    const classes = ['cta'];

    if(props.color) classes.push(props.color)

    return (
        <Link
            className={classes.join(' ')}
            to={props.to}>
            {props.title}
        </Link>
    )    
}