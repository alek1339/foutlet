import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setIsCartOpen } from '../../store/cart/cart.action';

import { selectCartItems, selectIsCartOpen } from '../../store/cart/cart.selector';

import { CartIconContainer, ItemCount, ShoppingIcon } from './cart-icon.styles.js';

const CartIcon = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const isCartOpen = useSelector(selectIsCartOpen);
  const [quantity, setQuantity] = useState(0);

  const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen))

  useEffect(() => {
    let carItemsQuantity = 0;

    cartItems && cartItems.forEach(element => {
      carItemsQuantity += element.quantity;
    });

    setQuantity(carItemsQuantity);

  }, [cartItems])

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon className='shoping-icon' />
      <ItemCount className='item-count'>{quantity}</ItemCount>
    </CartIconContainer>
  )
}

export default CartIcon;