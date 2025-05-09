import { Link } from "react-router-dom";
import "../styles/navBar.css";

export const NavBar = () => {
  return (
    <header>
      <nav className="navBar">
        <Link to="/">
          <span>FakeStore 🛍</span>
        </Link>
        <ul>
          <li>
            <Link to="/catalog">Catalog</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
