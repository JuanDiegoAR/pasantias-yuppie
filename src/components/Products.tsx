import { useEffect, useState } from "react";
import { Product } from "../interfaces";
import { getProducts } from "../utils/getProducts";
import { getCategoryProducts } from "../utils/getCategoryProducts";
import "../styles/products.css";
import { Rate } from "./Rate";

const allProducts: Product[] = await getProducts();

export const Products = ({ category }: { category: string }) => {
  const [products, setProducts] = useState(allProducts);

  useEffect(() => {
    const setNewProducts = async (category: string) => {
      try {
        console.log(category);
        const newProducts: Product[] = await getCategoryProducts(category);
        console.log(newProducts);

        setProducts(newProducts);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };
    if (category) {
      setNewProducts(category);
    }
  }, [category]);

  return (
    <div className="product-section">
      {products.map((p: Product) => {
        return (
          <div className="product-card" key={p.title}>
            <p className="product-title">{p.title}</p>
            <img className="product-img" src={p.image} alt={p.title} />
            <p>${p.price}</p>
            <div>
              <Rate rate={p.rating.rate} count={p.rating.count} />
            </div>
          </div>
        );
      })}
    </div>
  );
};
