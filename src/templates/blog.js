import React from 'react'
import PageContainer from '../components/PageContainer/PageContainer'

import DisqusThread from '../components/DisqusThread/DisqusThread'

export default ({data}) => {
    const {
      title,
      date,
      header_image
    } = data.markdownRemark.frontmatter;

    const url = data.markdownRemark.fields.slug;
    const id = data.markdownRemark.id;

    return (
        <PageContainer>
          <h1>{ title }</h1>
          <time>{ date }</time>
          <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
          <DisqusThread 
            url={url}
            identifier={url}
            />
        </PageContainer>
    )
}

export const blogQuery = graphql`
  query BlogQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      id
      frontmatter {
        title
        date
      }
      fields {
        slug
      }
    }
  }
`;