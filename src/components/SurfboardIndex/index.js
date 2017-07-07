import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import SurfboardsData from '../../SurfboardsData'
import { Route } from 'react-router-dom'
import SurfboardDetail from '../SurfboardDetail'
import SurfboardFilter from '../SurfboardSort'

class SurfboardIndex extends Component {
  constructor(props) {
    super(props)
    this.surfboards = SurfboardsData
    this.state = {
      input: ''
  }
}

handleSubmit = (input) => {
  this.setState({
    input: input
  })
}

filteredSurfboards = () => {
  return this.state.input === '' ? this.surfboards :
  this.surfboards.filter((board) => board.brand.toLowerCase().includes(this.state.input.toLowerCase()) || board.model.toLowerCase().includes(this.state.input.toLowerCase()))
}

  render() {

    const surfboards = this.filteredSurfboards().map((board) =>
    <NavLink
      key={board.id}
      to={`/surfboards/${board.id}`}>
      <p className="sidebarNavlink">{board.model} - {board.brand}
      </p>
    </NavLink>)

    return (
      <div>
        <div className="sidebar">
          <SurfboardFilter handleSubmit={this.handleSubmit} />
          {surfboards}
        </div>
        <div className="mainContent">
              <Route
                path="/surfboards/:boardId" component={SurfboardDetail}
              />
        </div>
      </div>

    )
  }
}

export default SurfboardIndex
