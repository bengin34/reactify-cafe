import React from 'react';
import DisplayMenu from './components/DisplayMenu';
import FilterMenu from './components/FilterMenu';

const App = () => {
    return (
        <div>
            <h1>Reactify Cafe</h1>
            <DisplayMenu />
            <FilterMenu />
        </div>
    );
};

export default App;