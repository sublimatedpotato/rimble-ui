import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from '../theme';
import Box from '../Box';

const size = props => {
  switch (props.size) {
    case 'small':
      return `
        height: 2em;
        width: 2em;
      `;
    case 'medium':
      return `
        height: 3em;
        width: 3em;
      `;
    case 'large':
      return `
        height: 4em;
        width: 4em;
      `;
    default:
      return ``;
  }
};

const StyledAvatar = styled(Box)`
  & {
    position: relative;
    overflow: hidden;
    border-radius: 100%;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url(${props => props.src});
  }

  ${size}
`;

const Avatar = props => <StyledAvatar {...props} />;

Avatar.defaultProps = {
  theme,
  size: '2rem',
  bg: 'grey',
  alt: 'Avatar',
};

Avatar.propTypes = {
  /**
   * Sets alt property on image for accessibility
   */
  alt: PropTypes.string,
  /**
   * Sets avatar height and width
   */
  size: PropTypes.string,
  /**
   * Sets avatar image
   */
  src: PropTypes.string.isRequired,
  /**
   * Sets theme
   */
  theme: PropTypes.object,
  /**
   * Sets the background color when the image isn't visible
   */
  bg: PropTypes.string,
  ...Box.propTypes,
};

Avatar.displayName = 'Avatar';

export default Avatar;
