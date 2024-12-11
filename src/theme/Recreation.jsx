import React from 'react';
import { useNavigate } from 'react-router-dom';

function Recreation() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/recreation');
  };

  return (
    <div className="image-item-season VacationSpots" onClick={handleClick}>
      <img
        src={`${process.env.PUBLIC_URL}/img/VacationSpots_2.jpg`}
        alt="Description for VacationSpots"
        className="special-effect"
      />
    </div>
  );
}

export default Recreation;
