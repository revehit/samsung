import React from 'react';
import "./style.scss";
import { Flex } from "@radix-ui/themes";

const FloatingMenu = ({ isActive }) => {
  return (
    <>
      <div className={`floating-menu ${isActive ? 'on' : ''}`}>
        <div className="container">
          <Flex>
            <div className='title-box'>삼성드림이비인후과 지점안내</div>
            <Flex align="center">
              <a href="#!">강남점</a>
              <a href="#!">삼성점</a>
              <a href="#!">노원점</a>
              <a href="#!">종로점</a>
              <a href="#!">일산점</a>
              <a href="#!">송도점</a>
            </Flex>
          </Flex>
        </div>
      </div>
    </>
  );
};

export default FloatingMenu;