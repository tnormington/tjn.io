import React, { Component } from 'react'
import MenuLink from '../MenuLink/MenuLink'

import Link from 'gatsby-link'
import Logo from '../Logo/Logo'
import SocialIcons from '../SocialIcons/SocialIcons'
import ContactIconBtn from '../ContactIconBtn/ContactIconBtn'

import { links } from '../../models/main_menu'

import './MobileMenu.sass'
import SearchToggle from '../SearchToggle/SearchToggle';
import ActiveIndicator from '../ActiveIndicator/ActiveIndicator';

export default class MobileMenu extends Component {
    constructor(props) {
        super(props)

        // this.menuLinkRef = this.menuLinkRef.bind(this)
        // this.updateActivePosition = this.updateActivePosition.bind(this)
        // this.moveActiveIndicator = this.moveActiveIndicator.bind(this)
        // this.disableActiveIndicator = this.disableActiveIndicator.bind(this)

        this.state = {
            showActiveIndicator: false,
            activePos: {
                x: 0,
                y: 0,
                width: 0,
                height: 0,
            } 
        }
    }

    // menuLinkRef(el) {
    //     if(el !== null && el.classList.contains('active')) {
    //         // console.log(el);
    //         this.updateActivePosition(el);
    //     }
    // }

    // disableActiveIndicator() {
    //     this.setState({
    //         showActiveIndicator: false
    //     });
    // }

    // updateActivePosition(el) {
    //     const {
    //         x, y,
    //         width, height
    //     } = el.getBoundingClientRect();

    //     this.setState({
    //         showActiveIndicator: true,
    //         activePos: { x, y, width, height }
    //     }, this.moveActiveIndicator );
    // }
    
    // moveActiveIndicator() {
    //     this.activeIndicator.style.left = this.state.activePos.x + 'px';
    //     this.activeIndicator.style.width = this.state.activePos.width + 'px';
    //     this.activeIndicator.style.height = this.state.activePos.height + 'px';
    // }

    render() {
        // build the menu links
        const menuLinks = links.map( link => (
            <div 
                key={link.title}
                // onClick={(e) => {
                //     // only handle the click for links
                //     if(e.target.nodeName === 'A') {
                //         this.props.closeSearch();
                //         this.updateActivePosition(e.target)
                //     }
                // }}
                >
                <MenuLink
                    // menuLinkRef={this.menuLinkRef}
                    onClick={e => this.props.updateActivePosition(e.target)}
                    title={link.title}
                    to={link.to}
                    path={this.props.path} />
            </div>
        ));

        return (
            <div className="mobile-menu__outer">
                <div className="mobile-menu__top">
                    <div
                        onClick={() => {
                            this.props.updateActivePosition(null);
                            this.props.closeSearch();
                            this.setState({ showActiveIndicator: false });
                        }}>
                        <Link
                            to="/"
                            className="mobile-menu__top__logo">
                            <Logo
                                classNames={this.props.path == '/' ? 'active--yellow' : ''} />
                        </Link>
                    </div>
                    <div className="mobile-menu__top__menu">
                        <SocialIcons />
                        <ContactIconBtn
                            path={ this.props.path }
                            onClick={() => {
                                this.props.closeSearch();
                                this.props.updateActivePosition(null)
                            }} />
                        <SearchToggle 
                            onClick={this.props.toggleSearch}
                            showSearch={this.props.showSearch}
                            />
                    </div>
                </div>
                
                <div
                    className="mobile-menu__bottom">
                    { this.props.activePos &&
                        <ActiveIndicator activePos={this.props.activePos} />
                    }
                    { menuLinks }
                </div>
            </div>
        )
    }
}