import React from 'react';
import { connect } from 'react-redux';

// Components
import ClickCount from './ClickCount';

const ClickCountContainer = connect(
  (state) => {
    return {
    count: state.clicks
  }}
)(ClickCount);

export default ClickCountContainer;
