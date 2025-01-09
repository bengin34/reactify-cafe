import React, { useEffect, useState } from 'react';

const FetchMenu = () => {
    const [menuItems, setMenuItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/posts');
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                setMenuItems(data.slice(0, 10)); 
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
            <h1>API's Data</h1>
            <ul>
                {menuItems.map((item) => (
                    <li key={item.id}>
                        <strong>{item.title}</strong>: {item.body}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FetchMenu;