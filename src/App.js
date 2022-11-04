import "./App.css";
import React, { useState } from "react";
import items from "./data";
import Categories from "./Categories";
import Menu from "./Menu";
const allCategories = ["all", ...new Set(items.map((item) => item.category))];
function App() {
  // eslint-disable-next-line no-unused-vars
  const [categories, setCategories] = useState(allCategories);
  const [menuItems, setMenuItems] = useState(items);
  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };
  return (
    <main className="main">
      <div classname="main-title">
        <h1>Our Menu</h1>
        <div className="underline"></div>
      </div>
      <Categories filterItems={filterItems} categories={categories} />
      <Menu menuItems={menuItems} />
    </main>
  );
}

export default App;
