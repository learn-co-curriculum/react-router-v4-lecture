import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Navbar from '../components/Navbar';
import About from '../components/About'
import SurfboardIndex from '../components/SurfboardIndex'
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="App-header">
            <h2>Surboard Collection</h2>
              <Navbar />
          </div>

        <div>
            <Route
              exact
              path="/"
              render={() => <h2 className="pageHeader">Come see all my surfboards!! 🤙</h2>}
            />
            <Route
              exact path="/about"
              render={About}
            />
            <Route
              path="/surfboards"
              component={SurfboardIndex}
            />
          </div>
          </div>
      </Router>
    )
  }
}

export default App;
