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

    let slideHeight = `calc(100vh`;

    if(header != null)
      slideHeight += ` - ${header}px`;
    if(footer != null)
      slideHeight += ` - ${footer}px`;

    slideHeight += ')';

    document.body.style.setProperty('--slide-height', slideHeight)
  }

  toggleSearch() {
    this.setState(prevState => {
      prevState.showSearch = !prevState.showSearch;
      return prevState;
    })
  }

  render() {
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
            { name: 'keywords', content: 'tim normington, web design, web development' },
          ]}>
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <link
            rel="icon" 
            type="image/png" 
            href="/favicon/logo-16x16.png" />
        </Helmet>
        { this.props.data.siteSearchIndex && this.state.showSearch &&
          <Search index={this.props.data.siteSearchIndex.index} />
        }
        <Header 
          resetHeight={ this.resetHeight }
          height={ this.state.height.header }
          setHeight={this.setHeight}
          toggleSearch={this.toggleSearch}
          path={this.props.location.pathname} />
        <div className="main-content" ref={el => this.mainContent = el}>
          {this.props.children()}
        </div>
        <Footer
          resetHeight={ this.resetHeight }
          height={ this.state.height.footer }
          setHeight={this.setHeight}
          path={this.props.location.pathname} />
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

