import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { useContext, useEffect, useState } from 'react';
import { CartContext } from '../../contexts/cart.context';

import './cart-icon.styles.scss';

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
    <div className='cart-icon-container' onClick={toggleIsCartOpen}>
      <ShoppingIcon className='shoping-icon' />
      <span className='item-count'>{quantity}</span>
    </div>
  )
}

export default CartIcon;