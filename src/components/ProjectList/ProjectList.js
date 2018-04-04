import React from 'react'
import ProjectTeaser from './ProjectTeaser/ProjectTeaser'

export default ({projects}) => {
    console.log(projects);
    return (
        <div>
            <h3>Project List</h3>
            { projects.map( project => (
                <ProjectTeaser
                    key={project.node.id}
                    title={project.node.frontmatter.title}
                    date={project.node.frontmatter.date}
                    keywords={project.node.frontmatter.keywords}
                    slug={project.node.fields.slug}
                    excerpt={project.node.excerpt}
                    />
            ))}
        </div>
    )
};

