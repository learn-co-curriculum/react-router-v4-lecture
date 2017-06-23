import React, { Component } from 'react';
import surfboards from '../../data/surfboards';

class SurfboardDetail extends Component {

  render() {
    const surfboard = surfboards.filter(board => board.id == this.props.match.params.surfboardId)[0]; 

    return (
      <div className="mainContent">
        <h1>{surfboard.brand}</h1>
        <p>{surfboard.model}</p>
        <p>{surfboard.size}</p>
        <img 
          className="imageURL" 
          src={surfboard.imageURL} 
          alt={surfboard.model}
        />
      </div>
    )
  }
}

export default SurfboardDetail;