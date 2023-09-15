import React from "react";
import HeroSection from "@/app/components/hero-section/Hero-Sectionn";
import CardCenter from "@/app/components/hero-section/center-card";
import Lastnav from "@/app/components/navbars/lastnav";
import NavbarOne from "@/app/components/navbars/navbar";
import Thirdsection from "@/app/components/picture-section/picture-section";
import Pictures from "@/app/components/picture-section/Cards";
import ImagesSection from "@/app/components/picture-section/carousal-imgs";
import Footer from "@/app/components/Footer/footer";
import Cards from "@/app/components/two-cards/two-cards-section";
import Products from "@/app/components/picture-section/products";

const Userpage = () => {
  return (
    <div>
      <NavbarOne />
      <Lastnav />
      <HeroSection />
      <CardCenter />
      <Thirdsection />
      <Pictures />
      <ImagesSection />
      <Products />

      <Cards />
      <Footer />
    </div>
  );
};

export default Userpage;
