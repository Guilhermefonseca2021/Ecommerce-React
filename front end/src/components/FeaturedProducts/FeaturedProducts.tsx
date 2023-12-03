import "./featuredProducts.css";
import products from "../../data/products.json";
import strapiApi from '../../config/strapiApi'
import Card from "../Card/Card";
import { useEffect } from "react";
import axios from "axios";

interface Props {
  featured?: boolean;
  trending?: boolean;
}

export default function FeaturedProducts({ featured }: Props) {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await axios.get(
          `http://localhost:1337/api/products`,
          {
            headers: {
              Authorization: "bearer " + process.env.REACT_STRAPI_API_TOKEN
            },
          }
        );
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{featured} Products</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore
          repellat est quod delectus voluptatem iure quia ipsum eaque eveniet
          illo!
        </p>
      </div>
      <div className="bottom">
        {products.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}
