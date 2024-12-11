import React, { useRef, useEffect, useNavigate } from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import Spring from './season/Spring';
import Summer from './season/Summer';
import Fall from './season/Fall';
import Winter from './season/Winter';


function Season() {

  return (
    <>
    <div className='banner-container'>
    <img src={`${process.env.PUBLIC_URL}/img/seasonbanner.jpg`} />
    <div className='app-title'>
      <p className='emoji'>🎶</p>
      <p className='first-title'>새로운 계절의 풍경이 당신을 기다립니다.</p>
      <h2>계절에 따라 다양한 경험을 찾아보세요</h2>
    </div>
    </div>
    <div className="app-container">
      <div className="travel-container">
        <Spring />
        <Summer />
        <Fall />
        <Winter />
      </div>
    </div>
    </>
  );
}

export default Season;