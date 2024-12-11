import React from 'react';
import { useNavigate } from 'react-router-dom';

function Tourism() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/tourism');
  };

  return (
    <div className="image-item-season Tourism" onClick={handleClick}>
      <img
        src={`${process.env.PUBLIC_URL}/img/Tourism_2.jpg`}
        alt="Description for Tourism"
        className="special-effect"
      />
    </div>
  );
}

export default Tourism;
