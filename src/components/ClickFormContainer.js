import React from 'react';
import { connect } from 'react-redux';

// Actions
import { incrementClicks, decrementClicks } from '../actions/index.js';

// Components
import ClickForm from './ClickForm';

const ClickFormContainer = connect(
  null,
  (dispatch) => ({
    onLeftClick: () => dispatch(incrementClicks()),
    onRightClick: () => dispatch(decrementClicks()),
  })
)(ClickForm);

export default ClickFormContainer;
