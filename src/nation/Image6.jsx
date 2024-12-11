import React from 'react';

function Image6() {
  const handleClick = () => {};

  return (
    <div className="image-item image6" onClick={handleClick}>
      <img
        src={`${process.env.PUBLIC_URL}/img/india.jpg`}
        alt="Description for Image 6"
        className="special-effect"
      />
    </div>
  );
}

export default Image6;
