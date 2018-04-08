import React, { Component } from 'react'
import MenuLink from '../MenuLink/MenuLink'

import Link from 'gatsby-link'
import Logo from '../Logo/Logo'
import SocialIcons from '../SocialIcons/SocialIcons'

import { links } from '../../models/main_menu'

import './MobileMenu.sass'
import SearchToggle from '../SearchToggle/SearchToggle';

export default class MobileMenu extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const menuLinks = links.map( link => (
            <div 
                key={link.title}
                onClick={this.props.closeSearch}>
                <MenuLink
                    title={link.title}
                    to={link.to}
                    path={this.props.path} />
            </div>
        ));

        return (
            <div className="mobile-menu__outer">
                <div className="mobile-menu__top">
                    <div
                        onClick={this.props.closeSearch}>
                        <Link
                            to="/"
                            className="mobile-menu__top__logo">
                            <Logo
                                classNames={this.props.path == '/' ? 'active--yellow' : ''} />
                        </Link>
                    </div>
                    <div className="mobile-menu__top__menu">
                        <SocialIcons />
                        <SearchToggle 
                            onClick={this.props.toggleSearch}
                            showSearch={this.props.showSearch}
                            />
                    </div>
                </div>
                
                <div className="mobile-menu">
                    { menuLinks }
                </div>
            </div>
        )
    }
}