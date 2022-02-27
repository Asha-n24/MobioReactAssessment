import React, { useState, createContext } from "react";

export const cartContext = createContext({});
export const CartItemsContextProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);

  const onAdd = (product) => {
 
    const exist = cartItems?.find((x) => x.ProductId === product.ProductId);
   
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.ProductId === product.ProductId ? { ...exist, Count: exist.Count + 1 } : x
        )
      );
    } else {
   
      setCartItems([...cartItems, { ...product, Count: 1 }]);
    }
  };
  const onremove = (product) => {
    const exist = cartItems.find((x) => x.ProductId === product.ProductId);
   
    if (exist) {
      setCartItems(cartItems.filter((x) => x.ProductId !== product.ProductId));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.ProductId === product.ProductId ? { ...exist, Count: exist.Count - 1 } : x
        )
      );
    }
  };
  const onDecrease = (product) => {
    const exist = cartItems.find((x) => x.ProductId === product.ProductId);
    if (exist.Count === 1) {
      setCartItems(cartItems.filter((x) => x.ProductId !== product.ProductId));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.ProductId === product.ProductId ? { ...exist, Count: exist.Count - 1 } : x
        )
      );
    }
  };
  return (
    <cartContext.Provider value={{ cartItems, onAdd, onremove, onDecrease }}>
     
      {props.children}
    </cartContext.Provider>
  );
};
