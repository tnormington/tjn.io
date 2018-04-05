import React, { Component } from 'react';

export default class DisqusThread extends Component {
    constructor(props) {
        super(props)
        
    }
    
    componentDidMount() {
        window.disqus_config = {
            page: {
                url: props.url,
                identifier: props.identified
            }
        };

        (function() { // DON'T EDIT BELOW THIS LINE
            var d = document, s = d.createElement('script');
            s.src = 'https://tjn-io.disqus.com/embed.js';
            s.setAttribute('data-timestamp', +new Date());
            (d.head || d.body).appendChild(s);
        })();
    }

    render() {
        return (
            <div id="disqus_thread" />
        )
    }
}