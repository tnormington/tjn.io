import React from 'react'
import PageContainer from '../components/PageContainer/PageContainer'
import DisqusThread from '../components/DisqusThread/DisqusThread'
import Date from '../components/Date/Date'

import PageHeader from '../components/PageHeader/PageHeader'
import ContentContainer from '../components/ContentContainer/ContentContainer'

import { ttr } from '../utils/dom'

export default ({data}) => {
    const {
      title,
      date,
      header_image,
      keywords
    } = data.markdownRemark.frontmatter;

    const url = data.markdownRemark.fields.slug;
    const id = data.markdownRemark.id;

    // console.log(ttr(data.markdownRemark.html).text);

    return (
      <div
        itemScope
        itemType="http://schema.org/BlogPosting">
        <PageHeader 
          ttr={ttr(data.markdownRemark.html).text}
          keywords={keywords}
          title={title}
          url={url}
          date={date} />
        <PageContainer>
          <ContentContainer>
            <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
            <DisqusThread 
              url={url}
              identifier={url}
              />
          </ContentContainer>
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
        keywords
      }
      fields {
        slug
      }
    }
  }
`;