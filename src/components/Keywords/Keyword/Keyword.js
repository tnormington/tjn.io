import React from 'react';
import './Keyword.sass'

import { classify } from '../../../utils/string'

export default ({ keyword, theme }) => (
    <li className={`keyword ${theme} ${classify(keyword)}`}>
        { keyword }
    </li>
)