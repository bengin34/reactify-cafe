import React, { useState, useMemo } from "react";
import "../App.css";

const MenuSearch = ({ menu }) => {
  const [search, setSearch] = useState("");

  const filteredMenu = useMemo(() => {
    return menu.filter((item) =>
      item.name.toLowerCase().includes(search.trim().toLowerCase())
    );
  }, [menu, search]);

  return (
    <div className="search">
      <h2>Search Menu</h2>
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div>
        <ul>
          {search.trim() && filteredMenu.length > 0 ? (
            filteredMenu.map((item) => (
              <li className="searchli" key={item.id}>
            💳{item.name} - ${item.price}
              </li>
            ))
          ) : search.trim() ? (
            <li className="searchli" >No items found</li> // Eğer arama sonuçsuz kalırsa
          ) : null}
        </ul>
      </div>
    </div>
  );
};

export default MenuSearch;
