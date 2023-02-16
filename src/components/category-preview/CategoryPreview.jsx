import { Link } from "react-router-dom";
import ProductCard from "../product-card/ProductCard";

import './categoryPreview.scss';

const CategoryPreview = ({ title, products }) => {
  return(
    <div className="category-preview-container">
      <h2>
        <Link className="title" to={title}>{title.toUpperCase()}</Link>
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