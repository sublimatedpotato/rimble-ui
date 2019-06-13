import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Popper from '@d8660091/react-popper';
import theme from '../theme';
import Text from '../Text';

/**
 * Tooltip display a message near to an anchoring element when the user's mouse hovers or focus is set on anchoring element.
 */

const StyledTooltip = styled(Text)`
  & {
    background: ${props => (props.variant === 'dark' ? '#333' : '#FFF')};
    color: ${props => (props.variant === 'dark' ? '#FFF' : '#666')};
    border: ${props =>
      props.variant === 'dark' ? 'none' : '1px solid #CCCCCC'};
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    display: flex;
    align-items: center;
    min-height: 24px;
    margin: 4px;
    padding: 12px;
    line-height: 16px;
    font-size: 12px;
    z-index: 999999;
  }
`;

const Tooltip = props => {
  const options = {
    placement: props.placement,
    modifiers: {
      offset: {
        offset: props.offset,
      },
    },
  };

  const triggerElement = ({ setReference, toggle }) => (
    <span
      ref={setReference}
      onMouseEnter={toggle}
      onMouseLeave={toggle}
      children={props.children}
      style={{ display: 'inline-block' }}
    />
  );

  if (typeof window !== 'undefined') {
    return (
      <Popper
        options={options}
        renderRef={triggerElement}
        style={{ zIndex: 99999 }}
      >
        <StyledTooltip variant={props.variant} children={props.message} />
      </Popper>
    );
  } else {
    return props.children;
  }
};

StyledTooltip.defaultProps = {
  theme,
  fontFamily: 'sansSerif',
};

Tooltip.displayName = 'Tooltip';

Tooltip.defaultProps = {
  /** Sets the theme of tooltip. Options are light or dark. */
  variant: 'dark',
  /** Sets the placement of tooltip relative to anchoring element. Options are top, left, right, bottom. */
  placement: 'bottom',
  /** Sets the placement of tooltip relative to anchoring element. */
  offset: '0, 0',
  /** Sets the content of tooltip. Only accepts text and not markup. */
  message: 'props.message text',
};

Tooltip.propTypes = {
  /** Sets the theme of tooltip. Options are light or dark. */
  variant: PropTypes.string,
  /** Sets the placement of tooltip relative to anchoring element. Options are top, left, right, bottom. */
  placement: PropTypes.string,
  /** Sets the placement of tooltip relative to anchoring element. */
  offset: PropTypes.string,
  /** Sets the content of tooltip. Only accepts text and not markup. */
  message: PropTypes.string,
};

export default Tooltip;
