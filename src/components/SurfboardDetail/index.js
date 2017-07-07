import React, { Component } from 'react'
import SurfboardsData from '../../SurfboardsData'

class SurfboardDetail extends Component {
  constructor() {
    super()
    this.surfboards = SurfboardsData
  }

  render() {
  const id = this.props.match.params.boardId
  const board = this.surfboards.find((board) => {return board.id.toString() === id})
    return (
      <div className="mainContent">
        <h1>{board.brand}</h1>
        <p>{board.model}</p>
        <p>{board.size}</p>
        <img
          className="imageURL"
          src={board.imageURL}
          alt={board.model}
        />
      </div>
    )
  }
}

export default SurfboardDetail;
