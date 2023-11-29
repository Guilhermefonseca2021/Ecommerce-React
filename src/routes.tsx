import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import Product from "./pages/Product/Product";

export default function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}  />
        <Route path="/products/:id" element={<Products />}  />
        <Route path="/product/:id" element={<Product />}  />
      </Routes>
    </>
  );
}
