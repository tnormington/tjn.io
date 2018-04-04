import React from 'react';

import './PageContainer.sass'
import Container from '../Container/Container';

export default ({children}) => (
    <Container>
        <div className="page-container">
            { children }
        </div>
    </Container>
)