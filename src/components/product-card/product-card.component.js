import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

import { Footer, Img, Name, Price, ProductCardContainer } from './product-card.styles.js';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';

const ProductCard = ({ product }) => {
  const { addItemToCart } = useContext(CartContext)
  const { name, price, imageUrl } = product;

  const addProductToCart = () => addItemToCart(product)

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