import { FaLocationArrow, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import "./Footer.scss";
import Payment from "../../assets/payments.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">

        <div className="col">
          <div className="title">About</div>
          <div className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
            obcaecati in laboriosam quibusdam quos quidem ipsam explicabo non
            labore nulla, sequi beatae. Magnam distinctio dolorem beatae vel ut
            dolore? Enim.
          </div>
        </div>
        
        <div className="col">
          <div className="title">Contact</div>

          <div className="c-item">
            <FaLocationArrow />
            <div className="text">
              Hari om Colony no.1, Walhekarwadi, Akurdi, Chinchwad, pune-411033
            </div>
          </div>

          <div className="c-item">
            <FaPhoneAlt />
            <div className="text">Phone: 1234 567 890</div>
          </div>

          <div className="c-item">
            <FaEnvelope />
            <div className="text">Email: abc@email.com</div>
          </div>
        </div>

        <div className="col">
          <div className="title">Categories</div>
          <span className="text">Veg pizza</span>
          <span className="text">Non-veg pizza</span>
          {/* <span className="text">Bluetooth Speakers</span>
          <span className="text">Wireless Earbuds</span>
          <span className="text">Mobile Phones</span> */}
        </div>

        <div className="col">
          <div className="title">Pages</div>
          <span className="text">Home</span>
          <span className="text">About</span>
          <span className="text">Privacy Policy</span>
          <span className="text">Terms and Conditions</span>
          <span className="text">Contact Us</span>
        </div>


      </div>
      <div className="bottom-bar">
        <div className="bottom-bar-content">
          <div className="text">
            SHOPPING CART 2023 CREATED BY VINAY SOLANKI.
          </div>
          <img src={Payment} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
