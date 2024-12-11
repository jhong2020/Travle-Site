import './index.css';

import Korea from './nation/Korea';
import China from './nation/China';
import Japan from './nation/Japan';
import Image4 from './nation/Image4';
import Image5 from './nation/Image5';
import Image6 from './nation/Image6';
import Image7 from './nation/Image7';
import Image8 from './nation/Image8';
import Image9 from './nation/Image9';

function Country() {
  return (
    <>
    <div className='banner-container'>
    <img src={`${process.env.PUBLIC_URL}/img/nationbanner.png`} />
    <div className='app-title'>
      <p className='emoji'>⭐</p>
      <p className='first-title'>어디로 떠날지 선택하는 것만으로도 모험이 시작됩니다.</p>
      <h2>모험을 떠날 곳을 나라별로 살펴보세요</h2>
    </div>
    </div>
      <div className="app-container">
        <div className="travel-container">
          <Korea />
          <China />
          <Japan />
          <Image4 />
          <Image5 />
          <Image6 />
          <Image7 />
          <Image8 />
          <Image9 />
        </div>
      </div>
      <div><h1></h1></div>
    </>
  );
}

export default Country;
