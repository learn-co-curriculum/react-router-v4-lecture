import React, { Component } from 'react';
import surfboards from '../../data/surfboards';

// TODO: Find Surfboard from props

class SurfboardDetail extends Component {

  render() {
    return (
      <div className="mainContent">
        <h1>{surfboards[0].brand}</h1>
        <p>{surfboards[0].model}</p>
        <p>{surfboards[0].size}</p>
        <img 
          className="imageURL" 
          src={surfboards[0].imageURL} 
          alt={surfboards[0].model}
        />
      </div>
    )
  }
}

export default SurfboardDetail;