import React from 'react';
// import ShareIcon from 'react-icons/lib/fa/share-alt'


import Date from '../Date/Date'
import Keywords from '../Keywords/Keywords'
import Container from '../Container/Container'
import ShareLink from '../ShareLink/ShareLink'

import './PageHeader.sass'

export default ({
    title,
    date,
    keywords,
    ttr,
    url
}) => (
    <div className="page-header">
        <div className="page-header__top__wrapper">
            <Container>
                <div className="page-header__top__inner">
                    <div className="page-header__top__main">
                        <h1>{ title }</h1>
                        <Date 
                            theme="gray"
                            date={ date } />
                    </div>
                    <div className="page-header__top__util">
                        <ShareLink 
                            title={ title }
                            url={ url }
                            />
                        <div className="page-header__ttr">{ ttr }</div>
                    </div>
                </div>
            </Container>
        </div>
        <div className="page-header__bottom__wrapper">
            <Container>
                <Keywords 
                    theme='white'
                    keywords={ keywords } />
            </Container>
        </div>
    </div>
)