import React, { Component } from "react";

class Header extends Component {
  state = {
    keywords: "",
    active: 'not_active',
  };

  inputChangehandler = (event) => {
    const value = event.target.value === '' ? 'not_active' : 'active'; 
    this.setState({
      active:value,
      keywords: event.target.value,
      
    });
  };

  render() {
    return (
      // <header style={{ background: `${this.state.active ? 'red' : 'green'}` }}>
         <header className={`${this.state.active}`}>
        <div className="logo">logo</div>
        <input onChange={this.inputChangehandler} />
      </header>
    );
  }
}

export default Header;
