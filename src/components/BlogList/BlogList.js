import React from 'react'
import Card from '../Card/Card'

import Link from 'gatsby-link'
import Teaser from '../Teaser/Teaser';

export default (props) => {
    return (
        <div>
            { props.blogs && props.blogs.map( blog => {
                const {
                    title,
                    date,
                    keywords
                } = blog.node.frontmatter;
                const { id, excerpt } = blog.node;
                const { slug } = blog.node.fields;
                
                return (
                    <Teaser 
                        key={id}
                        slug={slug}
                        title={title}
                        date={date}
                        keywords={keywords}
                        excerpt={excerpt}
                        />
                )
            })}
        </div>
    )
}