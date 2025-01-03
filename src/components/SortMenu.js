import React, { useState } from 'react';
import menu from '../mock/data';

const SortMenu = () => {
    const [sortKey, setSortKey] = useState('name');

    const sortedMenu = [...menu].sort((a, b) =>
        sortKey === 'price'
            ? a.price - b.price
            : a.name.localeCompare(b.name)
    );

    return (
        <div>
            <h1>Sort Menu</h1>
            <select onChange={(e) => setSortKey(e.target.value)}>
                <option value="name">Name</option>
                <option value="price">Price</option>
            </select>
            <ul>
                {sortedMenu.map(item => (
                    <li key={item.id}>{item.name} - ${item.price}</li>
                ))}
            </ul>
        </div>
    );
};

export default SortMenu;