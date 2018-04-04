import React from 'react';

import Github from 'react-icons/lib/fa/github';
import Twitter from 'react-icons/lib/fa/twitter';


const style = {
    wrapper: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    link: {
        color: 'gray',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        // width: '20px',
        height: '30px',
        width: '30px',
        marginLeft: '4px',
        marginRight: '4px'
    }
};

export default () => (
    <div
        style={style.wrapper}>
        <a style={style.link} href="https://github.com/tnormington" target="_blank">
            <Github />
        </a>
        <a style={style.link} href="https://twitter.com/timjnormington" target="_blank">
            <Twitter />
        </a>
    </div>
)
