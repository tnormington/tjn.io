import React, { Component } from 'react';
import Container from '../Container/Container';

import './Footer.sass'
import SocialIcons from '../SocialIcons/SocialIcons';
import MobileMenu from '../MobileMenu/MobileMenu';
import Logo from '../Logo/Logo';
import CopyrightBar from './CopyrightBar/CopyrightBar';

import Link from 'gatsby-link'

export default class Footer extends Component {
    constructor(props) {
        super(props);

        // this.resizeListener;
    }


    componentDidMount() {
        this.resizeListener = window.addEventListener('resize', () => {
            this.props.resetHeight();
            this.forceUpdate();
        });
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.resizeListener );
    }


    render() {
        return (
            <div
                className="footer__wrapper"
                ref={ el => {
                    if(el != null && this.props.height === null && el.clientHeight > 0)
                        this.props.setHeight('footer', el.clientHeight) 
                }}>
                <Container>
                    <CopyrightBar />
                </Container>
                <MobileMenu
                    toggleSearch={this.props.toggleSearch}
                    closeSearch={this.props.closeSearch}
                    showSearch={this.props.showSearch}
                    path={this.props.path} />
            </div>
        )
    }
}