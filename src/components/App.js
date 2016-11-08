import React from 'react';

import ClickForm from './ClickForm';
import ClickCount from './ClickCount';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {clickCount: 0};

    this.incrementClick = this.incrementClick.bind(this);
    this.decrementClick = this.decrementClick.bind(this);
  }

  incrementClick() {
    this.setState(
      (prevState) => ({
        clickCount: prevState.clickCount + 1
      })
    );
  }

  decrementClick() {
    this.setState(
      (prevState) => ({
        clickCount: prevState.clickCount - 1
      })
    );
  }

  render() {
    return (
      <div>
        <ClickForm
          onLeftClick={ this.incrementClick }
          onRightClick={ this.decrementClick } />
        <ClickCount count={this.state.clickCount} />
      </div>
    )
  }
};

export default App;
