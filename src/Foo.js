import React, { PureComponent } from "react";

class Foo extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }
  handleClick = () => {
    const { count } = this.state;
    this.setState({
      count: count + 1
    });
  };
  render() {
    const { count } = this.state;
    return (
      <div>
        <div data-testid="test-clicks">{count} clicks</div>
        <button onClick={this.handleClick}>
          Increment
        </button>
      </div>
    );
  }
}

export default Foo;
