import React from 'react';
import { useNavigate } from 'react-router-dom';

function Fall() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/fall');
  };

  return (
    <div className="image-item-season Fall" onClick={handleClick}>
      <img
        src={`${process.env.PUBLIC_URL}/Fall2.jpg`}
        alt="Description for Fall"
        className="special-effect"
      />
    </div>
  );
}

export default Fall;