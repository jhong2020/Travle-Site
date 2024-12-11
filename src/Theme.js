import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import Recreation from './theme/Recreation';
import Tourism from './theme/Tourism';
import Activity from './theme/Activity';
import Epicurism from './theme/Epicurism';


function Theme() {
  return (
    <>
    <div className='banner-container'>
    <img src={`${process.env.PUBLIC_URL}/img/themebanner.jpg`} />
    <div className='app-title'>
      <p className='emoji'>🎶</p>
      <p className='first-title'>취향에 맞게 선택하는 것이 성공적인 여행의 첫걸음입니다</p>
      <h2>당신의 취향에 맞는 여행 테마를 선택해보세요</h2>
    </div>
    </div>
    <div className="app-container">
      <div className="travel-container">
        <Recreation />
        <Tourism />
        <Activity />
        <Epicurism />
      </div>
    </div>
    </>
  );
}

export default Theme;
