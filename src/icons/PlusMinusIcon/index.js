/* eslint-disable react/no-unknown-property */
import React from 'react';
import PropTypes from 'prop-types';

export default function PlusMinusIcon({
  width,
  height,
  className,
  strokeColour,
  strokeWidth,
  isPlus
}) {
  const iconStyles = {
    stroke: strokeColour
  };

  return (
    <svg
      css={iconStyles}
      className={className}
      width={width}
      height={height}
      viewBox="0 0 100 100"
    >
      <line x1="32.5" y1="50" x2="67.5" y2="50" stroke-width={strokeWidth} />
      {isPlus && (
        <line x1="50" y1="32.5" x2="50" y2="67.5" stroke-width={strokeWidth} />
      )}
    </svg>
  );
}

PlusMinusIcon.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  className: PropTypes.string,
  strokeColour: PropTypes.string,
  strokeWidth: PropTypes.string,
  isPlus: PropTypes.bool
};

PlusMinusIcon.defaultProps = {
  width: '24',
  height: '24',
  className: '',
  strokeColour: 'black',
  strokeWidth: '5',
  isPlus: true
};
