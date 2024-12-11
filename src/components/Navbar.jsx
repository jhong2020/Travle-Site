import React, { useContext, useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
// import LoginPage from '../main/LoginPage';

const Navbar = () => {
    const [isHover, setIsHover] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState("");
    
    const handleMouseOver = (index) => {
        setIsHover(index);
    }

    const handleMouseOut = () => {
        setIsHover(null);
    }

    const handleLogout = () => {
        setIsLoggedIn(false);
        localStorage.setItem('isLoggedIn', false);
    }

    useEffect(() => {
        console.log("상태2 nav: "+ localStorage.getItem('isLoggedIn'));
        setIsLoggedIn(localStorage.getItem('isLoggedIn'));
        
    }, [isLoggedIn]);

    return (
        <div className="navbar">
            <div className='logo'>
                <Link to='/'><img src={`${process.env.PUBLIC_URL}/img/logo.png`}></img></Link>
            </div>
            <div className='category'>
                <div className='menu' onMouseOver={() => handleMouseOver(0)} onMouseOut={handleMouseOut}>
                    <Link to="/country" className={isHover === 0 ? "category-list-hover" : "category-list"}>나라별</Link>
                </div>
                <div className='menu' onMouseOver={() => handleMouseOver(1)} onMouseOut={handleMouseOut}>
                    <Link to="/theme" className={isHover === 1 ? "category-list-hover" : "category-list"}>테마별</Link>
                </div>
                <div className='menu' onMouseOver={() => handleMouseOver(2)} onMouseOut={handleMouseOut}>
                    <Link to="/season" className={isHover === 2 ? "category-list-hover" : "category-list"}>계절별</Link>
                </div>
                <div className='menu' onMouseOver={() => handleMouseOver(3)} onMouseOut={handleMouseOut}>
                    <Link to="/post" className={isHover === 3 ? "category-list-hover" : "category-list"}>게시판</Link>
                </div>
                
                
            
            </div>
            <div className='loginbtn'>
                { isLoggedIn === "true" ? <Link to="/"><button onClick={handleLogout}>로그아웃</button></Link> : <Link to="/login"><button>로그인</button></Link> }
                
            </div>
        </div>
    )
}

export default Navbar;
