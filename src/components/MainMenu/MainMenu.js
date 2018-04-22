import React, { Component } from 'react'
import Link from 'gatsby-link'

import { links } from '../../models/main_menu'

import './MainMenu.sass'
import MenuLink from '../MenuLink/MenuLink'

export default class MainMenu extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { path } = this.props
        const menuLinks = links.map(link => (
            <MenuLink
                onClick={this.props.onClick}
                key={link.title}
                title={link.title}
                to={link.to}
                path={path}
            />
        ))

        return <div className="topbar__menu">{menuLinks}</div>
    }
}
