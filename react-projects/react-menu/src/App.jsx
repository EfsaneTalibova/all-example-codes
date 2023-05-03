import { useState } from "react";
import Title from "./Title";
import menu from "./data";
import Menu from "./Menu";
import Categories from "./Categories";
// const tempCategories = menu.map((item)=>item.category)
// const tempSet=new Set(tempCategories)
// const tempItem=[...tempSet]
// console.log(tempItem)

const allCategories = ["all", ...new Set(menu.map((item) => item.category))];

const App = () => {
  const [categories, setCategories] = useState(allCategories);
  const [menuItem, setMenuItems] = useState(menu);
  const filterItem=(category)=>{
    if(category==="all"){
      setMenuItems(menu)
      return;
    }
      const newItems=menu.filter((item)=>item.category===category)
      setMenuItems(newItems)
    
  
  }
  return (
    <main>
      <section className="menu">
        <Title text="our menu" />
        <Categories categories={categories} filterItem={filterItem}/>
        <Menu items={menuItem} />
      </section>
    </main>
  );
};
export default App;
