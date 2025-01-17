import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import MenuSearch from "./components/SearchBar.jsx";
import menu from "./mock/data";

const App = () => {
    return (
        <div>
            <div className="container-app">
                <Navbar />
                <MenuSearch menu={menu} />
            </div>
        </div>
    );
};

export default App;
