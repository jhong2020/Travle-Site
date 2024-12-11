import React from 'react';
import { useNavigate } from 'react-router-dom';

function Spring() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/spring');
  };

  return (
    <div className="image-item-season Spring" onClick={handleClick}>
      <img
        src={`${process.env.PUBLIC_URL}/Spring2.jpg`}
        alt="Description for Spring_2"
        className="special-effect"
      />
    </div>
  );
}

export default Spring;