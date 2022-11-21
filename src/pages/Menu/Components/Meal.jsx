import React from "react";

export const Meal = ({ name, description, price, category, img, id, edit }) => {
  //decode img

  return (
    <div className="meal" onClick={() => edit(id)}>
      <img src={img} alt={img} />
      <div className="info">
        <input type="text" className="meal-input" disabled value={name} />
        <input
          type="text"
          className="meal-input"
          disabled
          value={description}
        />
        <input
          type="text"
          className="meal-input price"
          disabled
          value={price}
        />
        <input
          type="text"
          className="meal-input category"
          disabled
          value={category}
        />
        {/* <input type="text" disabled value={name} /> */}
        {/* <h1>{name}</h1> */}
        {/* <h3>{description}</h3> */}
        {/* <h3>{price}</h3> */}
        {/* <h3>{category}</h3> */}
      </div>
    </div>
  );
};
