import React from 'react'


import PageContainer from '../components/PageContainer/PageContainer'
import BlogList from '../components/BlogList/BlogList';

export default ({ data }) => {
    // console.log(data);
    return (
        <PageContainer>
            <h1>Blog Posts</h1>
            <BlogList blogs={data.allMarkdownRemark.edges} />
        </PageContainer>
    )
}

export const query = graphql`
    query AllBlogs {
        allMarkdownRemark(
            filter: {
                fileAbsolutePath: {
                    regex: "\/blog/"
                }
            }
        ) {
            edges {
                node {
                    id
                    frontmatter {
                        title
                        date
                        keywords
                    }
                    excerpt
                    fields {
                        slug
                    }
                }
            }
        }
    }`;