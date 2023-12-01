import { Link } from "react-router-dom";
import "./card.css";

interface ProductProps {
  item: {
    id: number;
    imageUrl: string;
    imageUrl2: string;
    isNew?: boolean;
    title: string;
    oldPrice: number;
    price: number;
  };
}

export default function Card({ item }: ProductProps) {
  return (
    <Link to={`/product/${item.id}`} className="card-link">
      <div className="card">
        <div className="image">
          {item.isNew && <span>New season</span>}
          <img src={item.imageUrl} alt="" className="mainImg" />
          <img src={item.imageUrl2} alt="" className="secondImg" />
        </div>
        <h2>{item.title}</h2>
        <div className="prices">
          <h3>${item.oldPrice}</h3>
          <h3>${item.price}</h3>
        </div>
      </div>
    </Link>
  );
}
