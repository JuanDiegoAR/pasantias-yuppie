import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <section>
      <h1>Welcome to the FakeStore</h1>

      <h2>Feel free to explore our products</h2>

      <Link to="/catalog">
        <button>Products Catalog</button>
      </Link>

      <h2>Or contact us!</h2>

      <Link to="/contact">
        <button>Contact</button>
      </Link>
    </section>
  );
};
