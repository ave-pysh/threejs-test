import React from 'react';

const Options = ({
  height,
  radius,
  segments,
  isSmooth,
  setHeight,
  setRadius,
  setSegments,
  setIsSmooth,
}) => {
  const handleHeightChange = (event) => {
    setHeight(event.target.value);
  };

  const handleRadiusChange = (event) => {
    setRadius(event.target.value);
  };

  const handleSegmentsChange = (event) => {
    setSegments(event.target.value);
  };

  return (
    <form>
      <p>
        <label htmlFor="height">Height: </label>
        <input
          type="text"
          name="height"
          id="height"
          value={height}
          onChange={handleHeightChange}
        />
      </p>
      <p>
        <label htmlFor="radius">Radius: </label>
        <input
          type="text"
          name="radius"
          id="radius"
          value={radius}
          onChange={handleRadiusChange}
        />
      </p>
      <p>
        <label htmlFor="segments">Segments: </label>
        <input
          type="text"
          name="segments"
          id="segments"
          value={segments}
          onChange={handleSegmentsChange}
        />
      </p>
      <p>
        <label htmlFor="smooth">Smooth: </label>
        <input
          type="checkbox"
          name="smooth"
          id="smooth"
          value={isSmooth}
          onChange={() => setIsSmooth(!isSmooth)}
        />
      </p>
    </form>
  );
};

export default Options;
