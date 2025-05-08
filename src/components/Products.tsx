import { useEffect, useState } from "react";
import { Product } from "../interfaces";
import { getAllProducts } from "../logic/getAllProducts";
import { getCategoryProducts } from "../logic/getCategoryProducts";
import "../styles/products.css";
import { Rate } from "./Rate";
import { Link } from "react-router-dom";

//Lamada a la utilidad que nos devuelve los productos
const allProducts: Product[] = await getAllProducts();

export const Products = ({
  category,
  search,
}: {
  category: string;
  search: string;
}) => {
  const [products, setProducts] = useState(allProducts);
  const [searchedProducts, setSearchedProducts] = useState(products);

  //Actualizar la lista de productos según la categoría
  useEffect(() => {
    const getProductsInCategory = async (category: string) => {
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
      getProductsInCategory(category);
    }
  }, [category]);

  //Actualizar los productos según el la search bar, tras haber seleccionado(o no), una categoría
  useEffect(() => {
    if (!search) {
      setSearchedProducts(products);
    } else {
      setSearchedProducts(
        products.filter((product) =>
          product.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())
        )
      );
    }
  }, [search, products]);

  return (
    <div className="product-section">
      {searchedProducts.map((p: Product) => {
        return (
          <Link
            key={p.id}
            to={`/catalog/${p.id}`}
            state={[
              p.title,
              p.rating.count,
              p.rating.rate,
              p.image,
              p.price,
              p.description,
            ]}
          >
            <div className="product-card">
              <p className="product-title">{p.title}</p>
              <img className="product-img" src={p.image} alt={p.title} />
              <p>${p.price}</p>
              <div>
                <Rate rate={p.rating.rate} />
                <p>
                  {p.rating.rate} ({p.rating.count})
                </p>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};
