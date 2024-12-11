import React from 'react';
import { useNavigate } from 'react-router-dom';

function China() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/country-info/2');
  };

  return (
    <div className="image-item China" onClick={handleClick}>
      <img
        src={`${process.env.PUBLIC_URL}/China.jpg`}
        alt="The Great Wall of China"
        className="special-effect"
      />
    </div>
  );
}

export default China;
