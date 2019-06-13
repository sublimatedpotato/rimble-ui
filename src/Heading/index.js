import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { COMMON, TYPOGRAPHY } from '../constants';
import theme from '../theme';

const defaultProps = {
  theme,
  fontFamily: 'sansSerif',
  fontWeight: 3,
  lineHeight: 'title',
  m: 0,
};

// Heading
const StyledHeading = styled.h1`
  ${TYPOGRAPHY}
  ${COMMON}
`;

const Heading = props => <StyledHeading {...props} />;

Heading.defaultProps = {
  ...defaultProps,
  as: 'h3',
  fontSize: 4,
};

Heading.propTypes = {
  ...COMMON.propTypes,
  ...TYPOGRAPHY.propTypes,
  /**
   * Sets theme
   */
  theme: PropTypes.object,
};

Heading.displayName = 'Heading';

// H1
Heading.h1 = styled(Heading)``;
Heading.h1.defaultProps = {
  ...defaultProps,
  as: 'h1',
  fontSize: 6,
};
Heading.h1.displayName = 'Heading.h1';

// H2
Heading.h2 = styled(Heading)``;
Heading.h2.defaultProps = {
  ...defaultProps,
  as: 'h2',
  fontSize: 5,
};
Heading.h2.displayName = 'Heading.h2';

// H3
Heading.h3 = styled(Heading)``;
Heading.h3.defaultProps = {
  ...defaultProps,
  as: 'h3',
  fontSize: 4,
};
Heading.h3.displayName = 'Heading.h3';

// H4
Heading.h4 = styled(Heading)``;
Heading.h4.defaultProps = {
  ...defaultProps,
  as: 'h4',
  fontSize: 3,
};
Heading.h4.displayName = 'Heading.h4';

// H5
Heading.h5 = styled(Heading)``;
Heading.h5.defaultProps = {
  ...defaultProps,
  as: 'h5',
  fontSize: 2,
};
Heading.h5.displayName = 'Heading.h5';

// H6
Heading.h6 = styled(Heading)``;
Heading.h6.defaultProps = {
  ...defaultProps,
  as: 'h6',
  fontSize: 1,
};
Heading.h6.displayName = 'Heading.h6';

export default Heading;
