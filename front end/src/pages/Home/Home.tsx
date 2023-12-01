import Categories from "../../components/Categories/Categories";
import Contact from "../../components/Contact/Contact";
import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts";
import Slider from "../../components/Slider/Slider";
import "./home.css";

export default function Home() {
  return (
    <div className="home">
      <Slider />
      <div className="featured-space">
        <FeaturedProducts featured />
      </div>
      <Categories />
      <Contact />
    </div>
  );
}
