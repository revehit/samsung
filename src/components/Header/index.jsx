import React from 'react';
import "./style.scss";
import { Container, Flex } from "@radix-ui/themes";

import headerLogo from "../../assets/images/common/logo.png";
import sub from "../../assets/images/pages/sub/page-img2.jpeg"
import sub2 from "../../assets/images/pages/sub/page-mobile.jpeg"

const IMAGES = {
  headerLogo: { src: headerLogo, alt: "삼성드림 이비인후과 의원" },
  sub: { src: sub, alt: "" },
  sub2: { src: sub2, alt: "" },
};

const Header = ({ isActive }) => {
  
  const openNewWindow = () => {
    window.open(IMAGES.sub.src, '_blank');
  };
  const openNewWindow2 = () => {
    window.open(IMAGES.sub2.src, '_blank');
  };

  return (
    <>
      <header className={`${isActive ? 'on' : ''}`}>
        <Container>
          <Flex align="center" className='header-inner'>
            <h1>
              <img src={IMAGES.headerLogo.src} alt={IMAGES.headerLogo.alt} />
            </h1>
            <nav id="menu">
              <a href="#!" onClick={openNewWindow2}>병원소개</a>
              <a href="#!" onClick={openNewWindow}>지점소개</a>
              <a href="#!">원스텝진료</a>
              <a href="#!">수면센터</a>
              <a href="#!">고객이야기</a>
            </nav>
            <Flex gap="10px" className='user-nav'>
              <a href="#!">로그인</a>
              <a href="#!">회원가입</a>
              <a href="#!">리얼모델 모집</a>
            </Flex>
          </Flex>
        </Container>
      </header>
    </>
  );
};

export default Header;