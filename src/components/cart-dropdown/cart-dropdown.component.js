import { useContext, } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../contexts/cart.context';
import { CartDropdownContainer, CartItems, EmptyMessage } from './cart-dropdown.styles.js';
import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext)
  const navigate = useNavigate();

  const goToCheckout = () => {
    navigate('/checkout')
  }

  return (
    <CartDropdownContainer>
      {cartItems.length ? <CartItems>
        {cartItems.map((item) => {
          return (
            <CartItem key={item.div} cartItem={item} />
          )
        })}

      </CartItems> : (
        <EmptyMessage>Your Card is empty</EmptyMessage>
      )}

      <Button onClick={goToCheckout}>Go to checkout</Button>

    </CartDropdownContainer>
  )
}

export default CartDropdown;