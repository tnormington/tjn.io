import React from 'react';
import SearchIcon from 'react-icons/lib/fa/search';
import CloseIcon from 'react-icons/lib/fa/close';

import './SearchToggle.sass'

export default ({onClick, showSearch}) => (
    <button
        className={`search-toggle ${showSearch ? 'active' : ''}`}
        onClick={onClick}
        value="Search">
        { showSearch &&
            <CloseIcon />
        }
        { !showSearch &&
            <SearchIcon />
        }
    </button>
)