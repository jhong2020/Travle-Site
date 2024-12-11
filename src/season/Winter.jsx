import React from 'react';
import { useNavigate } from 'react-router-dom';

function Winter() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/winter');
  };

  return (
    <div className="image-item-season Winter" onClick={handleClick}>
      <img
        src={`${process.env.PUBLIC_URL}/Winter2.jpg`}
        alt="Description for Winter"
        className="special-effect"
      />
    </div>
  );
}

export default Winter;