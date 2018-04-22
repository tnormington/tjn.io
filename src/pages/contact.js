import React from 'react';

import ContactForm from '../components/ContactForm/ContactForm'
import PageContainer from '../components/PageContainer/PageContainer';

export default () => (
    <PageContainer>
        <h1>Contact</h1>
        <p>
            If you would like to discuss a project, or just have a question/comment about something. Feel free to submit it using this form.
        </p>
        <p>
            If you'd prefer to write a plain old-fashioned email, that's totally cool too. Send that to <a href="mailto:tim.j.normington">tim.j.normington@gmail.com</a>
        </p>
        <ContactForm />
    </PageContainer>
)