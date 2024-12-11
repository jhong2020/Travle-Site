import React from 'react';
import { useNavigate } from 'react-router-dom';

function Epicurism() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/epicurism');
  };

  return (
    <div className="image-item-season GourmetTrip" onClick={handleClick}>
      <img
        src={`${process.env.PUBLIC_URL}/img/GourmetTrip_3.jpg`}
        alt="Description for GourmetTrip"
        className="special-effect"
      />
    </div>
  );
}

export default Epicurism;
