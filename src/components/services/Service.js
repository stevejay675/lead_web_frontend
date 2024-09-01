
import './service.css'; 
import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa';

function Service() {
  return (
    <section className="services-section">

      <div className='service-cards'>

        <div className='service-card'>
          <img src='images/service-img1.png'/>
          <h2>Easy  to order</h2>
          <p>You only need a few steps in ordering</p>
        </div>

        <div className='service-card'>
          <img src='images/service-img2.png'/>
          <h2>Fastest Delivery</h2>
          <p>Delivery that is always on time and even faster </p>
        </div>

        <div className='service-card'>
          <img src='images/service-img3.png'/>
          <h2>Best Quality</h2>
          <p>Delivery that is always on time and even faster </p>
        </div>

        <div className='service-card'>
          <img src='images/service-img4.png'/>
          <h2>Easy  to order</h2>
          <p>You only need a few steps in ordering</p>
          <a><p>Start Earning</p> <FaArrowRight /></a>
        </div>

        <div className='service-card'>
          <img src='images/service-img5.png'/>
          <h2>Easy  to order</h2>
          <p>You only need a few steps in ordering</p>
          <a><p>Start Earning</p> <FaArrowRight /></a>
        </div>

        <div className='service-card'>
          <img src='images/service-img6.jpg'/>
          <h2>Easy  to order</h2>
          <p>You only need a few steps in ordering</p>
          <a><p>Start Earning</p> <FaArrowRight /></a>
        </div>
      </div>
    </section>
  );
}

export default Service;
