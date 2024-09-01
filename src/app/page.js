import Image from "next/image";
import Banner from "@/components/banner/banner";
import Navbar from "@/components/navbar/Navbar";
import Service from "@/components/services/Service";
import Footer from "@/components/footer/Footer";
import Partners from "@/components/partners/Partners";
import Othersection from "@/components/othersection/othersection";
import Newsletter from "@/components/newsletter/newsletter";
import "./globals.css";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Service />
      <Othersection />
      <Partners />
      <Newsletter />
      <Footer />
    </div>
  );
}
