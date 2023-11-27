import './footer.css';
import StripeImg from '../../assets/payment.png'

export default function Footer() {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Acessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Exercitationem inventore earum excepturi laboriosam quia cum harum
            quod maxime iure tenetur in, aspernatur possimus ullam beatae eos,
            placeat doloremque velit! Recusandae.
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="right">
          <img className='stripeImg' src={StripeImg} alt="" />
        </div>
      </div>
    </div>
  );
}
