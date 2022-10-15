import { Link } from "react-router-dom";
import ProductCard from '../../components/product-card/product-card.component';

import { CategoryPreviewContainer, Title, Preview } from './category-preview.js';

const CategoryPreview = ({ title, products }) => {
  return (
    <CategoryPreviewContainer>
      <h2>
        <Link className="nav-link" to={`/shop/${title.toLowerCase()}`}>
          <Title className='title'>{title.toUpperCase()}</Title>
        </Link>

      </h2>
      <Preview>
        {products && products.length > 0 && products.filter((_, idx) => idx < 4)
          .map((product) =>
            <ProductCard key={product.id} product={product} />
          )}
      </Preview>
    </CategoryPreviewContainer>
  )
}

export default CategoryPreview;