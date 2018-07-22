import React, { Component } from 'react';
import {Link} from "react-router-dom"

class Navbar extends Component {
  render() {
    return (
      <div className="Navbar">
        <div className="brand navBrand">
        <Link to="/">Driftwood Estate Winery</Link>
          
        </div>
        <div className="headerLinks">
          <Link to="/"><p>Home</p></Link><p> | </p>
          <Link to="/wines"><p>Our Wines</p></Link><p> | </p>
          <Link to="/rules"><p>House Rules</p></Link><p> | </p>
          <Link to="/wineclub"><p>Wine Club</p></Link>
        </div>
      </div>
    );
  }
}

export default Navbar;
