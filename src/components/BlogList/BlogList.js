import React from 'react'
import Card from '../Card/Card'

import Link from 'gatsby-link'

export default (props) => {
    return (
        <div>
            { props.blogs && props.blogs.map( blog => {
                const {
                    title,
                    date,
                    keywords
                } = blog.node.frontmatter;
                const { id } = blog.node;
                const { slug } = blog.node.fields;
                
                return (
                    <Link to={slug} key={id}>
                        <Card>
                            <div className="blog-teaser__title">
                                { title }
                            </div>
                        </Card>
                    </Link>
                )
            })}
        </div>
    )
}