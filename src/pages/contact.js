import React from 'react';

import ContactForm from '../components/ContactForm/ContactForm'
import PageContainer from '../components/PageContainer/PageContainer';

export default () => (
    <PageContainer>
        <h1>Contact</h1>
        <p>
            If you would like to discuss a project, or just have a question/comment about something. Feel free to submit it using this form.
        </p>
        <ContactForm />
    </PageContainer>
)