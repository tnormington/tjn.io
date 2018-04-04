import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

import './base.sass'


export default class TemplateWrapper extends Component {
  constructor(props) {
    super(props);

    this.setHeight = this.setHeight.bind(this);
    this.setHeightVariable = this.setHeightVariable.bind(this);
    this.resetHeight = this.resetHeight.bind(this);

    this.state = {
      height: {
        header: null,
        footer: null,
      }
    };
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
          ]}
        />
        <Header 
          resetHeight={ this.resetHeight }
          height={ this.state.height.header }
          setHeight={this.setHeight}
          path={this.props.location.pathname} />
        <div className="main-content">
          {this.props.children()}
        </div>
        <Footer
          resetHeight={ this.resetHeight }
          height={ this.state.height.footer }
          setHeight={this.setHeight}
          path={this.props.location.pathname} />
      </div>
    )
  }
}

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

