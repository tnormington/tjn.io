import React from 'react';

import { formatDate } from '../../utils/date'

import './Date.sass'

export default ({date, theme}) => (
    <time
        className={`date ${theme}`}
        dateTime={date}>
        <span 
            itemProp="dateCreated"
            style={{ display: "none" }}>
            {date}
        </span>
        { formatDate(date) }
    </time>
)