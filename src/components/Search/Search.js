import React, {Component} from 'react';
import {Index} from 'elasticlunr';

import Link from 'gatsby-link';

import ClearIcon from 'react-icons/lib/fa/close';

import './Search.sass'
import SearchResults from './SearchResults/SearchResults';

// import { Motion, StaggeredMotion } from 'react-motion'

export default class Search extends Component {
    constructor(props) {
        super(props);

        this.clearQuery = this.clearQuery.bind(this)
        this.handleKeyUp = this.handleKeyUp.bind(this)
        this.closeSearch = this.props.closeSearch.bind(this)

        this.state = {
            input: null,
            query: ``,
            results: [],
            mounted: false,
        };
    }

    componentDidMount() {
        // My work-around for adding a transition
        // window.setTimeout(() => {
        //     this.setState({ mounted: true });
        // }, 10)

        // Add keyup listener to window to close search box on esc keypress
        window.addEventListener('keyup', this.handleKeyUp);
        // Focus search input
        this.input.focus();
    }

    componentWillUnmount() {
        window.removeEventListener('keyup', this.handleKeyUp);
    }

    handleKeyUp(e) {
        // make sure its the escape key only
        if(e.keyCode === 27) {
            this.closeSearch()
        }
    }

    clearQuery() {
        this.setState({ 
            query: '',
            results: []
        });
    }

    render() {
        const classNames = this.state.mounted ? 'search active' : 'search';
        // Use this to determine the clear class
        const clearBtnClass = this.state.query != '' ? 'active' : '';

        return (
            <div 
                onClick={ e => {
                    if(e.target.classList.contains('search')) this.closeSearch();
                } }
                className={ classNames }>
                <div className="search__inner">
                    <input
                        ref={ el => this.input = el }
                        className="search__input"
                        placeholder="Search..."
                        type="text"
                        value={this.state.query}
                        onChange={this.search}/>
                    <button
                        className={`search__clear-query ${clearBtnClass}`}
                        onClick={this.clearQuery}>
                        <ClearIcon />
                    </button>
                    <SearchResults 
                        query={this.state.query}
                        results={this.state.results} />
                </div>
            </div>
        );
    }

    getOrCreateIndex = () => this.index
        ? this.index
        // Create an elastic lunr index and hydrate with graphql query results
        : Index.load(this.props.index);

    search = (evt) => {
        const query = evt.target.value;
        this.index = this.getOrCreateIndex();
        this.setState({
            query,
            // Query the index with search string to get an [] of IDs
            results: this.index.search(query, {
                    expand: true
                })
                // Map over each ID and return the full document
                .map(({ ref }) => this.index.documentStore.getDoc(ref)),
        });
    }
}