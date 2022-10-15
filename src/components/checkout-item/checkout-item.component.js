import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart, decreaseItemFromCart, removeItemFromCart } from '../../store/cart/cart.action';
import { selectCartItems } from '../../store/cart/cart.selector'

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
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const { imageUrl, name, quantity, price } = item;

  const addItemToCartHandler = () => dispatch(addItemToCart(cartItems, item));

  const decreaseItemFromCartHandler = () => dispatch(decreaseItemFromCart(cartItems, item));

  const removeItemFromCartHandler = () => dispatch(removeItemFromCart(cartItems, item));


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