import React from "react";

const Dishes = ({ menuItems }) => {
  return (
    <section className="menu-items">
      {menuItems.map((menuItem) => {
        const { id, title, price, img, desc } = menuItem;
        return (
          <article key={id} className="menu-item">
            <img className="img" src={img} alt={title} />
            <div>
              <header className="header">
                <h4 className="title">{title}</h4>
                <h4 className="price">${price}</h4>
              </header>
              <p className="description">{desc}</p>
            </div>
          </article>
        );
      })}
    </section>
  );
};

export default Dishes;
