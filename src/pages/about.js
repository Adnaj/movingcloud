import AboutPage from "@/components/AboutPage/AboutPage";
import AboutTwo from "@/components/AboutTwo/AboutTwo";
import BookNow from "@/components/BookNow/BookNow";
import ThreeIconBox from "@/components/ThreeIconBox/ThreeIconBox";
import BrandTwo from "@/components/BrandTwo/BrandTwo";
import CounterOne from "@/components/CounterOne/CounterOne";
import Layout from "@/components/Layout/Layout";
import PageHeader from "@/components/PageHeader/PageHeader";
import TeamOne from "@/components/TeamOne/TeamOne";
import TestimonialOne from "@/components/TestimonialOne/TestimonialOne";
import VideoTwo from "@/components/VideoTwo/VideoTwo";
import React from "react";

const About = () => {
  return (
    <Layout pageTitle="About">
      <PageHeader title="About" />
      <AboutTwo />
      <ThreeIconBox />
      {/* <TestimonialOne aboutPage /> */}
      <VideoTwo />
      <CounterOne />
      
      <TeamOne />
      <BookNow />
    </Layout>
  );
};

export default About;
