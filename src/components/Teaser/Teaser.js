import React from 'react'
import Link from 'gatsby-link'


import './Teaser.sass'
import Card from '../Card/Card'
import Keywords from '../Keywords/Keywords';
import Date from '../Date/Date'

export default (props) => (
    <Link 
        className="teaser"
        to={props.slug}>
        <Card>
            <div className="teaser__title">{props.title}</div>
            <div className="teaser__meta">
                <div className="teaser__meta__date">
                    <Date date={props.date} />
                </div>
                { props.keywords &&
                    <Keywords keywords={props.keywords} />
                }
            </div>
            <p className="teaser__excerpt">{props.excerpt}</p>
        </Card>
    </Link>
)