import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

import {
  CheckoutItemContainer,
  ImageContainer,
  Arrow,
  BaseSpan,
  Quantity,
  RemoveButton,
  Value
} from './checkout-item.styles.js';

const CheckoutItem = ({ item }) => {
  const { addItemToCart, decreaseItemFromCart, removeItemFromCart } = useContext(CartContext);

  const { imageUrl, name, quantity, price } = item;

  const addItemToCartHandler = () => addItemToCart(item);

  const decreaseItemFromCartHandler = () => decreaseItemFromCart(item);

  const removeItemFromCartHandler = () => removeItemFromCart(item);


  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={name} />
      </ImageContainer>
      <BaseSpan>{name}</BaseSpan>
      <Quantity>
        <Arrow onClick={decreaseItemFromCartHandler}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={addItemToCartHandler}> &#10095; </Arrow>
      </Quantity>
      <BaseSpan className='price'>{price}</BaseSpan>
      <RemoveButton onClick={removeItemFromCartHandler}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  )
}

export default CheckoutItem;