import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { NavLink } from "react-router-dom";
import langImg from "../../assets/en.png";
import "./navbar.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="left">
        <div className="item">
          <img src={langImg} alt="" />
          <KeyboardArrowDownIcon />
        </div>
        <div className="item">
          <span>USD</span>
          <KeyboardArrowDownIcon />
        </div>
        <div className="item link-item">
          <NavLink to="/products/1">Women</NavLink>
        </div>
        <div className="item link-item">
          <NavLink to="/products/2">Men</NavLink>
        </div>
        <div className="item link-item">
          <NavLink to="/products/3">Children</NavLink>
        </div>
      </div>
      
      <div className="right">
        <div className="item">
          <NavLink to="/">Home</NavLink>
        </div>
        <div className="item">
          <NavLink to="/about">About</NavLink>
        </div>
        <div className="item">
          <NavLink to="/contact">Contact</NavLink>
        </div>
        <div className="item">
          <NavLink to="/store">Stores</NavLink>
        </div>
        <div className="icons link-item">
          <SearchIcon className="icon-item" />
          <PersonOutlineIcon className="icon-item" />
          <FavoriteBorderIcon className="icon-item" />
          <div className="cartIcon">
            <ShoppingCartIcon className="icon-item" />
            <span>0</span>
          </div>
        </div>
      </div>
    </div>
  );
}
