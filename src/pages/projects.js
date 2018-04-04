import React from 'react';
import PageContainer from '../components/PageContainer/PageContainer';
import ProjectList from '../components/ProjectList/ProjectList';

export default ({data}) => {
    console.log(data);
    return (
        <PageContainer>
            <h1>Projects</h1>
            <p>
                Here is a list of all the projects I am either currently working on, or have worked on.
            </p>
            { data.allMarkdownRemark &&
                <ProjectList projects={data.allMarkdownRemark.edges} />
            }
            { !data &&
                <div>
                    There are no projects right now.
                </div>
            }
        </PageContainer>
    )
};

export const allProjectsQuery = graphql`
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
                    }
                    excerpt
                    fields {
                        slug
                    }
                }
            }
        }
    }`;