import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Surfboards from './Surfboards';
import SurfboardDetail from '../components/SurfboardDetail';
import SurfboardForm from '../components/SurfboardForm';
import Navbar from '../components/Navbar';
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

          </div>
          <Route 
            exact
            path="/" 
            render={() => <h2 className="pageHeader">Welcome to the Surfboard collection app</h2>} 
          />
          <Route 
            path="/surfboards" 
            component={Surfboards} 
          />
          <Route 
            path="/about" 
            render={() => <h2 className="pageHeader">This App allows you to store your surfboard collection details</h2>} 
          />
        </div>
      </Router>
    );
  }
}

export default App;
