import React, {Component} from 'react';
import {Index} from 'elasticlunr';

import Link from 'gatsby-link';

import ClearIcon from 'react-icons/lib/fa/close';

import './Search.sass'
import SearchResult from './SearchResult/SearchResult';

export default class Search extends Component {
    constructor(props) {
        super(props);

        this.clearQuery = this.clearQuery.bind(this)
        this.handleKeyUp = this.handleKeyUp.bind(this)
        this.closeSearch = this.props.closeSearch.bind(this)

        this.state = {
            query: ``,
            results: [],
            mounted: false,
        };
    }

    componentDidMount() {
        // My work-around for adding a transition
        window.setTimeout(() => {
            this.setState({ mounted: true });
        }, 10)

        // Add keyup listener to window to close search box on esc keypress
        window.addEventListener('keyup', this.handleKeyUp);
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
            <div className={ classNames }>
                <div className="search__inner">
                    <input
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
                    <ul className="search__results">
                        {this.state.results.map(page => (
                            <SearchResult
                                key={page.id}
                                onClick={this.closeSearch}
                                page={page} />
                        ))}
                        { this.state.results.length <= 0 && this.state.query != '' &&
                            <div className="search__no-results">
                                I didn't find anything with those search terms, try something else.
                            </div>
                        }
                    </ul>
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
                .map(({
                ref,
                }) => this.index.documentStore.getDoc(ref)),
        });
    }
}