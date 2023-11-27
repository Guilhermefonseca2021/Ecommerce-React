import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts";
import Slider from "../../components/Slider/Slider";
import "./home.css";

export default function Home() {
  return (
    <div className="home">
      <Slider />
      <div className="featured-space">
        <FeaturedProducts featured />
        <FeaturedProducts trending />
      </div>
    </div>
  );
}
