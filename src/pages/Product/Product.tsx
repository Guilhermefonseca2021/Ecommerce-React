import { useState } from "react";
import "./product.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
// import FavoriteIcon from "@mui/icons-material/Favorite";
import BalanceIcon from "@mui/icons-material/Balance";

export default function Product() {
  const [selectedImg, setSelectedImg] = useState(0);
  const [quantity, setQuantity] = useState(0);

  const images = [
    "https://images.unsplash.com/photo-1619021897566-a5f30301fdb8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1511125357779-27038c647d9d?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  return (
    <div className="product">
      <div className="left">
        <div className="images">
          <img src={images[0]} alt="" onClick={() => setSelectedImg(0)} />
          <img src={images[1]} alt="" onClick={() => setSelectedImg(1)} />
        </div>
        <div className="mainImg">
          <img src={images[selectedImg]} alt="" />
        </div>
      </div>
      <div className="right">
        <h1>title</h1>
        <span className="price">$199</span>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At voluptas
          fugit officiis voluptatum eum beatae deserunt sunt optio reprehenderit
          quae possimus rem, quod quisquam. Optio sequi fugiat quia dolore
          molestiae?
        </p>
        <div className="quantity">
          <button
            onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}
          >
            -
          </button>
          {quantity}
          <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
          <button className="add">
            <ShoppingCartIcon /> ADD TO CART
          </button>
        </div>
        <div className="links">
            <div className="item">
              <FavoriteBorderIcon /> ADD TO WISHLIST
            </div>
            <div className="item">
              <BalanceIcon /> ADD TO COMPARE
            </div>
          </div>
        <div className="info">
          <span>Vendor: Polo</span>
          <span>Product Type: T-Shirt</span>
          <span>Tag: T-Shirt, Women, Top</span>
        </div>
        <hr />
      </div>
    </div>
  );
}
