import React, { Component } from "react";

class Header extends Component {
  state = {
    name: "shehan",
    title: "The Keywords is",
    keywords: "",
    count: 0,
  };

  inputChangehandler = (event) => {
    this.setState({
      keywords: event.target.value,
    });
  };

  addOne() {
    //basic way to do this
    // this.setState({
    //   count: this.state.count + 1,
    // });

    // now we use like this

    this.setState((state, props) => ({
      count: state.count + 1,
    }));
  }

  render() {
    return (
      <header>
        <div className="logo">logo</div>
        <input onChange={this.inputChangehandler} />
        <div>{this.state.title}</div>
        <div>{this.state.keywords}</div>
        <br></br>
        <div>{this.state.count}</div>
        <div>
          <button onClick={(e) => this.addOne()}>Click Here</button>
        </div>
      </header>
    );
  }
}

export default Header;
