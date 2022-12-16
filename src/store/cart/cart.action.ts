import { CART_ACTION_TYPES, CartItem } from "./cart.types";
import { CategoryItem } from "../categories/category.types";
import { ActionWithPayload, createAction, withMatcher } from '../../utils/reducer/reducer.utils';

const addCartItem = (cartItems: CartItem[], productToAdd: CartItem): CartItem[] => {
  const existingCartItem = findItem(cartItems, productToAdd);

  if (existingCartItem) {
    return cartItems.map((cartItem) => cartItem.id === productToAdd.id ?
      { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem)
  }
  return [...cartItems, { ...productToAdd, quantity: 1 }]
}

const decreaseCartItem = (cartItems: CartItem[], productToDecrease: CartItem) => {
  console.log('decreaseCartItem', cartItems)
  const existingCartItem = findItem(cartItems, productToDecrease);

  if (existingCartItem && existingCartItem.quantity > 1) {
    return cartItems.map((cartItem) => cartItem.id === productToDecrease.id ?
      { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem)
  }

  return removeItem(cartItems, productToDecrease);
}

const removeItem = (cartItems: CartItem[], productToRemove: CartItem): CartItem[] => {
  return cartItems.filter((item) => productToRemove.id !== item.id)
}

const findItem = (cartItems: CartItem[], item: CartItem) => {
  console.log('findItem', cartItems)
  return cartItems.find((product) => product.id === item.id);
}


// export const setIsCartOpen = (boolean: boolean) => {
//   return createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean);
// }

export const addItemToCart = (cartItems: CartItem[], productToAdd: CartItem) => {
  const newCartItems = addCartItem(cartItems, productToAdd);
  return setCartItems(newCartItems);
}

export const decreaseItemFromCart = (cartItems: CartItem[], productToDecrease: CartItem) => {
  const newCartItems = decreaseCartItem(cartItems, productToDecrease);
  return setCartItems(newCartItems);
}

export const removeItemFromCart = (cartItems: CartItem[], productToRemove: CartItem) => {
  const newCartItems = removeItem(cartItems, productToRemove);
  return setCartItems(newCartItems);
}

export type SetIsCartOpen = ActionWithPayload<CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean>;

export type SetCartItems = ActionWithPayload<CART_ACTION_TYPES.SET_CART_ITEMS, CartItem[]>;

export const setIsCartOpen = withMatcher((bool: boolean): SetIsCartOpen =>
  createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, bool))

export const setCartItems = withMatcher((cartItems: CartItem[]): SetCartItems =>
  createAction(CART_ACTION_TYPES.SET_CART_ITEMS, cartItems))
