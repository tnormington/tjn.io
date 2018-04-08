import React from 'react';
import Keyword from './Keyword/Keyword';

import './Keywords.sass'

export default ({ keywords }) => {
    return (
        <ul className="keywords">
            { keywords && keywords.map( keyword => (
                <Keyword 
                    key={keyword}
                    keyword={keyword} />
            ))}
        </ul>
    )
}