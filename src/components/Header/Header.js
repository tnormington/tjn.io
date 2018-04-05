import React, { Component } from 'react'
import Link from 'gatsby-link'

import Container from '../Container/Container'
import './Header.sass'

import Logo from '../Logo/Logo'
import MainMenu from '../MainMenu/MainMenu';
import SearchToggle from '../SearchToggle/SearchToggle';


export default class Header extends Component {
  constructor(props) {
    super(props);

    this.addLinkToState = this.addLinkToState.bind(this);

    this.state = {
      links: []
    };
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

  addLinkToState(link) {
    this.setState( prevState => {
      prevState.links.push(link);
      return prevState;
    });
  }

  render() {
    const isHome = this.props.path == '/';
  
    return (
      <div className="topbar__wrapper" ref={(el) => {
        if(el != null && this.props.height === null && el.clientHeight > 0)
          this.props.setHeight('header', el.clientHeight);
        }}>
        <Container>
          <div className="topbar">
            <div
              onClick={this.props.closeSearch}
              className="topbar__logo">
              <Link 
                innerRef={(el) => this.addLinkToState(el) }
                to="/">
                <Logo classNames={isHome ? 'active--yellow' : ''} />
              </Link>
            </div>
            <MainMenu
              onClick={this.props.closeSearch}
              addLinkToState={this.addLinkToState}
              path={this.props.path} />
            <div className="header__search-toggle">
              <SearchToggle 
                showSearch={this.props.showSearch}
                onClick={this.props.toggleSearch} />
            </div>
          </div>
        </Container>
      </div>
    )
  }
}

// export default Header
