import React from "react";
import styles from './SearchResults.module.css';
import Tracklist from "../Tracklist/Tracklist";

const SearchResults = () => {

    return (
        <div className="search-results">
            <h2 className="results-ttile">Search Results</h2>
            <Tracklist />
        </div>
    );
};

export default SearchResults;