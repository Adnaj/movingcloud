import videoOne from "@/data/videoOne";
import dynamic from "next/dynamic";
import React, { Fragment, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import CounterOne from "@/components/CounterOne/CounterOne";
import JarallaxImage from "../Jarallax/JarallaxImage";
import VideoModal from "../VideoModal/VideoModal";

const Jarallax = dynamic(() => import("@/components/Jarallax/Jarallax"), {
  ssr: false,
});

const { bg, videoId, tagline, title, iconBoxes } = videoOne;

const VideoOne = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <section className="video-one">
        <Jarallax className="video-one-bg" speed={0.2} imgPosition="50% 0%">
          <JarallaxImage src={bg.src} />
        </Jarallax>
        <Container>
          <Row>
            <CounterOne/>
          </Row>
        </Container>
      </section>
      <VideoModal isOpen={isOpen} setOpen={setOpen} id={videoId} />
    </>
  );
};

export default VideoOne;
