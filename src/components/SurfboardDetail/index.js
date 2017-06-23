import React, { Component } from 'react';

class SurfboardDetail extends Component {

  render() {
    const { surfboard } = this.props; 

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