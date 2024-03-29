import React from 'react';
import PropertyList from '@/Components/PropertyList.jsx';
import "../../css/app.css";

const SearchResults = () => {
    const searchQuery = new URLSearchParams(window.location.search).get('query');

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-3xl font-bold mb-8">Property Search Results</h1>
            <div className="w-full max-w-screen-lg">
                <PropertyList searchQuery={searchQuery} />
            </div>
        </div>
    );
};

export default SearchResults;
