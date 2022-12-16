import { AnyAction } from 'redux';

import { setCartItems, setIsCartOpen } from './cart.action';

import { CartItem } from './cart.types'

export type CartState = {
  isCartShown: boolean;
  cartItems: CartItem[];
  cartCount: number;
  totalPrice: number;
};

export const INITIAL_STATE: CartState = {
  isCartShown: true,
  cartItems: [],
  cartCount: 0,
  totalPrice: 0
};

export const cartReducer = (state = INITIAL_STATE, action: AnyAction): CartState => {

  if (setIsCartOpen.match(action)) {
    return {
      ...state,
      isCartShown: action.payload
    }
  }

  if (setCartItems.match(action)) {
    return {
      ...state,
      cartItems: action.payload
    }
  }

  return state;
}