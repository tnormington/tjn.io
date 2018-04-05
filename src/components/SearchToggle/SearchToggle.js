import React from 'react';
import SearchIcon from 'react-icons/lib/fa/search';

import './SearchToggle.sass'

export default ({onClick}) => (
    <button
        className="search-toggle"
        onClick={onClick}
        value="Search">
            <SearchIcon />
    </button>
)