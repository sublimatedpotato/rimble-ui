import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { themeGet, height, fontFamily, boxShadow } from 'styled-system';
import theme from '../theme';
import Box from '../Box';

const StyledTable = styled(Box)`
  & {
    table-layout: fixed;
    border-collapse: collapse;
  }

  th,
  td {
    border: solid;
    border-width: 1px 0;
    border-color: inherit;
    text-align: left;
    padding: 0 2rem;
  }

  tbody tr {
    height: ${themeGet('height[3]', '4rem')};
  }

  thead tr,
  tfoot tr {
    height: ${themeGet('height[2]', '3rem')};
  }

  thead th {
    font-weight: ${themeGet('fontWeights.3', 'bold')};
    text-transform: uppercase;
  }

  ${fontFamily}
  ${height}
  ${boxShadow}
`;

const Table = props => <StyledTable {...props} />;

Table.defaultProps = {
  theme,
  as: 'table',
  width: 1,
  border: 1,
  borderColor: 'grey',
  fontSize: 1,
  fontWeight: 2,
  fontFamily: 'sansSerif',
  color: 'dark-gray',
  boxShadow: 1,
};

Table.propTypes = {
  ...Box.propTypes,
  /**
   * Sets theme
   */
  theme: PropTypes.object,
};

Table.displayName = 'Table';

export default Table;
