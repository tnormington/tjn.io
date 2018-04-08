import React from 'react';

import Link from 'gatsby-link';

import './SearchResult.sass'
import Card from '../../Card/Card'
import Keywords from '../../Keywords/Keywords'

export default (props) => {
    const page = props.page;

    return (
        <div onClick={props.onClick}>
            <Link 
                className="search__results__result"
                to={page.slug}
                key={page.title}>
                <Card>
                    <div>
                        {page.title}
                    </div>
                    <div>
                        <Keywords keywords={page.keywords} />
                    </div>
                    <div>
                        {page.excerpt }
                    </div>
                </Card>
            </Link>
        </div>
    )
}