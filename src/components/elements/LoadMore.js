import React from 'react';
import PropTypes from 'prop-types';

import { StyledLoadMore } from '../styles/StyledLoadMore';

const LoadMore = ({ text, handelLoad }) => (
  <StyledLoadMore type="button" onClick={handelLoad}>
    {text}
  </StyledLoadMore>
)

LoadMore.propTypes = {
  text: PropTypes.string,
  callback: PropTypes.func,
}

export default LoadMore;