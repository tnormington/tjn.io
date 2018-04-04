import React from 'react'
import PageContainer from '../components/PageContainer/PageContainer'

export default ({data}) => {
    const { title, date, github_link, header_image } = data.markdownRemark.frontmatter;
    // const headerImagePath = `../../assets/project_header_images/${header_image}`;

    // const header = require(headerImagePath);
    return (
        <PageContainer>
          <h1>{ title }</h1>
          <time>{ date }</time>
          { github_link && 
          <div>
            <a href={github_link} target="_blank">Github</a>
          </div>
          }
          <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
        </PageContainer>
    )
}

export const query = graphql`
  query ProjectQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
        github_link
      }
    }
  }
`;