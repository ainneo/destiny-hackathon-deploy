import React from 'react';
import PropTypes from 'prop-types';

import { StyledLoadMore } from '../styles/StyledLoadMore';

const LoadMore = ({ text, callback }) => (
  <StyledLoadMore type="button" onClick={callback}>
    {text}
  </StyledLoadMore>
)

LoadMore.propTypes = {
  text: PropTypes.string,
  callback: PropTypes.func,
}

export default LoadMore;