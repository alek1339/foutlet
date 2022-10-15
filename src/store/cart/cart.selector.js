import { createSelector } from 'reselect';

const selectCartReducer = state => state.cart;

export const selectCartItems = createSelector(
  [selectCartReducer],
  (cart) => cart.cartItems
);

export const selectIsCartOpen = createSelector(
  [selectCartReducer],
  (cart) => cart.isCartOpen
);

export const selectCartCount = createSelector(
  [selectCartItems],
  (cartItems) => {
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



