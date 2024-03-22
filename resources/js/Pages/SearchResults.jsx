import React from 'react';
import PropertyList from './PropertyList';
import "../../css/app.css";

const SearchResults = () => {
    return (
        <div className="results-page">
            <h1>Property Search Results</h1>
            <PropertyList />
        </div>
    );
};

export default SearchResults;