import React, { Component } from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import SurfboardDetail from '../../components/SurfboardDetail';
import SurfboardForm from '../../components/SurfboardForm';
import './Surfboards.css';
import surfboards from '../../data/surfboards';
console.log(surfboards);

class Surfboards extends Component {

  render() {
    const renderSurfboardLinks = surfboards.map(board =>
      <NavLink 
        key={board.id}
        className="sidebarNavlink"
        to={`/surfboards/${board.id}`}
      >
        {board.brand} {board.model}
      </NavLink>
    )
    return (
      <div>
        <div className="sidebar">
          <h2>Surfboards</h2>
          <NavLink 
            className="sidebarNavlink"
            to="/surfboards/new"
          >
            Add Surfboard
          </NavLink>
          {renderSurfboardLinks}
          
        </div>
        <div className="mainContent">
          <Switch>
            <Route 
              path="/surfboards/new" 
              component={SurfboardForm}
            />
            <Route 
              path="/surfboards/:surfboardId" 
              component={SurfboardDetail}
            />
          </Switch>
        </div>
      </div>
    )
  }
}

export default Surfboards;