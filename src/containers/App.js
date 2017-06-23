import React, { Component } from 'react';
import Surfboards from './Surfboards';
import SurfboardDetail from '../components/SurfboardDetail';
import SurfboardForm from '../components/SurfboardForm';
import Navbar from '../components/Navbar';
import './App.css';

class App extends Component {
  render() {
    return (
        <div className="App">
          <div className="App-header">
            <h2>Surboard Collection</h2>
            <Navbar />
          </div>
          <div>

          </div>
          {/*
            Add Routes for:
              /
              /surfboards
              /about
          */}
        </div>
    );
  }
}

export default App;
