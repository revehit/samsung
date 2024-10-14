import React, { useState, useEffect } from 'react';
import "./style.scss";

import 'swiper/css';
import 'swiper/css/effect-fade';
import "swiper/css/pagination";

import { Container, Flex } from "@radix-ui/themes";
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Pagination, Autoplay } from 'swiper/modules';

import FloatingMenu from "../../components/FloatingMenu";
import FloatingButton from "../../components/FloatingButton";

import visualImg1 from "../../assets/images/pages/main/people1.png";
import visualImg2 from "../../assets/images/pages/main/people2.png";
import visualImg3 from "../../assets/images/pages/main/people3.png";
import visualImg4 from "../../assets/images/pages/main/people4.png";
import visualImg5 from "../../assets/images/pages/main/nouse.png";
import visualBg from "../../assets/images/pages/main/main-visual-bg.png";
import sliderImg1 from "../../assets/images/pages/main/slider-section-img01.jpg";
import sliderImg2 from "../../assets/images/pages/main/slider-section-img02.jpg";
import sliderImg3 from "../../assets/images/pages/main/slider-section-img03.jpg";
import locationImg1 from "../../assets/images/pages/main/img-gangnam.jpg";
import locationImg2 from "../../assets/images/pages/main/img-jonglo.jpg";
import locationImg3 from "../../assets/images/pages/main/img-songdo.jpg";
import professionalImg1 from "../../assets/images/pages/main/section6Img1.jpg";
import professionalImg2 from "../../assets/images/pages/main/section6Img2.jpg";
import professionalImg3 from "../../assets/images/pages/main/section6Img3.jpg";
import professionalImg4 from "../../assets/images/pages/main/section6Img4.jpg";
import rollingText1 from "../../assets/images/pages/main/bg-text-samsung.png";
import rollingText2 from "../../assets/images/pages/main/bg-text-dream.png";
import rollingImg1 from "../../assets/images/pages/main/doctor1.jpg";
import rollingImg2 from "../../assets/images/pages/main/doctor2.jpg";
import rollingImg3 from "../../assets/images/pages/main/doctor3.jpg";
import rollingImg4 from "../../assets/images/pages/main/doctor4.jpg";
import rollingImg5 from "../../assets/images/pages/main/doctor5.jpg";
import rollingImg6 from "../../assets/images/pages/main/doctor6.jpg";
import smapleImg from "../../assets/images/pages/main/sample.gif";
import otherSection from "../../assets/images/pages/main/other-section.jpg";
import sub1 from "../../assets/images/pages/sub/page-img1.jpeg"

const IMAGES = {
  visualImg1: { src: visualImg1, alt: "" },
  visualImg2: { src: visualImg2, alt: "" },
  visualImg3: { src: visualImg3, alt: "" },
  visualImg4: { src: visualImg4, alt: "" },
  visualImg5: { src: visualImg5, alt: "" },
  visualBg: { src: visualBg, alt: "" },
  sliderImg1: { src: sliderImg1, alt: "" },
  sliderImg2: { src: sliderImg2, alt: "" },
  sliderImg3: { src: sliderImg3, alt: "" },
  locationImg1: { src: locationImg1, alt: "" },
  locationImg2: { src: locationImg2, alt: "" },
  locationImg3: { src: locationImg3, alt: "" },
  professionalImg1: { src: professionalImg1, alt: "" },
  professionalImg2: { src: professionalImg2, alt: "" },
  professionalImg3: { src: professionalImg3, alt: "" },
  professionalImg4: { src: professionalImg4, alt: "" },
  rollingText1: { src: rollingText1, alt: "" },
  rollingText2: { src: rollingText2, alt: "" },
  rollingImg1: { src: rollingImg1, alt: "" },
  rollingImg2: { src: rollingImg2, alt: "" },
  rollingImg3: { src: rollingImg3, alt: "" },
  rollingImg4: { src: rollingImg4, alt: "" },
  rollingImg5: { src: rollingImg5, alt: "" },
  rollingImg6: { src: rollingImg6, alt: "" },
  smapleImg: { src: smapleImg, alt: "" },
  otherSection: { src: otherSection, alt: "" },
  sub1: { src: sub1, alt: "" },
};

