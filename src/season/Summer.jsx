import React from 'react';
import { useNavigate } from 'react-router-dom';

function Summer() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/summer');
  };

  return (
    <div className="image-item-season Summer" onClick={handleClick}>
      <img
        src={`${process.env.PUBLIC_URL}/Summer2.jpg`}
        alt="Description for Summer_2"
        className="special-effect"
      />
    </div>
  );
}

export default Summer;