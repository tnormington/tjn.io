import React from 'react';

import Link from 'gatsby-link';

import Card from '../../../Card/Card'
import Keywords from '../../../Keywords/Keywords'

import './SearchResult.sass'

export default (props) => {
    const {
        result,
        style
    } = props;

    const scale = `scale(${style.scale})`;


    return (
        <div 
            style={{
                transform: scale,
                overflow: 'hidden',
            }}
            onClick={props.onClick}>
            <Link 
                className="search__results__result"
                to={result.slug}
                key={result.title}>
                <Card>
                    <div>
                        {result.title}
                    </div>
                    <div>
                        <Keywords keywords={result.keywords} />
                    </div>
                    <div>
                        {result.excerpt }
                    </div>
                </Card>
            </Link>
        </div>
    )
}