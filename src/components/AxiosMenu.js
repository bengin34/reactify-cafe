import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AxiosMenu = () => {
    const [menuItems, setMenuItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {

                const response = await axios.get('https://jsonplaceholder.typicode.com/posts');

                const formattedMenu = response.data.slice(0, 10).map((item, index) => ({
                    id: item.id,
                    name: `Dish ${index + 1}: ${item.title}`,
                    description: item.body,
                    price: (Math.random() * 20 + 5).toFixed(2),
                }));
                setMenuItems(formattedMenu);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <div>
            <h1>Fetch Data with Axios</h1>
            <ul>
                {menuItems.map((item) => (
                    <li key={item.id}>
                        <h3>{item.name}</h3>
                        <p>{item.description}</p>
                        <strong>Price: ${item.price}</strong>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AxiosMenu;