import React, { Component } from 'react';
import './Surfboards.css';
import surfboards from '../../data/surfboards.json';
console.log(surfboards);

class Surfboards extends Component {

  render() {
    return (
      <div className="sidebar">
        <h2>Surfboards</h2>
        {/*
          TODO: Add Links For Surfboard Details
        */}
      </div>
      
    )
  }
}

export default Surfboards;