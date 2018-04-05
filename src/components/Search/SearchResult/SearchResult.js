import React from 'react';

import Link from 'gatsby-link';

import './SearchResult.sass'

export default (props) => {
    const page = props.page;

    return (
        <li className="search__results__result">
            <div 
                style={{ display: 'inline-block' }}
                onClick={props.onClick}>
                <Link 
                    to={page.slug}
                    key={page.title}>
                    {page.title}
                </Link>
            </div>
            <ul className="search__results__result__keywords">
                {page.keywords.map( k => (
                    <li
                        className="search__results__result__keywords__keyword"
                        key={ k }>
                        { k }
                    </li>
                ))}
            </ul>
            <div dangerouslySetInnerHTML={{ __html: page.excerpt }} />
        </li>
    )
}