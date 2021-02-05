import React from 'react';
import PropTypes from 'prop-types';

import { StyledGrid, StyledGridContent } from '../styles/StyledGrid';

const Grid = ({ text, children }) => (
  <StyledGrid>
    <h1>{text}</h1>
    <StyledGridContent>{children}</StyledGridContent>
  </StyledGrid>
)

Grid.propTypes = {
  header: PropTypes.string,
}

export default Grid;