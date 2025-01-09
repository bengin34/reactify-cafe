import React from 'react';
import DisplayMenu from './components/DisplayMenu';
import FilterMenu from './components/FilterMenu';
import AddToCart from './components/AddToCart';
import SearchBar from './components/SearchBar';
import SortMenu from './components/SortMenu';
import AxiosMenu from './components/AxiosMenu';

const App = () => {
    return (
        <div>
            <h1>Reactify Cafe</h1>
            <DisplayMenu />
            <FilterMenu />
            <AddToCart />
            <SearchBar />
            <SortMenu />
            <AxiosMenu />
        </div>
    );
};

export default App;