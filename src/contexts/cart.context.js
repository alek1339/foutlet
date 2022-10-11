import { createContext, useReducer } from "react";

const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = findItem(cartItems, productToAdd);

  if (existingCartItem) {
    return cartItems.map((cartItem) => cartItem.id === productToAdd.id ?
      { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem)
  }
  return [...cartItems, { ...productToAdd, quantity: 1 }]
}

const decreaseCartItem = (cartItems, productToDecrease) => {
  const existingCartItem = findItem(cartItems, productToDecrease);

  if (existingCartItem.quantity > 1) {
    return cartItems.map((cartItem) => cartItem.id === productToDecrease.id ?
      { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem)
  }

  return removeItem(cartItems, productToDecrease);
}

const removeItem = (cartItems, productToRemove) => {
  return cartItems.filter((item) => productToRemove.id !== item.id)
}

const findItem = (cartItems, item) => {
  return cartItems.find((product) => product.id === item.id);
}

// as the actual value we want to access
export const CartContext = createContext({
  isCartShown: false,
  setIsCartShown: () => { },
  cartItems: [],
  addItemToCart: () => { },
  totalPrice: 0
});

const INITIAL_STATE = {
  isCartShown: true,
  cartItems: [],
  cartCount: 0,
  totalPrice: 0
};

const CART_ACTION_TYPES = {
  SET_CART_ITEMS: 'SET_CART_ITEMS',
  SSET_IS_CART_OPEN: 'SET_IS_CART_OPEN'
};

const cartReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTION_TYPES.SET_CART_ITEMS:
      return {
        ...state,
        ...payload
      }
    case CART_ACTION_TYPES.SSET_IS_CART_OPEN:
      return {
        ...state,
        isCartOpen: payload
      }
    default:
      throw new Error(`Unhandled type ${type} in cart reducer`)
  }
}

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE);
  const { cartItems, isCartOpen, totalPrice } = state;



  const updateCartItemsReducer = (newCartItems) => {
    let newCartCount = 0;
    newCartItems.forEach(element => {
      newCartCount += element.quantity;
    });

    let newTotalPrice = 0;

    newCartItems.forEach(element => {
      newTotalPrice += element.quantity * element.price;
    });

    dispatch({
      type: CART_ACTION_TYPES.SET_CART_ITEMS,
      payload:
        { cartItems: newCartItems, totalPrice: newTotalPrice, cartCount: newCartCount }
    })
  }

  const addItemToCart = (productToAdd) => {
    const newCartItems = addCartItem(cartItems, productToAdd);
    updateCartItemsReducer(newCartItems);
  }

  const decreaseItemFromCart = (productToDecrease) => {
    const newCartItems = decreaseCartItem(cartItems, productToDecrease);
    updateCartItemsReducer(newCartItems);
  }

  const removeItemFromCart = (productToRemove) => {
    const newCartItems = removeItem(cartItems, productToRemove);
    updateCartItemsReducer(newCartItems);
  }

  const setIsCartOpen = (bool) => {
    dispatch({ type: CART_ACTION_TYPES.SSET_IS_CART_OPEN, payload: bool })
  }

  const value = {
    isCartOpen,
    setIsCartOpen: () => { },
    addItemToCart,
    cartItems,
    decreaseItemFromCart,
    removeItemFromCart,
    totalPrice
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}