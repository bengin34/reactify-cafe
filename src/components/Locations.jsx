import React, { useState } from 'react';


const Locations = ({locations}) => {
    const [category, setCategory] = useState('All');

    const filteredMenu = category === 'All' ? locations : locations.filter(item => item.category === category);

    return (
        <div>
            <select className='select' onChange={(e) => setCategory(e.target.value)}>
                <option value="İstanbul-Anadolu">İstanbul-Anadolu</option>
                <option value="İstanbul-Avrupa">İstanbul-Avrupa</option>
            </select>
            <ul>
                {filteredMenu.map(item => (
                    <li key={item.id}>
                        {item.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Locations;