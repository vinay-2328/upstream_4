import "./Banner.scss";
import Bannerimg from "../../../assets/banner-img.png";
import Spline from "@splinetool/react-spline";
const Banner = () => {
  return (
    <div className="hero-banner">
      <div className="content">
        <div className="text-content">
          <h1>pizza's</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            fugiat similique qui, adipisci quidem maiores natus corrupti, eos
            nulla repellat vitae, deleniti doloremque placeat voluptatem porro
            inventore laudantium quis magni?
          </p>
          <div className="ctas">
            <div className="banner-cta">Read More</div>
            <div className="banner-cta v2">Shop Now</div>
          </div>
        </div>

        <img className="banner-img" src={Bannerimg} alt="" />
      </div>
    </div>
  );
};
export default Banner;
