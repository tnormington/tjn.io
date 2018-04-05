import React from 'react'
import PageContainer from '../components/PageContainer/PageContainer'

export default ({data}) => {
    const { title, date, github_link, header_image } = data.markdownRemark.frontmatter;
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

export const projectQuery = graphql`
  query ProjectQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
      }
    }
  }
`;