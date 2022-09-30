import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import './checkout.styles.scss';

const Checkout = () => {
  const { cartItems, addItemToCart, decreaseItemFromCart, removeItemFromCart } = useContext(CartContext);

  const addItem = (item) => {
    addItemToCart(item);
  }

  const removeItem = (item) => {
    decreaseItemFromCart(item)
  }

  return (
    <div>
      {cartItems.map((item) => {
        const { imageUrl, name, quantity } = item;

        return (
          <div>
            <img src={imageUrl} alt={name} />
            <h1>{name}</h1>
            <div>
              <span onClick={() => removeItem(item)}>{'<'}</span>
              <span>{quantity}</span>
              <span onClick={() => addItem(item)}>{'>'}</span>
            </div>
            <span onClick={() => removeItemFromCart(item)}>{'X'}</span>
          </div>
        )
      })}
    </div>
  )
}

export default Checkout;