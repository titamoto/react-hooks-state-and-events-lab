import React, { useState } from "react";

function Item({ name, category }) {
  const [addedToCart, setAddedToCart] = useState(false);
  const inCart = addedToCart ? "in-cart" : "";
  const buttonText = addedToCart ? "Remove From Cart" : "Add to Cart";
  const buttonColor = addedToCart ? "remove" : "add";

  function handleClick() {
    setAddedToCart((addedToCart) => !addedToCart);
  }

  return (
    <li className={inCart}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={buttonColor} onClick={handleClick}>
        {buttonText}
      </button>
    </li>
  );
}

export default Item;
