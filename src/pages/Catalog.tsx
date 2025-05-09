import { useEffect, useState } from "react";
import { Products } from "../components/Products";
import { getCategories } from "../logic/getCategories";
import "../styles/catalog.css";

export const Catalog = () => {
  const [categories, setCategories] = useState<string[]>([]);
  const [category, setCategory] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    const loadCategories = async () => {
      const resultCategories: string[] = await getCategories();
      setCategories(resultCategories);
    };

    loadCategories();
  }, []);

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const handleChangeSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(event.target.value);
  };

  return (
    <section className="catalog-container">
      <h2>Catalog</h2>
      <div className="filter">
        <input
          className="filter-field"
          type="text"
          id="productName"
          placeholder="Search..."
          onChange={handleChangeInput}
        />
        <select
          className="filter-field"
          name="categories"
          id="categories"
          onChange={handleChangeSelect}
        >
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
      <Products category={category} search={search} />
    </section>
  );
};
