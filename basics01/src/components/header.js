import React, { Component } from "react";

class Header extends Component {
  state = {
    keywords: "",
  };

  inputChangehandler = (event) => {
    this.setState({
      keywords: event.target.value,
    });
  };

  render() {
    return (
      <header>
        <div className="logo">logo</div>
        <input onChange={this.inputChangehandler} />
      </header>
    );
  }
}

export default Header;
