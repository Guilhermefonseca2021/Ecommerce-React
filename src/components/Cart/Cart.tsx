import "./cart.css";
import products from "../../data/products.json";
import DeleteIcon from "@mui/icons-material/Delete";

export default function Cart() {
  return (
    <div className="cart">
      <h1>Products in your cart</h1>
      {products?.map((item) => (
        <div className="item" key={item.id}>
          <img src={item.imageUrl} alt="" />
          <div className="details">
            <h1>{item.price}</h1>
            <p>{item.description?.substring(0, 100)}</p>
            <div className="price">1 x ${item.price}</div>
          </div>
        </div>
      ))}
      <DeleteIcon className="delete" />
      <div className="total">
        <span>SUBTOTAL</span>
        <span>$123</span>
        <button>PROCEED TO CKECKOUT</button>
      </div>
    </div>
  );
}
