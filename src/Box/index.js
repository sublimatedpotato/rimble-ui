import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { opacity } from 'styled-system';
import { COMMON, LAYOUT, POSITION, FLEXBOX, BORDERS } from '../constants';
import theme from '../theme';

const StyledBox = styled.div`
  & {
    box-sizing: border-box;
  }

  ${COMMON}
  ${LAYOUT}
  ${POSITION}
  ${FLEXBOX}
  ${BORDERS}
  ${opacity}
`;

const Box = props => <StyledBox {...props} />;

Box.defaultProps = {
  theme,
};

Box.propTypes = {
  /**
   * Sets theme
   */
  theme: PropTypes.object,
  ...COMMON.propTypes,
  ...LAYOUT.propTypes,
  ...POSITION.propTypes,
  ...FLEXBOX.propTypes,
  ...BORDERS.propTypes,
};

Box.displayName = 'Box';

export default Box;
