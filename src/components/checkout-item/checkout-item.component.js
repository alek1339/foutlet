import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

import './checkout-item.styles.scss';

const CheckoutItem = ({ item }) => {
  const { addItemToCart, decreaseItemFromCart, removeItemFromCart } = useContext(CartContext);

  const { imageUrl, name, quantity, price } = item;

  const addItemToCartHandler = () => addItemToCart(item);

  const decreaseItemFromCartHandler = () => decreaseItemFromCart(item);

  const removeItemFromCartHandler = () => removeItemFromCart(item);


  return (
    <div className='checkout-item-container'>
      <div className='image-container'>
        <img src={imageUrl} alt={name} />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>
        <div className='arrow' onClick={decreaseItemFromCartHandler}>&#10094;</div>
        {quantity}
        <div className='arrow' onClick={addItemToCartHandler}> &#10095; </div>
      </span>
      <span className='price'>{price}</span>
      <div className='remove-button' onClick={removeItemFromCartHandler}>&#10005;</div>
    </div>
  )
}

export default CheckoutItem;