import React from 'react';

const ClickForm = ({
  onLeftClick,
  onRightClick
  }) => (
  <div>
    <p>Click the button:</p>
    <button
      onClick={onLeftClick}
      onContextMenu={(e) => {
        e.preventDefault();
        onRightClick();
      }}
    >
      Click
    </button>
  </div>
);

export default ClickForm;
