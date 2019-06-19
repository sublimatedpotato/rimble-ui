import React from 'react';
import styled from 'styled-components';

import defaultTheme from '../theme';
import ExpandMore from 'rmdi/lib/ExpandMore';
import { StyledInput } from '../Input';

const StyledWrapper = styled.span`
  & {
    position: relative;
  }

  > ${ExpandMore} {
    position: absolute;
    right: 1rem;
    top: 0;
    bottom: 0;
    pointer-events: none;
    margin: auto;
  }
`;

const StyledSelect = styled(StyledInput)`
  & {
    appearance: none;
    padding: 0 3rem 0 1rem;
  }
`;

const Select = props => (
  <StyledWrapper>
    <StyledSelect {...props} as={'select'}>
      {props.items.map((item, i) => (
        <option key={i} value={item}>
          {item}
        </option>
      ))}
    </StyledSelect>
    <ExpandMore />
  </StyledWrapper>
);

Select.defaultProps = {
  theme: defaultTheme,
  as: 'select',
};

Select.displayName = 'Select';

export default Select;
