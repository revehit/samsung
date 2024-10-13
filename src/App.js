import React, { useEffect, useState } from "react";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";

import "./assets/scss/index.scss";

import Header from "./components/Header";
//import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RouteList from "./app/router";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function App() {
  //header on
  const [headerActive, setHeaderActive] = useState(false); // 상태 변수 추가

  useEffect(() => {
    const trigger = ScrollTrigger.create({
      trigger: '#main-visual', // main-visual 섹션을 트리거로 설정
      start: 'bottom top',
      onLeave: () => setHeaderActive(true), // 벗어날 때 활성화
      onEnterBack: () => setHeaderActive(false), // 돌아올 때 비활성화
    });

    // 컴포넌트 언마운트 시 ScrollTrigger 해제
    return () => {
      trigger.kill();
    };
  }, []);

  return (
    <div className="App">
      <Theme accentColor={"blue"}>
        <Header isActive={headerActive}/>
        <main id="contents">
          <Router>
            <Routes>
              {RouteList.map((route, index) => (
                <Route key={index} path={route.path} element={route.element} />
              ))}
            </Routes>
          </Router>
        </main>
        {/* <Footer /> */}
      </Theme>
    </div>
  );
}

export default App;
