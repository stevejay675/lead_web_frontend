import Image from "next/image";
import "./banner.css";

function Banner() {
  return (
    <section className="banner-section">
      <img src="/images/banner2.jpg" alt="Restaurant Banner" />
      <div className="banner-text">
        <h2>Discover restaurants and more near you.</h2>
        <button>Order Now</button>
      </div>

      <div className="blur"></div>
    </section>
  );
}

export default Banner;
