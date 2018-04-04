import React from 'react'
import Link from 'gatsby-link'

import './Cta.css'

export default (props) => {
    return (
        <Link
            className="cta"
            to={props.to}>
            {props.title}
        </Link>
    )    
}