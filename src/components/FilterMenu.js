import React, { useState } from 'react';
import menu from '../mock/data';

const FilterMenu = () => {
    const [category, setCategory] = useState('All');

    const filteredMenu = category === 'All' ? menu : menu.filter(item => item.category === category);

    return (
        <div>
            <h1>Filter Menu</h1>
            <select onChange={(e) => setCategory(e.target.value)}>
                <option value="All">All</option>
                <option value="Drink">Drink</option>
                <option value="Snack">Snack</option>
                <option value="Dessert">Dessert</option>
            </select>
            <ul>
                {filteredMenu.map(item => (
                    <li key={item.id}>
                        {item.name} - ${item.price}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FilterMenu;