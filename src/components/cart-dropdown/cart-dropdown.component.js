import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCartItems } from '../../store/cart/cart.selector';

import { CartDropdownContainer, CartItems, EmptyMessage } from './cart-dropdown.styles.js';
import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);
  const navigate = useNavigate();

  const goToCheckout = () => {
    navigate('/checkout')
  }

  return (
    <CartDropdownContainer>
      {cartItems && cartItems.length ? <CartItems>
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