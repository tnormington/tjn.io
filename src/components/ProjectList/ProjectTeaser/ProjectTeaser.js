import React from 'react'
import Link from 'gatsby-link'

import Card from '../../Card/Card'

import './ProjectTeaser.sass'

export default (props) => (
    <Link 
        className="project-teaser__link"
        to={props.slug}>
        <Card>
            <div className="project-teaser__title">{props.title}</div>
            <div className="project-teaser__meta">
                <time className="project-teaser__date">{props.date}</time>
                { props.keywords &&
                    <ul className="project-teaser__keywords">
                        { props.keywords.split("|").map( keyword => (
                            <li key={keyword}>
                                {keyword}
                            </li>
                        ))}
                    </ul>
                }
            </div>
            <p className="project-teaser__excerpt">{props.excerpt}</p>
        </Card>
    </Link>
)