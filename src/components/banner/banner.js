import Image from "next/image";
import "./banner.css";

function Banner() {
  return (
    <section className="banner-section">
      <img src="/images/ndole-3.jpg" alt="Restaurant Banner" />
      <div className="banner-text">
        <h2>Explore new flavors and rediscover your favorites with LoopEats</h2>
        <button>Order Now</button>
      </div>

      <div className="blur"></div>
    </section>
  );
}

export default Banner;
