import React from 'react'
import PageContainer from '../components/PageContainer/PageContainer'
import Date from '../components/Date/Date'
import Keywords from '../components/Keywords/Keywords';

export default ({data}) => {
    const { 
      title,
      date,
      github_link, 
      header_image,
      keywords
    } = data.markdownRemark.frontmatter;

    return (
        <PageContainer>
          <div
            itemScope
            itemType="http://schema.org/CreativeWork">
            <h1>{ title }</h1>
            <Date date={ date } />
            <Keywords keywords={ keywords } />
            { github_link && 
              <div>
                <a href={github_link} target="_blank">Github</a>
              </div>
            }
            <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
          </div>
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
        keywords
      }
    }
  }
`;