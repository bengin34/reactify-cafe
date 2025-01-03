import React from 'react';
import DisplayMenu from './components/DisplayMenu';
import FilterMenu from './components/FilterMenu';
import SearchBar from './components/SearchBar';
import SortMenu from './components/SortMenu';

const App = () => {
    return (
        <div>
            <h1>Reactify Cafe</h1>
            <DisplayMenu />
            <FilterMenu />
            <SearchBar />
            <SortMenu />
        </div>
    );
};

export default App;