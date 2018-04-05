import React, {Component} from 'react';
import {Index} from 'elasticlunr';

import ClearIcon from 'react-icons/lib/fa/close';

import './Search.sass'

export default class Search extends Component {
    constructor(props) {
        super(props);

        this.clearQuery = this.clearQuery.bind(this)

        this.state = {
            query: ``,
            results: [],
            mounted: false,
        };
    }

    componentDidMount() {
        this.setState({ mounted: true });
    }

    clearQuery() {
        this.setState({ 
            query: '',
            results: []
        });
    }

    render() {
        const classNames = this.state.mounted ? 'search active' : 'search';

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
                        className="search__clear-query"
                        onClick={this.clearQuery}>
                        <ClearIcon />
                    </button>
                    <ul className="search__results">
                        {this.state.results.map(page => (
                            <li key={page.title}>
                                {page.title}: {page.keywords.join(`,`)}
                            </li>
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
        console.log(this.index);
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