import React from 'react';

function Image5() {
  const handleClick = () => {};

  return (
    <div className="image-item image5" onClick={handleClick}>
      <img
        src={`${process.env.PUBLIC_URL}/img/russia.jpg`}
        alt="Description for Image 5"
        className="special-effect"
      />
    </div>
  );
}

export default Image5;
