import React from 'react';

import { Container } from "@radix-ui/themes";

import pageImg1 from "../../assets/images/pages/sub/page-img1.jpeg";

const IMAGES = {
  pageImg1: { src: pageImg1, alt: "" },
};

const Sub1 = () => {
  return (
    <>
      <section>
        <Container>
          <img src={IMAGES.pageImg1.src} alt={IMAGES.pageImg1.alt} />
        </Container>
      </section>
    </>
  );
};

export default Sub1;