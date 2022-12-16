import { createSelector } from 'reselect';
import { CartItem } from './cart.types';
import { CartState } from './cart.reducer';

const selectCartReducer = (state: any): CartState => state.cart;

export const selectCartItems = createSelector(
  [selectCartReducer],
  (cart) => cart.cartItems
);

export const selectIsCartOpen = createSelector(
  [selectCartReducer],
  (cart) => cart.isCartShown
);

export const selectCartCount = createSelector(
  [selectCartItems],
  (cartItems: CartItem[]) => {
    let newCartCount = 0;
    cartItems.forEach(element => {
      newCartCount += element.quantity;
    });
    return newCartCount
  }
)

export const selectCartTotal = createSelector(
  [selectCartItems],
  (cartItems) => {
    let newTotalPrice = 0;
    cartItems.forEach(element => {
      newTotalPrice += element.quantity * element.price;
    });
    return newTotalPrice;
  }
)



