import { CART_ACTION_TYPES } from "./cart.types";
import { createAction } from '../../utils/reducer/reducer.utils';

const addCartItem = (cartItems, productToAdd) => {
  console.log('addCartItem', cartItems)
  const existingCartItem = findItem(cartItems, productToAdd);

  if (existingCartItem) {
    return cartItems.map((cartItem) => cartItem.id === productToAdd.id ?
      { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem)
  }
  return [...cartItems, { ...productToAdd, quantity: 1 }]
}

const decreaseCartItem = (cartItems, productToDecrease) => {
  console.log('decreaseCartItem', cartItems)
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
  console.log('findItem', cartItems)
  return cartItems.find((product) => product.id === item.id);
}


export const setIsCartOpen = (boolean) => {
  return createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean);
}

export const addItemToCart = (cartItems, productToAdd) => {
  const newCartItems = addCartItem(cartItems, productToAdd);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
}

export const decreaseItemFromCart = (cartItems, productToDecrease) => {
  const newCartItems = decreaseCartItem(cartItems, productToDecrease);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
}

export const removeItemFromCart = (cartItems, productToRemove) => {
  const newCartItems = removeItem(cartItems, productToRemove);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
}

// const setIsCartOpen = (bool) => {
//   dispatch({ type: CART_ACTION_TYPES.SSET_IS_CART_OPEN, payload: bool })
// }