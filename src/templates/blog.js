import React from 'react'
import PageContainer from '../components/PageContainer/PageContainer'
import DisqusThread from '../components/DisqusThread/DisqusThread'
import Date from '../components/Date/Date'

export default ({data}) => {
    const {
      title,
      date,
      header_image
    } = data.markdownRemark.frontmatter;

    const url = data.markdownRemark.fields.slug;
    const id = data.markdownRemark.id;

    return (
      <div
        itemScope
        itemType="http://schema.org/BlogPosting">
        <PageContainer>
          <h1>{ title }</h1>
          <Date date={date} />
          <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
          <DisqusThread 
            url={url}
            identifier={url}
            />
        </PageContainer>
      </div>
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