import React from 'react';
import PageContainer from '../components/PageContainer/PageContainer';
import ProjectList from '../components/ProjectList/ProjectList';

export default ({data}) => {
    return (
        <PageContainer>
            <h1>Projects</h1>
            <p>
                Here is a list of all the projects I am either currently working on, or have worked on.
            </p>
            <ProjectList projects={data.allMarkdownRemark.edges} />
        </PageContainer>
    )
};

export const query = graphql`
    query AllProjects {
        allMarkdownRemark(
            filter: {
                fileAbsolutePath: {
                    regex: "\/project/"
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