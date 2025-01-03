import React, { useState } from 'react';
import menu from '../mock/data';

const AddToCart = () => {
    const [cart, setCart] = useState([]);

    const addToCart = (item) => {
        setCart([...cart, item]);
    };

    return (
        <div>
            <h1>Menu</h1>
            <ul>
                {menu.map(item => (
                    <li key={item.id}>
                        {item.name} - ${item.price} 
                        <button onClick={() => addToCart(item)}>Add to Cart</button>
                    </li>
                ))}
            </ul>
            <h2>Cart</h2>
            <ul>
                {cart.map((item, index) => (
                    <li key={index}>{item.name} - ${item.price}</li>
                ))}
            </ul>
        </div>
    );
};

export default AddToCart;