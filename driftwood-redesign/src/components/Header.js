import React, { Component } from 'react';
import logo from "../img/logowhite.png"

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <div className='logoBanner'>
          <hr/>
          <img src={logo} alt="driftwood logo"/>
          <hr/>
        </div>
      </div>
    );
  }
}

export default Header;
