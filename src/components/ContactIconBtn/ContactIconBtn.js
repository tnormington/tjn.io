import React from 'react';
import Link from 'gatsby-link'

import Plane from 'react-icons/lib/fa/paper-plane';

export default () => (
    <Link
        className="contact-icon-btn"
        to="/contact">
        <Plane />
    </Link>
)