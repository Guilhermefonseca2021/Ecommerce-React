import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";

export default function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}  />
        <Route path="/products/:id" element={<Products />}  />
      </Routes>
    </>
  );
}
