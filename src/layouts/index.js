import 'babel-polyfill'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Search from '../components/Search/Search'

import './base.sass'

import { getScrollbarWidth } from '../utils/dom'


export default class TemplateWrapper extends Component {
  constructor(props) {
    super(props);

    this.setHeight = this.setHeight.bind(this);
    this.setHeightVariable = this.setHeightVariable.bind(this);
    this.resetHeight = this.resetHeight.bind(this);
    this.toggleSearch = this.toggleSearch.bind(this);
    this.closeSearch = this.closeSearch.bind(this);

    this.state = {
      height: {
        header: null,
        footer: null,
      },
      showSearch: false,
    };
  }

  componentDidMount() {
    // Remove scrollbar by setting negative marginRight
    const scrollbarWidth = getScrollbarWidth();
    this.mainContent.style.marginRight = `-${scrollbarWidth}px`;
    // this.heightPX = window.screen.innerHeight ? window.screen.innerHeight : window.screen.height + 'px';

    this.innerHeight = require('ios-inner-height');

    this.userAgent = window.navigator.userAgent;


    // console.log(this.innerHeight())
    // console.log(window.document.body);
    window.document.body.style.height = window.screen.innerHeight + 'px';
  }

  setHeight(el, h) {
    this.setState(prevState => {
      prevState.height[el] = h;
      return prevState;
    }, this.setHeightVariable);
  }

  resetHeight() {
    this.setState({
      height: {
        header: null,
        footer: null
      }
    });
  }

  setHeightVariable() {
    const { header, footer } = this.state.height;

    let slideHeight = `calc(${this.innerHeight()}px`;
    // let bodyH = `calc(${this.innerHeight()}px`;

    if(header != null)
      slideHeight += ` - ${header}px`;
      // bodyH += ` - ${header}px`;
    if(footer != null)
      slideHeight += ` - ${footer}px`;
      // bodyH += ` - ${footer}px`;

    // special fix for iPad & iPhone to account for menu bar
    // if (this.userAgent.match(/iPad/i) || this.userAgent.match(/iPhone/i)) {
    //   slideHeight += ` - 110px`;
    // }

    slideHeight += ')';





    document.body.style.setProperty('--slide-height', slideHeight);
    document.body.style.setProperty('--footer-height', footer + 'px');
    document.body.style.setProperty('--header-height', header + 'px');

    // document.body.style.height = slideHeight;
  }

  toggleSearch() {
    this.setState(prevState => {
      prevState.showSearch = !prevState.showSearch;
      return prevState;
    })
  }

  closeSearch() {
    this.setState({
      showSearch: false
    });
  }

  render() {
    const toggleSearch = this.toggleSearch;

    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column'
        }}>
        <Helmet
          title="TJN.io"
          meta={[
            { name: 'description', content: 'A personal portfolio website.' },
            { name: 'keywords', content: 'tim normington, web design, web development, tjn, tjn.io' },
          ]}>
          <meta name="apple-mobile-web-app-capable" content="yes" />
        </Helmet>
        { this.props.data.siteSearchIndex && this.state.showSearch &&
          <Search 
            closeSearch={this.closeSearch}
            index={this.props.data.siteSearchIndex.index} />
        }
        <Header 
          resetHeight={ this.resetHeight }
          height={ this.state.height.header }
          setHeight={this.setHeight}
          path={this.props.location.pathname}
          toggleSearch={this.toggleSearch}
          closeSearch={this.closeSearch}
          showSearch={this.state.showSearch}
          />
        <div className="main-content" ref={el => this.mainContent = el}>
          {this.props.children( {...this.props, toggleSearch } ) }
        </div>
        <Footer
          resetHeight={ this.resetHeight }
          height={ this.state.height.footer }
          setHeight={this.setHeight}
          path={this.props.location.pathname}
          toggleSearch={this.toggleSearch}
          closeSearch={this.closeSearch}
          showSearch={this.state.showSearch}
          />
        <script id="dsq-count-scr" src="//tjn-io.disqus.com/count.js" async></script>
      </div>
    )
  }
}

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

// Graphql query used to retrieve the serialized search index.
export const query = graphql`
  query siteSearchIndexQuery {
    siteSearchIndex {
      index
    }
  }`;

