// app/components/bodybanner.js
import Image from "next/image";
import "./banner.css";

function BodyBanner() {
  return (
    <section className="bodybanner-section" id="about">

      <h1>About Us</h1>

      <Image
        src="/images/banner4.jpg" // Update with your correct image path
        alt="LoopEats Banner"
        layout="fill"
        objectFit="cover"
        className="banner-image"
      />

      
        <div className="banner-text">
          <div>
            <h2>Why Choose LoopEats</h2>
            <p>
              LoopEats is redefining how you enjoy food with an intuitive, fast,
              and reliable delivery experience. Launching soon, our app connects
              you to the best local restaurants, offering a wide range of
              cuisines to satisfy every craving.
            </p>
          </div>

          <div>
            <h2>Quality You Can Trust</h2>
            <p>
              We’re committed to freshness, speed, and quality, ensuring every
              meal is a delightful experience. Whether you're in the mood for a
              quick bite or a gourmet meal, LoopEats brings your favorite dishes
              right to your doorstep with just a few taps.
            </p>
          </div>

          <div>
            <h2>Explore New Flavors</h2>
            <p>
              Get ready to explore new flavors and rediscover your favorites
              with LoopEats, where every order is a step closer to food
              happiness.
            </p>
          </div>
        </div>
      

      <div className="blur"></div>
    </section>
  );
}

export default BodyBanner;
