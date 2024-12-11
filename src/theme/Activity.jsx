import React from 'react';
import { useNavigate } from 'react-router-dom';

function Activity() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/activity');
  };

  return (
    <div className="image-item-season Activity" onClick={handleClick}>
      <img
        src={`${process.env.PUBLIC_URL}/img/Activity_2.jpg`}
        alt="Description for Activity"
        className="special-effect"
      />
    </div>
  );
}

export default Activity;
