import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { variant } from 'styled-system';

import theme from '../theme';
import Box from '../Box';
import Text from '../Text';
import Link from '../Link';

let lastId = 0;
const newID = (prefix = 'id') => `${prefix}${lastId++}`;

const flashVariant = variant({
  key: 'messageStyle',
});

const StyledFlash = styled(Box)`
  ${flashVariant}

  & {
    position: relative;
  }

  ${Link} {
    font-size: inherit;
    cursor: pointer;
    color: inherit;
    &:hover {
      color: inherit;
    }
  }
`;

const Flash = ({ className, children, ...props }) => {
  const status = props.variant;
  const id = newID('Flash');
  const contentID = `${id}Content`;
  let ariaRoleType = 'status';

  switch (status) {
    case 'warning':
      ariaRoleType = 'alert';
      break;
    case 'danger':
      ariaRoleType = 'alert';
      break;
    default:
    // invalid status
  }

  return (
    <StyledFlash
      className={className}
      tabIndex={0}
      role={ariaRoleType}
      aria-live="polite"
      aria-describedby={contentID}
      {...props}
    >
      <Text color={'inherit'} display={'inherit'} id={contentID}>
        {children}
      </Text>
    </StyledFlash>
  );
};

Flash.defaultProps = {
  theme,
  variant: 'base',
  p: '3',
  border: '1',
  borderRadius: 1,
  width: '100%',
};

Flash.propTypes = {
  /**
   * Sets the colors of the background, text and links
   */
  variant: PropTypes.oneOf(['base', 'success', 'warning', 'danger', 'info']),
  ...Box.propTypes,
};

Flash.displayName = 'Flash';

export default Flash;
