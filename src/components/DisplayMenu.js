import React from 'react';
import menu from '../mock/data';

const DisplayMenu = () => (
    <div>
        <h1>Menu</h1>
        <ul>
            {menu.map(item => (
                <li key={item.id}>
                    {item.name} - ${item.price}
                </li>
            ))}
        </ul>
    </div>
);

export default DisplayMenu;