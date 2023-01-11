import React, { Component } from "react";

class Header extends Component {
  inputChangeHandler(event, name) {
    console.log(event.target.value);
    console.log(name);
  }

  render() {
    return (
      <header>
        <div className="logo">logo</div>
        <input onChange={(e) => this.inputChangeHandler(e, "Ron")} />
      </header>
    );
  }
}

export default Header;
