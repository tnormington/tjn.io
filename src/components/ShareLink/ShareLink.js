import React, { Component } from 'react';

import ShareIcon from 'react-icons/lib/fa/share-alt'

export default class ShareLink extends Component {
    constructor(props) {
        super(props)

        this.handleClick = this.handleClick.bind(this)

        this.state = {
            showLink: false,
        }
    }

    componentDidMount() {
        if(window.navigator.share) this.setState({ showLink: true });
    }

    handleClick(e) {
        // e.preventDefault();

        const {
            title,
            text,
        } = this.props;

        // if(!url.beginsWith('http')) {
        //     url = 
        // }

        const url = window.location.href;

        console.log(window.navigator.share);

        if (window.navigator.share) {
            window.navigator.share({
                title,
                text,
                url,
            })
            .then(() => console.log('Successful share'))
            .catch((error) => console.log('Error sharing', error));
        }

    }

    render() {
        return (
            <div>
                { this.state.showLink &&
                    <button onClick={this.handleClick}>
                        <ShareIcon />
                    </button>
                }
            </div>
        )
    }
}

