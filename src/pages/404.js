import React from 'react'

import PageContainer from '../components/PageContainer/PageContainer'

const NotFoundPage = ({toggleSearch}) => (
  <PageContainer>
    <h1>Not Found</h1>
    <p>This page doesn't exist, try <a onClick={e => {
          e.preventDefault();
          toggleSearch()
        }}>
        searching
      </a>.</p>
  </PageContainer>
)

export default NotFoundPage
