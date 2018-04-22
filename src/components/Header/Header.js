import React, { Component } from 'react'
import Link from 'gatsby-link'

import Container from '../Container/Container'
import './Header.sass'

import Logo from '../Logo/Logo'
import MainMenu from '../MainMenu/MainMenu';
import MobileMenu from '../MobileMenu/MobileMenu';
import SearchToggle from '../SearchToggle/SearchToggle';
import ContactIconBtn from '../ContactIconBtn/ContactIconBtn';
import { ETIME } from 'constants';

import {
  searchParents
} from '../../utils/dom'


export default class Header extends Component {
  constructor(props) {
    super(props);

    this.updateActivePosition = this.updateActivePosition.bind(this);

    this.state = {
      showActiveIndicator: false,
      activePos: {
          x: 0,
          y: 0,
          width: 0,
          height: 0,
      } 
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

  updateActivePosition(el) {
    if(el === null) {
      this.setState({
        activePos: false,
      })

      return;
    }

    const {
        x, y,
        width, height
    } = el.getBoundingClientRect();

    this.setState({
        showActiveIndicator: true,
        activePos: { x, y, width, height }
    }, this.moveActiveIndicator );
  }

  // addLinkToState(link) {
  //   this.setState( prevState => {
  //     prevState.links.push(link);
  //     return prevState;
  //   });
  // }

  render() {
    const isHome = this.props.path == '/';
  
    return (
      <div
        // onClick={e => {
        //   // console.log(e.target.nodeName === 'A' || searchParents(e.target, 'A') !== null)
        //   if(e.target.nodeName === 'A' || searchParents(e.target, 'A') !== null)
        //     console.log(e.target.href)
        //     if(e.target.href === undefined || e.target.href.endsWith('contact')) {
        //       this.updateActivePosition(null);
        //     } else {
        //       this.updateActivePosition(e.target);
        //     }
        // }}
        className="topbar__wrapper"
        ref={(el) => {
          if(el != null && this.props.height === null && el.clientHeight > 0)
            this.props.setHeight('header', el.clientHeight);
        }}>
        <Container>
          <div className="topbar">
            <div
              onClick={() => {
                this.updateActivePosition(null);
                this.props.closeSearch();
              }}
              className="topbar__logo">
              <Link 
                to="/">
                <Logo classNames={isHome ? 'active--yellow' : ''} />
              </Link>
            </div>
            <MainMenu
              onClick={this.props.closeSearch}
              // addLinkToState={this.addLinkToState}
              path={this.props.path} />
            <div className="header__util">
              <ContactIconBtn
                onClick={() => {
                  this.props.closeSearch();
                  this.updateActivePosition(null)
                }}
               />
              <SearchToggle 
                showSearch={this.props.showSearch}
                onClick={this.props.toggleSearch} />
            </div>
          </div>
        </Container>
        <MobileMenu
            toggleSearch={this.props.toggleSearch}
            closeSearch={this.props.closeSearch}
            showSearch={this.props.showSearch}
            activePos={this.state.activePos}
            updateActivePosition={this.updateActivePosition}
            path={this.props.path} />
      </div>
    )
  }
}

