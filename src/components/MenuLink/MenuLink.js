import React from 'react'
import Link from 'gatsby-link'

export default (props) => {
    const check = (
        props.path.includes(props.to)
        // This case is to check for plural links, ie: `projects`
        // trim the `s` off and check if it still matches
        || props.path.includes(props.to.substr(0, props.to.length - 1))
    );
    let className = '';

    if(check) className = 'active';

    return (
        <Link to={props.to} className={className}>
            {props.title}
        </Link>
    )
}