import { createContext, useState } from "react";

const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = findExistingItem(cartItems, productToAdd);

  if (existingCartItem) {
    return cartItems.map((cartItem) => cartItem.id === productToAdd.id ?
      { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem)
  }
  return [...cartItems, { ...productToAdd, quantity: 1 }]
}

const decreaseCartItem = (cartItems, productToDecrease) => {
  const existingCartItem = findExistingItem(cartItems, productToDecrease);

  if (existingCartItem.quantity > 1) {
    return cartItems.map((cartItem) => cartItem.id === productToDecrease.id ?
      { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem)
  }

  return removeItem(cartItems, productToDecrease);
}

const removeItem = (cartItems, productToRemove) => {
  return cartItems.filter((item) => productToRemove.id !== item.id)
}

const findExistingItem = (cartItems, item) => {
  return cartItems.find((product) => product.id === item.id);
}

// as the actual value we want to access
export const CartContext = createContext({
  isCartShown: false,
  setIsCartShown: () => { },
  cartItems: [],
  addItemToCart: () => { }
})

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd))
  }

  const decreaseItemFromCart = (productToDecrease) => {
    setCartItems(decreaseCartItem(cartItems, productToDecrease))
  }

  const removeItemFromCart = (productToRemove) => {
    setCartItems(removeItem(cartItems, productToRemove))
  }

  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    cartItems,
    decreaseItemFromCart,
    removeItemFromCart
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}