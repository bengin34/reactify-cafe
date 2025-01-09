import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BuggySortableMenu = () => {
    const [menuItems, setMenuItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [sortKey, setSortKey] = useState('name');

    // API'den veriyi çek
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
                const formattedMenu = response.data.slice(0, 10).map((item, index) => ({
                    id: item.id,
                    name: `Dish ${index + 1}: ${item.title}`,
                    description: item.body,
                    price: parseFloat((Math.random() * 20 + 5).toFixed(2)),
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

    // Hatalı sıralama fonksiyonu
    const sortItems = (key) => {
        const sortedItems = menuItems.sort((a, b) => { // HATA: Array.sort doğrudan state'i değiştirir
            if (key === 'price') {
                return a.price - b.price;
            } else if (key === 'name') {
                return a.name.localeCompare(b.name);
            }
            return 0;
        });
        setMenuItems(sortedItems); // HATA: Orijinal veriyi kaybediyoruz
    };

    // Kullanıcı sıralama seçeneğini değiştirdiğinde
    const handleSortChange = (e) => {
        const selectedKey = e.target.value;
        setSortKey(selectedKey);
        sortItems(selectedKey); // HATA: Yanlış kullanım
    };

    if (loading) {
        return <p>Loading...</p>; // HATA: Bu durum bazen hiç gitmeyecek
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <div>
            <h1>Buggy Restoran Menüsü</h1>
            <div>
                <label htmlFor="sort">Sırala:</label>
                <select id="sort" value={sortKey} onChange={handleSortChange}>
                    <option value="name">İsme Göre</option>
                    <option value="price">Fiyata Göre</option>
                </select>
            </div>
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

export default BuggySortableMenu;