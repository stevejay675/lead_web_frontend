import Image from "next/image";
import Banner from "@/components/banner/banner";
import Navbar from "@/components/navbar/Navbar";
import Service from "@/components/services/Service";
import Footer from "@/components/footer/Footer";
import Partners from "@/components/partners/Partners";
import Othersection from "@/components/othersection/othersection";
import Newsletter from "@/components/newsletter/newsletter";
import Sidebar from "@/components/sidebar/sidebar";

import "./globals.css";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Banner />
      
      <Sidebar />
      <section id="service"><Service /></section>
      <Othersection />
      <section id="partners"><Partners /></section>
      <Newsletter />
      <Footer />
    </div>
  );
}
