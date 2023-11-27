import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import Router from "../routes";
import './layout.css'

export default function Layout() {
  return (
    <div className="layout">
      <Navbar />
        <Router />
      <Footer />
    </div>
  );
}