gsap.registerPlugin(ScrollTrigger);

const Main = () => {
  //main visual
  const [isActive, setIsActive] = useState(true); // 초기에 첫 번째 이미지가 활성화됨
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsActive(false); // 3초 후에 첫 번째 이미지의 on 클래스 제거
    }, 3000);
    return () => {
      clearTimeout(timer);
      setIsActive(true); // 컴포넌트가 unmount 될 때 초기화
    };
  }, []);


  //slide-section + test-section(slog)
  useEffect(() => {
    const slideSection = document.getElementById('slide-section');
    const textBoxElement = document.getElementById('text-box');
    const textSectionElement = document.querySelector('.slog');
    
    // 초기 상태를 설정합니다.
    gsap.set(slideSection, { scale: 0.7 });
    gsap.set(textBoxElement, { opacity: 1 });
    gsap.set(textSectionElement, { scale: 1, fontWeight: 'normal' });

    const trigger = ScrollTrigger.create({
        trigger: slideSection,
        start: 'top bottom', // 스크롤 위치 설정
        end: '+=300', // 300px 떨어진 위치에서 작동
        onEnter: () => {
          gsap.to(slideSection, { scale: 1 }); // slideSection 크기 원상복구
          gsap.to(textBoxElement, { opacity: 0 });
          gsap.to(textSectionElement, { scale: 2.5, fontWeight: 'bold' }); // 텍스트 크기 원상복구
      }, 
      onLeaveBack: () => {
          gsap.to(slideSection, { scale: 0.7 }); // slideSection 크기 작아짐
          gsap.to(textBoxElement, { opacity: 1 });
          gsap.to(textSectionElement, { scale: 1, fontWeight: 'normal' }); // 텍스트 크기 원상복구
      }
    });

    // 컴포넌트 언마운트 시 ScrollTrigger 해제
    return () => {
        trigger.kill();
    };
  }, []);


  //location-section
  const [activeIndex, setActiveIndex] = useState(1); // 초기 선택된 박스 번호
  const handleBoxClick = (index) => {
    setActiveIndex(index); // 클릭된 박스 번호를 상태에 저장
  };


  //rolling-section
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % 6); // 0부터 5까지 순환
    }, 3000); // 3초마다 변경

    return () => clearInterval(interval); // 컴포넌트 언마운트 시 interval 정리
  }, []);

  // 의료진 클릭 시 페이지 연결
  const openNewWindow = () => {
    window.open(IMAGES.sub1.src, '_blank');
  };
  

  //floatingmenu
  const [floatingMenuActive, setFloatingMenuActive] = useState(false);

  useEffect(() => {
    const trigger = ScrollTrigger.create({
        trigger: '#location-section',
        start: 'top center',
        onEnter: () => setFloatingMenuActive(true),
        onLeaveBack: () => setFloatingMenuActive(false),
    });

    // 컴포넌트 언마운트 시 ScrollTrigger 해제
    return () => {
        trigger.kill();
    };
  }, []);


  //floating button
  const [floatingButtonActive, setfloatingButtonActive] = useState(isActive);

  const handleClick = () => {
    setfloatingButtonActive(!floatingButtonActive); // isActiveState 상태를 토글합니다.
  };


  //professional-section
  useEffect(() => {
    const textElement = document.querySelector('.professional-section .bg-text'); // 텍스트 요소 선택

    // ScrollTrigger 설정
    const trigger = ScrollTrigger.create({
      trigger: '#professional-section', // 트리거 섹션
      start: 'top center', // 섹션 상단이 뷰포트 중앙에 닿을 때
      end: 'bottom center', // 섹션 하단이 뷰포트 중앙에 닿을 때
      onEnter: () => {
          gsap.to(textElement, { x: '-45%', duration: 1 }); // 텍스트 애니메이션
      },
      onLeaveBack: () => {
          gsap.to(textElement, { x: '0%', duration: 1 }); // 돌아올 때 원래 위치로 복원
      },
    });

    // 컴포넌트 언마운트 시 ScrollTrigger 해제
    return () => {
        trigger.kill();
    };
  }, []);
    

  return (
    <>
      {/* section01 */}
      <section id="main-visual" className='section main-visual'>
        <Container>
          <Flex className="full-height section-inner" align="center" justify="center" wrap="wrap">
            <h2>SAMSUNG</h2>
            <h2>DREAM</h2>
          </Flex>
          <div className="line-box">
            <div className="visual-line top"></div>
            <div className="visual-line right"></div>
            <div className="visual-line bottom"></div>
            <div className="visual-line left"></div>
          </div>
          <div className="bg-box">
            <img src={IMAGES.visualBg.src} alt={IMAGES.visualBg.alt} />
          </div>
          <div className='transform-box'>
            <img 
              src={IMAGES.smapleImg.src} 
              alt={IMAGES.smapleImg.alt} 
              className={`item-img-gif ${isActive ? 'on' : ''}`}
            />
            <img 
              src={IMAGES.visualImg5.src} 
              alt={IMAGES.visualImg5.alt}
              className={`item-img-nouse ${isActive ? '' : 'on'}`}
            />
          </div>
        </Container>
      </section>

      {/* section02 */}
      <section id="text-section" className='section text-section'>
        <Container>
          <div id="text-box" className="text-box">
            <h2>검사부터 수술,까지</h2>
            <h2>모든 과정을 하루만에</h2>
            <h2>원스텝 코수술</h2>
          </div>
          <p className='slog'>삼성드림이비인후과 코의 기준이 되다</p>
        </Container>
      </section>

      {/* section03 */}
      <section id="slide-section" className='section slide-section'>
        <Container>
          <div className="full-height">
            <div className="text-box">
              <h2>
                <p>ONESTEP 코수술 전문 이비인후과</p>
                <p>삼성드림,<em></em>수술에 대한 생각을 바꾸다</p>
              </h2>
            </div>
            <div className="menu-box">
              <Flex className="menu-box-inner">
                <div className="box">
                  <p className="box-title">상담신청</p>
                  <div className="consult">
                    <input type="text" placeholder='이름'/>
                    <input type="text" placeholder='전화번호'/>
                    <button type='button'>신청</button>
                  </div>
                  <p className='guide'>상담시간 평일 08:30~16:30, 토/공휴일 휴무</p>
                </div>
                <div className="box">
                  <p className="box-title">삼성드림이비인후과 대표번호</p>
                  <Flex className="number" align="center" justify="center" gap="10px">
                    <em></em>
                    <span>1599-6299</span>
                  </Flex>
                    <p className='guide'>카카오톡으로 더욱 쉽고 빠르게 문의사항을 해결해드립니다.</p>
                </div>
                <div className="box">
                  <p className="box-title">수술상담</p>
                  <Flex className="surgery">
                    <p>
                      <span className="badge">강남점</span>010-3561-9365
                    </p>
                    <p>
                      <span className="badge">종로점</span>010-5170-5365
                    </p>
                    <p>
                      <span className="badge">삼성점</span>010-3561-9365
                    </p>
                    <p>
                      <span className="badge">일산점</span>010-2772-1365
                    </p>
                    <p>
                      <span className="badge">노원점</span>010-9007-5365
                    </p>
                    <p>
                      <span className="badge">송도점</span>010-4263-0365
                    </p>
                  </Flex>
                </div>
              </Flex>
            </div>
            <Swiper 
              modules={[EffectFade, Pagination, Autoplay]} 
              effect="fade"
              pagination={true}
              slidesPerView={1}
              onSlideChange={() => console.log('slide change')}
              autoplay={{ 
                delay: 2000, 
                disableOnInteraction: false 
              }}
              onSwiper={(swiper) => console.log('Swiper instance:', swiper)}
              loop={true}
            >
              <SwiperSlide>
                <img src={IMAGES.sliderImg1.src} alt={IMAGES.sliderImg1.alt} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={IMAGES.sliderImg2.src} alt={IMAGES.sliderImg2.alt} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={IMAGES.sliderImg3.src} alt={IMAGES.sliderImg3.alt} />
              </SwiperSlide>
            </Swiper>
          </div>
        </Container>
      </section>

      {/* section04 */}
      <section id="location-section" className='section location-section'>
        <Container>
          <div className='full-height'>
            <Flex className='link-box' align="center" wrap="wrap">
              <div className={`box ${activeIndex === 1 ? 'on' : ''}`} onClick={() => handleBoxClick(1)}>
                <p className="box-title">강남점</p>
                <p>010-9306-5365</p>
                <div className='hidden-box'>
                  <p className="box-title">강남점</p>
                  <Flex align="center" gap="10px">
                    <span className='icon kakao'></span>
                    <span className='icon facebook'></span>
                    <span className='icon blog'></span>
                    <span className='icon call'></span>
                  </Flex>
                  <div className='btn-wrap'>
                    <a href="#!" className='btn link'>오시는 길</a>
                    <a href="#!" className='btn link'>지점 소개</a>
                  </div>
                </div>
              </div>
              <div className="box">
                <p className="box-title">삼성점</p>
                <p>010-3561-9365</p>
                <div className='hidden-box'>
                  <p className="box-title">삼성점</p>
                  <Flex align="center" gap="10px">
                    <span className='icon kakao'></span>
                    <span className='icon facebook'></span>
                    <span className='icon blog'></span>
                    <span className='icon call'></span>
                  </Flex>
                  <div className='btn-wrap'>
                    <a href="#!" className='btn link'>오시는 길</a>
                    <a href="#!" className='btn link'>지점 소개</a>
                  </div>
                </div>
              </div>
              <div className="box">
                <p className="box-title">노원점</p>
                <p>010-9007-5365</p>
                <div className='hidden-box'>
                  <p className="box-title">노원점</p>
                  <Flex align="center" gap="10px">
                    <span className='icon kakao'></span>
                    <span className='icon facebook'></span>
                    <span className='icon blog'></span>
                    <span className='icon call'></span>
                  </Flex>
                  <div className='btn-wrap'>
                    <a href="#!" className='btn link'>오시는 길</a>
                    <a href="#!" className='btn link'>지점 소개</a>
                  </div>
                </div>
              </div>
              <div className={`box ${activeIndex === 2 ? 'on' : ''}`} onClick={() => handleBoxClick(2)}>
                <p className="box-title">종로점</p>
                <p>010-5170-5365</p>
                <div className='hidden-box'>
                  <p className="box-title">종로점</p>
                  <Flex align="center" gap="10px">
                    <span className='icon kakao'></span>
                    <span className='icon facebook'></span>
                    <span className='icon blog'></span>
                    <span className='icon call'></span>
                  </Flex>
                  <div className='btn-wrap'>
                    <a href="#!" className='btn link'>오시는 길</a>
                    <a href="#!" className='btn link'>지점 소개</a>
                  </div>
                </div>
              </div>
              <div className="box">
                <p className="box-title">일산점</p>
                <p>010-2772-1365</p>
                <div className='hidden-box'>
                  <p className="box-title">일산점</p>
                  <Flex align="center" gap="10px">
                    <span className='icon kakao'></span>
                    <span className='icon facebook'></span>
                    <span className='icon blog'></span>
                    <span className='icon call'></span>
                  </Flex>
                  <div className='btn-wrap'>
                    <a href="#!" className='btn link'>오시는 길</a>
                    <a href="#!" className='btn link'>지점 소개</a>
                  </div>
                </div>
              </div>
              <div className={`box ${activeIndex === 3 ? 'on' : ''}`} onClick={() => handleBoxClick(3)}>
                <p className="box-title">송도점</p>
                <p>010-9306-5365</p>
                <div className='hidden-box'>
                  <p className="box-title">송도점</p>
                  <Flex align="center" gap="10px">
                    <span className='icon kakao'></span>
                    <span className='icon facebook'></span>
                    <span className='icon blog'></span>
                    <span className='icon call'></span>
                  </Flex>
                  <div className='btn-wrap'>
                    <a href="#!" className='btn link'>오시는 길</a>
                    <a href="#!" className='btn link'>지점 소개</a>
                  </div>
                </div>
              </div>
            </Flex>
            <div className="bg-box">
              <img 
                src={IMAGES.locationImg1.src} 
                alt={IMAGES.locationImg1.alt} 
                className={`img-item ${activeIndex === 1 ? 'on' : ''}`}
              />
              <img 
                src={IMAGES.locationImg2.src} 
                alt={IMAGES.locationImg2.alt} 
                className={`img-item ${activeIndex === 2 ? 'on' : ''}`}
              />
              <img 
                src={IMAGES.locationImg3.src} 
                alt={IMAGES.locationImg3.alt} 
                className={`img-item ${activeIndex === 3 ? 'on' : ''}`}
              />
            </div>
          </div>
        </Container>
      </section>

      {/* section05 */}
      <section id="professional-section" className='section professional-section'>
        <Container>
          <div className="full-height">
            <div className="section-inner">
              <h2>
                삼성드림이비인후과는<br/>
                <strong>오직, 결과로 전문성을 입증합니다.</strong>
              </h2>
              <Flex justify="center" gap="30px">
                <a href="#!" className='box'>
                  <img src={IMAGES.professionalImg1.src} alt={IMAGES.professionalImg1.alt} />
                  <div className='text-box'>
                    <p>비중격 연골의 최소 절제!</p>
                    <h3>비중격 수술</h3>
                    <div className='hidden'></div>
                  </div>
                </a>
                <a href="#!" className='box'>
                  <img src={IMAGES.professionalImg2.src} alt={IMAGES.professionalImg2.alt} />
                  <div className='text-box'>
                    <p>5가지 밀도있는 원인분석</p>
                    <h3>프레쉬 비염 수술</h3>
                    <div className='hidden'></div>
                  </div>
                </a>
                <a href="#!" className='box'>
                  <img src={IMAGES.professionalImg3.src} alt={IMAGES.professionalImg3.alt} />
                  <div className='text-box'>
                    <p>휜 코 수술과 비중격 수술을 한 번에!</p>
                    <h3>듀얼 휜코 수술</h3>
                    <div className='hidden'></div>
                  </div>
                </a>
                <a href="#!" className='box'>
                  <img src={IMAGES.professionalImg4.src} alt={IMAGES.professionalImg4.alt} />
                  <div className='text-box'>
                    <p>코수술! 이젠 기품있는 업다운스타일로~</p>
                    <h3>업다운 매부리코 성형</h3>
                    <div className='hidden'></div>
                  </div>
                </a>
              </Flex>
            </div>
            <p className='bg-text'>SAMSUNG DREAM NETWORK</p>
          </div>
        </Container>
      </section>

      {/* section06 */}
      <section id="rolling-section" className='section rolling-section'>
        <Container>
          <div className="full-height">
            <div className="section-inner">
              <h2>
                믿을 수 있는 의료진, 풍부한 경험을 갖춘<br/>
                <strong>6개 지점 원장님을 소개합니다.</strong>
              </h2>
              <div className="rolling-box">
                <div className="rolling-img">
                  <div className={`item doctor0 ${currentIndex === 0 ? 'active' : ''}`} onClick={openNewWindow}>
                    <img src={IMAGES.rollingImg1.src} alt={IMAGES.rollingImg1.alt} />
                  </div>
                  <div className={`item doctor1 ${currentIndex === 1 ? 'active' : ''}`} onClick={openNewWindow}>
                    <img src={IMAGES.rollingImg2.src} alt={IMAGES.rollingImg2.alt} />
                  </div>
                  <div className={`item doctor2 ${currentIndex === 2 ? 'active' : ''}`} onClick={openNewWindow}>
                    <img src={IMAGES.rollingImg3.src} alt={IMAGES.rollingImg3.alt} />
                  </div>
                  <div className={`item doctor3 ${currentIndex === 3 ? 'active' : ''}`} onClick={openNewWindow}>
                    <img src={IMAGES.rollingImg4.src} alt={IMAGES.rollingImg4.alt} />
                  </div>
                  <div className={`item doctor4 ${currentIndex === 4 ? 'active' : ''}`} onClick={openNewWindow}>
                    <img src={IMAGES.rollingImg5.src} alt={IMAGES.rollingImg5.alt} />
                  </div>
                  <div className={`item doctor5 ${currentIndex === 5 ? 'active' : ''}`} onClick={openNewWindow}>
                    <img src={IMAGES.rollingImg6.src} alt={IMAGES.rollingImg6.alt} />
                  </div>
                </div>
                <div className="rolling-text">
                  <div className={`item ${currentIndex === 0 ? 'active' : ''}`}>
                    <p className='name'>강남점 윤석영 원장</p>
                    <p className='cont'>
                      환자들에게 만족을 주고싶은<br/>
                      <strong>
                        <span>정직한 손길</span>
                      </strong>
                    </p>
                    <p className='sub'>코수술,코성형 만큼은 허세형 전문의를 만나보세요.</p>
                  </div>
                  <div className={`item ${currentIndex === 1 ? 'active' : ''}`}>
                    <p className='name'>삼성점 오윤석 원장</p>
                    <p className='cont'>환자들에게 만족을 주고싶은<br/><strong>정직한 손길</strong></p>
                    <p className='sub'>코수술,코성형 만큼은 허세형 전문의를 만나보세요.</p>
                  </div>
                  <div className={`item ${currentIndex === 2 ? 'active' : ''}`}>
                    <p className='name'>노원점 김창효 원장</p>
                    <p className='cont'>환자들에게 만족을 주고싶은<br/><strong>정직한 손길</strong></p>
                    <p className='sub'>코수술,코성형 만큼은 허세형 전문의를 만나보세요.</p>
                  </div>
                  <div className={`item ${currentIndex === 3 ? 'active' : ''}`}>
                    <p className='name'>종로점 허세영 원장</p>
                    <p className='cont'>환자들에게 만족을 주고싶은<br/><strong>정직한 손길</strong></p>
                    <p className='sub'>코수술,코성형 만큼은 허세형 전문의를 만나보세요.</p>
                  </div>
                  <div className={`item ${currentIndex === 4 ? 'active' : ''}`}>
                    <p className='name'>일산점 고병윤 원장</p>
                    <p className='cont'>환자들에게 만족을 주고싶은<br/><strong>정직한 손길</strong></p>
                    <p className='sub'>코수술,코성형 만큼은 허세형 전문의를 만나보세요.</p>
                  </div>
                  <div className={`item ${currentIndex === 5 ? 'active' : ''}`}>
                    <p className='name'>송도점 김규진 원장</p>
                    <p className='cont'>환자들에게 만족을 주고싶은<br/><strong>정직한 손길</strong></p>
                    <p className='sub'>코수술,코성형 만큼은 허세형 전문의를 만나보세요.</p>
                  </div>
                </div>
              </div>
            </div>
            <img src={IMAGES.rollingText1.src} alt={IMAGES.rollingText1.alt} className='bg-text samsung' />
            <img src={IMAGES.rollingText2.src} alt={IMAGES.rollingText2.alt} className='bg-text dream' />
          </div>
        </Container>
      </section>

      {/* other section */}
      <section>
        <Container>
          <img src={IMAGES.otherSection.src} alt={IMAGES.otherSection.alt} />
        </Container>
      </section>

      {/* floating menu */}
      <FloatingMenu isActive={floatingMenuActive} />

      {/* floating button */}
      <FloatingButton isActive={floatingButtonActive} onClick={handleClick}/>
    </>
  );
};

export default Main;