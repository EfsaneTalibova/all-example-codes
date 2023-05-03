import React from "react";

const Categories = ({ categories ,filterItem}) => {
  return (
    <div className="btn-container">
      {categories.map((category) => {
        return (
          <button key={category} type="button" className="btn" onClick={()=>filterItem(category)}>
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
