import React from 'react';
import PageContainer from '../components/PageContainer/PageContainer';

import Link from 'gatsby-link'
import ContactForm from '../components/ContactForm/ContactForm';

export default () => {
    return (
        <PageContainer>
            <h1>About</h1>
            <p>
                My name is Tim and I dig computers. I like doing all the standard outdoor stuff: hiking, skiing, camping, etc. I also play a lot of video games and lately I've been getting into developing them on my own, check out the <Link to="/projects">Projects page</Link> for a taste.
            </p>
        </PageContainer>
    )
};