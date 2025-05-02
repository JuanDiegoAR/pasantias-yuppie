import { useState } from "react";
import { Products } from "./Products";
import { getCategories } from "../utils/getCategories";
import "../styles/catalog.css";

const categories: string[] = await getCategories();

export const Catalog = () => {
  const [category, setCategory] = useState("");

  const handleChangeSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(event.target.value);
  };

  return (
    <section className="catalog-container">
      <h2 className="title">Catálogo</h2>
      <div className="filter">
        <input type="text" id="productName" placeholder="Search..." />
        <select name="categories" id="categories" onChange={handleChangeSelect}>
          <option value="all">All</option>
          {categories.map((category: string) => {
            return (
              <option key={category} value={category}>
                {category}
              </option>
            );
          })}
        </select>
      </div>
      <Products category={category} />
    </section>
  );
};
