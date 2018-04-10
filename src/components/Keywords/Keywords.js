import React from 'react';
import Keyword from './Keyword/Keyword';

import './Keywords.sass'

export default ({ keywords, theme }) => {
    return (
        <ul className="keywords">
            { keywords && keywords.map( keyword => (
                <Keyword 
                    theme={theme}
                    key={keyword}
                    keyword={keyword} />
            ))}
        </ul>
    )
}