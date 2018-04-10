import React, { Component } from 'react';

import './SearchResults.sass'

import { TransitionMotion, spring, presets } from 'react-motion'

import SearchResult from './SearchResult/SearchResult'

export default class SearchResults extends Component {
    constructor(props) {
        super(props) 

    }

    // Animation methods
    getDefaultStyles() {
        return this.props.results.map(result => {
            return {
                key:result.id,
                data: result,
                style: {
                    scale: 0.95
                }
            }
        })
    }

    getStyles(prevInterpolatedStyles) {

        return prevInterpolatedStyles.map((result, i) => {
            return i === 0
                ? 
                {
                    key: result.data.id,
                    data:result.data,
                    style: {
                        scale: spring(1, presets.gentle)
                    }
                } 
                : 
                {
                    key: result.data.id,
                    data:result.data,
                    style: {
                        scale: spring(prevInterpolatedStyles[i - 1].style.scale)
                    }
                };
            })

    }


    resultWillEnter() {
        return {
            scale: 0.95
        }
    }


    resultWillLeave() {
        return {
            scale: spring( 0.95, presets.gentle)
        }
    }

    render() {
        const {
            results,
            query
        } = this.props;

        return (
            <div className="search__results">
                { results.length > 0 &&
                    <TransitionMotion
                        willLeave={this.resultWillLeave}
                        willEnter={this.resultWillEnter}
                        defaultStyles={this.getDefaultStyles()}
                        styles={ prevStyles => {
                            console.log(prevStyles);
                            return this.getStyles(prevStyles);
                        }}
                        >
                        {results => 
                            <div>
                                { results.map(result => {
                                    return (
                                        <SearchResult
                                            style={result.style}
                                            key={result.id}
                                            onClick={this.closeSearch}
                                            result={result.data} />
                                    )
                                })}
                            </div>
                        }
                    </TransitionMotion>
                }
                { results.length <= 0 && query != '' &&
                    <div className="search__no-results">
                        I didn't find anything with those search terms, try something else.
                    </div>
                }
            </div>
        )
    }
}