import { Link, useLocation } from "react-router-dom";
import "../styles/productDetails.css";
import { Rate } from "../components/Rate";

export const ProductDetails = () => {
  const location = useLocation();

  const [title, count, rate, image, price, description] = location.state;

  return (
    <div className="product-details-container">
      <Link to="/catalog" className="back">
        <button>⬅ Back</button>
      </Link>

      <article className="product-details-content">
        <div className="image-container">
          <img src={image} alt={title} />
        </div>
        <div className="product-text">
          <h1>{title}</h1>
          <span>
            {rate} <Rate rate={rate} /> ({count})
          </span>
          <span className="price">${price}</span>
          <p className="description">{description}</p>
        </div>
      </article>
    </div>
  );
};
