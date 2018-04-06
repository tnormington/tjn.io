import React from 'react';

import { formatDate } from '../../utils/date'

import './Date.sass'

export default ({date}) => (
    <time className="date" datetime={date}>{ formatDate(date) }</time>
)