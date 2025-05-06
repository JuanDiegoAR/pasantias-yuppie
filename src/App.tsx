import "./App.css";
import { Catalog } from "./components/Catalog";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProductDetails } from "./components/ProductDetails";
import { NavBar } from "./components/navBar";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/catalog/:productId" element={<ProductDetails />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
