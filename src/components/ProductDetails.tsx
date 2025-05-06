import { Link, useParams } from "react-router-dom";
import { getProduct } from "../utils/getProduct";
import { useEffect, useState } from "react";
import { Product } from "../interfaces";
import "../styles/productDetails.css";
import { Rate } from "./Rate";

const productBody: Product = {
  id: "",
  title: "",
  price: 0,
  description: "",
  category: "",
  image: "",
  rating: {
    rate: 0,
    count: 0,
  },
};

export const ProductDetails = () => {
  const [product, setProduct] = useState<Product>(productBody);
  const { productId } = useParams();

  useEffect(() => {
    const getProductInParams = async () => {
      if (productId) {
        const response = await getProduct(productId);
        setProduct(response);
      }
    };

    getProductInParams();
  }, [productId]);

  return (
    <div className="product-details-container">
      <Link to="/catalog" className="back">
        <button>⬅ Back</button>
      </Link>

      <article className="product-details-content">
        <img src={product?.image} alt={product?.title} />
        <div className="productText">
          <h1>{product?.title}</h1>
          <span>
            {product.rating.rate} <Rate rate={product.rating.rate} /> (
            {product.rating.count})
          </span>
          <span className="price">${product?.price}</span>
          <p className="description">{product?.description}</p>
        </div>
      </article>
    </div>
  );
};
