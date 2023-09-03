import React from "react";
export { Component } from "react";

class ClassComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  onPlus = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  onMinus = () => {
    this.setState({
      count: this.state.count -1,
    });
  };
  onReset = () => {
    this.setState({
      count: 0,
    });
  };

  render() {
    const { firstName, secondName, link } = this.props;
    return (
      <div className="w-50 mx-auto">
        <div className="border p-3 container mt-5">
          <h4>
            Mening ismim- {firstName} , sharifim- {secondName}
          </h4>
          <a href={link}>Mening Instagram sahifam</a>
          <div className="mt-3">
            <button onClick={this.onPlus} className="btn btn-outline-success">
              +1
            </button>
            <button onClick={this.onMinus} className="btn btn-outline-success">
              -1
            </button>
            <button onClick={this.onReset} className="btn btn-outline-success">
              Reset
            </button>
            <p className="mt-3">{this.state.count}</p>
          </div>
        </div>
      </div>
    );
  }
}
export default ClassComp;
