import { Footer, Img, Name, Price, ProductCardContainer } from './product-card.styles.js';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';
import { addItemToCart } from '../../store/cart/cart.action';
import { useDispatch, useSelector } from 'react-redux';

const ProductCard = ({ product }) => {
  const { cartItems } = useSelector(state => state.cart);
  const { name, price, imageUrl } = product;
  const dispatch = useDispatch();

  const addProductToCart = () => dispatch(addItemToCart(cartItems, product));

  return (
    <ProductCardContainer>
      <Img src={imageUrl} alt={`${name}`} />
      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Footer>
      <Button onClick={addProductToCart} buttonType={BUTTON_TYPE_CLASSES.inverted}>Add to card</Button>
    </ProductCardContainer>
  )
}

export default ProductCard;