import "./Partners.css";
import Image from "next/image";

function Partners() {
  return (
    <section className="partners-section">
      <h2>Our Partners</h2>
      <div className="partner-logos">
        <img src="images/partner1.png" />
        <img src="images/partner2.png" />
        <img src="images/partner3.png" />
        <img src="images/partner4.png" />
        <img src="images/partner5.png" />
      </div>
    </section>
  );
}

export default Partners;
