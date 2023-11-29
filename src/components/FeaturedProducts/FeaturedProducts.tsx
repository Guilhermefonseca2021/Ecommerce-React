import "./featuredProducts.css";
import products from '../../data/products.json'
import Card from "../Card/Card";

interface Props {
  featured?: boolean;
  trending?: boolean;
}

export default function FeaturedProducts({ featured }: Props) {

  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{featured} Products</h1>
        <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
            Inventore repellat est quod delectus 
            voluptatem iure quia ipsum eaque eveniet illo!
        </p>
      </div>
      <div className="bottom">
        {products.map(item => (
            <Card item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}
