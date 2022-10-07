import { useContext, useEffect, useState } from 'react';
import { CartContext } from '../../contexts/cart.context';

import { CartIconContainer, ItemCount, ShoppingIcon } from './cart-icon.styles.js';

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartItems } = useContext(CartContext);
  const [quantity, setQuantity] = useState(0);

  const toggleIsCartOpen = () => {
    setIsCartOpen(!isCartOpen);
  }

  useEffect(() => {
    let carItemsQuantity = 0;

    cartItems.forEach(element => {
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