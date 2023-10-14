import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./Data";
const allCategories = ['all',...new Set(items.map((item)=>item.category))]


function App() {
  const [menuItems, setMenu] = useState(items);
  const [categories, setcategories] = useState(allCategories);
  const filterItems = (category)=>{
    if(category ==='all'){
      setMenu(items);
      return;
    }
     const newitems = items.filter((item)=>item.category === category)
     setMenu(newitems)
  }
  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories filterItems = {filterItems} categories={categories} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;
