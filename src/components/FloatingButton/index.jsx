import React, { useState } from 'react';
import "./style.scss";

const FloatingButton = () => {

  const [isActive, setIsActive] = useState(false);

  const toggleActive = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      <div className={`floating-button ${isActive ? 'on' : ''}`}>
        <button className='plus' onClick={toggleActive}>
          <span></span>
          <span></span>
        </button>
        <div className='icons'>
          <a href='' className='btn-flex kakao'>
            <div className="logobox"></div>
            <div className="hidden-box">
              카카오톡
            </div>
          </a>
          <a href='' className='btn-flex facebook'>
            <div className="logobox"></div>
            <div className="hidden-box">
              페이스북
            </div>
          </a>
          <a href='' className='btn-flex blog'>
            <div className="logobox"></div>
            <div className="hidden-box">
              블로그
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default FloatingButton;