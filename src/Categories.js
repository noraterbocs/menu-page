import React from "react";

const Categories = ({ categories, filterItems }) => {
  return (
    <section className="btn-wrap">
      {categories.map((category, index) => {
        return (
          <button
            className="btn"
            key={index}
            onClick={() => filterItems(category)}
          >
            {category}
          </button>
        );
      })}
    </section>
  );
};

export default Categories;
