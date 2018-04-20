import React, { Component } from 'react'
import MenuLink from '../MenuLink/MenuLink'

import Link from 'gatsby-link'
import Logo from '../Logo/Logo'
import SocialIcons from '../SocialIcons/SocialIcons'
import ContactIconBtn from '../ContactIconBtn/ContactIconBtn'

import { links } from '../../models/main_menu'

import './MobileMenu.sass'
import SearchToggle from '../SearchToggle/SearchToggle';

export default class MobileMenu extends Component {
    constructor(props) {
        super(props)

        this.menuLinkRef = this.menuLinkRef.bind(this)
        this.updateActivePosition = this.updateActivePosition.bind(this)
        this.moveActiveIndicator = this.moveActiveIndicator.bind(this)

        // this.menuBottom;

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

    menuLinkRef(el) {
        if(el !== null && el.classList.contains('active')) {
            // console.log(el);
            this.updateActivePosition(el);
        }
    }

    updateActivePosition(el) {
        console.log(this.menuBottom);
        // const pX = this.menuBottom.offset().left;
        // const pY = this.menuBottom.offset().top;
        const {
            x, y,
            width, height
        } = el.getBoundingClientRect();
        // const y = el.getBoundingClientRect();
        console.log(x, y, width, height);

        this.setState({
            showActiveIndicator: true,
            activePos: { x, y, width, height }
        }, this.moveActiveIndicator );
    }
    
    moveActiveIndicator() {
        this.activeIndicator.style.left = this.state.activePos.x + 'px';
        // this.activeIndicator.style.top = this.state.activePos.y + 'px';
        this.activeIndicator.style.width = this.state.activePos.width + 'px';
        this.activeIndicator.style.height = this.state.activePos.height + 'px';
    }

    render() {
        const menuLinks = links.map( link => (
            <div 
                key={link.title}
                onClick={(el) => {
                    this.props.closeSearch();
                    this.updateActivePosition(el.target)
                }}>
                <MenuLink
                    menuLinkRef={this.menuLinkRef}
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
                            this.props.closeSearch()
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
                        <ContactIconBtn />
                        <SearchToggle 
                            onClick={this.props.toggleSearch}
                            showSearch={this.props.showSearch}
                            />
                    </div>
                </div>
                
                <div 
                    ref={ el => {
                        // console.log('menuBottom ref');
                        // this.menuBottom = el;
                    }}
                    className="mobile-menu__bottom">
                    { this.state.showActiveIndicator &&
                        <div 
                            ref={ el => this.activeIndicator = el }
                            className="active-indicator" />
                    }
                    { menuLinks }
                </div>
            </div>
        )
    }
}