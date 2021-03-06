import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { display } from 'styled-system';
import { COMMON, TYPOGRAPHY } from '../constants';
import theme from '../theme';
import Box from '../Box';

export const caps = props =>
  props.caps ? { textTransform: 'uppercase' } : null;

export const italic = props => (props.italic ? { fontStyle: 'italic' } : null);

const StyledText = styled(Box)`
  ${TYPOGRAPHY}
  ${COMMON}
  ${display}

  ${caps}
  ${italic}
`;

const Text = props => <StyledText {...props} />;

Text.defaultProps = {
  theme,
  color: 'copyColor',
  fontFamily: 'sansSerif',
  fontSize: 2,
  fontWeight: 2,
  lineHeight: 'copy',
  textAlign: 'left',
};

Text.propTypes = {
  ...TYPOGRAPHY.propTypes,
  ...Box.propTypes,
  ...display.propTypes,
  theme: PropTypes.object,
};

Text.displayName = 'Text';

Text.span = styled(Text)``;
Text.span.defaultProps = {
  ...Text.defaultProps,
  as: 'span',
};

Text.p = styled(Text)``;
Text.p.defaultProps = {
  ...Text.defaultProps,
  as: 'p',
};

Text.s = styled(Text)``;
Text.s.defaultProps = {
  ...Text.defaultProps,
  /**
   * Sets element type
   */
  as: 's',
};

export default Text;
