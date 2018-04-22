import React from 'react';
import Link from 'gatsby-link'

import Plane from 'react-icons/lib/fa/paper-plane';

import './ContactIconBtn.sass'

export default ({path, onClick}) => {
    const active = path === '/contact';

    return (
        <div onClick={onClick}>
            <Link
                className={`contact-icon-btn ${active ? 'active' : ''}`}
                to="/contact">
                <Plane />
            </Link>
        </div>
    )
}