import React from 'react'


import PageContainer from '../components/PageContainer/PageContainer'
import BlogList from '../components/BlogList/BlogList';

export default ({ data }) => {
    console.log(data);
    return (
        <PageContainer>
            <h1>Blog</h1>
            { data &&
                <BlogList blogs={data.allMarkdownRemark.edges} />
            }
        </PageContainer>
    )
}

export const allBlogsQuery = graphql`
    query AllBlogs {
        allMarkdownRemark(
            filter: {
                fileAbsolutePath: {
                    regex: "\/blog/"
                }
            }
            sort: { 
                fields: [frontmatter___date],
                order: DESC 
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