import React, { useRef, useEffect, useNavigate } from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import PostList from './board/PostList';


function Board() {

  return (
    <>
    <div className='banner-container'>
    <img src={`${process.env.PUBLIC_URL}/img/noticebanner.jpg`} />
    </div>
    <div className="app-container">
      <div className="travel-container">
        <PostList />
      </div>
    </div>
    </>
  );
}

export default Board;