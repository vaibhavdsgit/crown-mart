import ProductCard from "../product-card/ProductCard";

import './CategoryPreview.scss';

const CategoryPreview = ({ title, products }) => {
  return(
    <div className="category-preview-container">
      <h2>
        <span>{title.toUpperCase()}</span>
      </h2>
      <div className="preview">
        {
          products
            .filter((_, index) => index < 4) // _ ignores the first returned element 
            .map((product) => <ProductCard key={product.id} product={product} />)
        }
      </div>
    </div>
  )
}
export default CategoryPreview;