import React from 'react';
import ProTypes from 'prop-types';

const Loader = (props) => (
  <div className="loader">
    <img src="/images/ball.svg" alt="loading" />
    <h2>{props.message}</h2>
  </div>
)
Loader.propTypes = {
  message: ProTypes.string
};
export default Loader;