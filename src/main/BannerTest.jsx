import React from 'react';

function Banner1() {
    
    return (
        
        <div className='banner1'>
            {/**
            <div className='moveleft'><img src={process.env.PUBLIC_URL + 'img/leftarrow.png'}/></div>
            
            <div className='bannerleft'>
                <img src={process.env.PUBLIC_URL + '/image9.jpg'} alt='Banner1'/>
            </div>
             */}
            <div className='bannerright'>
                <p>
                    대도시와 소도시의 <b>매력</b>이 공존하는
                </p>
                <h1>스페인 여행</h1>
                
            </div>
            {/** <div className='moveright'><img src={process.env.PUBLIC_URL + 'img/rightarrow.png'}/></div> */}
            
        </div>
    );
}

export default Banner1;