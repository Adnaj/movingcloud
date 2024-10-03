import AboutOne from "@/components/AboutOne/AboutOne";
import BrandOne from "@/components/BrandOne/BrandOne";
import DestinationsOne from "@/components/DestinationsOne/DestinationsOne";
import Poularcategories from "@/components/popularCategories/popularCategories";
import GalleryOne from "@/components/GalleryOne/GalleryOne";
import Layout from "@/components/Layout/Layout";
import MainSlider from "@/components/MainSlider/MainSlider";
import NewsOne from "@/components/NewsOne/NewsOne";
import PopularTours from "@/components/PopularTours/PopularTours";
import PopularTypes from "@/components/PopularTours/PopularTypes.js";
import TestimonialOne from "@/components/TestimonialOne/TestimonialOne";
import TourSearch from "@/components/TourSearch/TourSearch";
import VideoOne from "@/components/VideoOne/VideoOne";
import WhyChoose from "@/components/WhyChoose/WhyChoose";
import Services from "@/components/Services/services";
import React from "react";

const Home = () => {
  return (
    <Layout pageTitle="Home One">
      <MainSlider />
      <TourSearch />
      <Poularcategories />
      <PopularTypes /> 
      <VideoOne />
      <PopularTours />
      <Services />

      {/* <AboutOne /> */}
    
      {/* <BrandOne /> */}
      
      {/* <GalleryOne /> */}
      
      
      <WhyChoose />
      <TestimonialOne />
      <DestinationsOne />
      {/* <NewsOne /> */}
    </Layout>
  );
};

export default Home;
