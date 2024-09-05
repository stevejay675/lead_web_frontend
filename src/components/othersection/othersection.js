import Image from "next/image";
import "./othersection.css";
import BodyBanner from "../body_banner/bodybanner";

function Othersection() {
  return (
    <div className="other-section">
      <div className="sub-section sub-section-1">
        <div>
          <h2>Everything you crave, delivered.</h2>
          <p>
          Order your favorite roasted chicken, enjoy a plate of njama-njama, or try that local dish you’ve been curious about
          </p>
          <a>Find Restaurants</a>
        </div>

        <img src="images/banner2.jpg" />
      </div>

      <div className="sub-section sub-section-2">
        <img src="images/Ndole-1.jpg" />
        <div>
          <h2>Taste the Best, Right at Home</h2>
          <p>
          Enjoy a plate of ndolé, jollof rice, or grab your favorite suya from the spot you’ve always wanted to try.
          </p>
          <a>Find Restaurants</a>
        </div>
      </div>

      <BodyBanner />

      <div className="sub-section sub-section-1">
        <div>
          <h2>Grow your business with LoopEats</h2>
          <p>
          Businesses large and small partner with LoopEats
           to reach new customers, increase order volume, and
            drive more sales.
          </p>
          <a>Become a partner</a>
        </div>

        <img src="images/restaurant-2.jpg" />
      </div>

      <div className="sub-section sub-section-2">
        <img src="images/delivery_guy.jpg" />
        <div>
          <h2>Deliver with the Top Food Delivery App</h2>
          <p>
          Earn money on your terms as a LoopEats driver. Set your schedule, and start delivering in just minutes.
          </p>
          <a>Become a rider</a>
        </div>
      </div>
    </div>
  );
}

export default Othersection;
