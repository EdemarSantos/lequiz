import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';

const textoDaLogo='Le Quiz';

function Logo({ className }) {
  return (
    <svg height="100" width="100">
      <circle cx="50" cy="50" r="40" stroke="#9c27b0" strokeWidth="4" fill="#ba68c8" />
      <ellipse cx="50" cy="50" rx="50" ry="25" fill="#ba68c8" />
      <text x="25" y="55" fill="#fff">
        {textoDaLogo}
      </text>
      <circle cx="0" cy="50" r="2" fill="#fff">
        <animate attributeName="cx" from="0" to="300"
          dur="20s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

Logo.propTypes = {
  className: PropTypes.string.isRequired,
};

const QuizLogo = styled(Logo)`
  margin: auto;
  display: block;
  @media screen and (max-width: 500px) {
    margin: 0;
  }
`;

export default QuizLogo;
