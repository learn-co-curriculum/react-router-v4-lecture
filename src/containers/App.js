import React, { Component } from 'react';
import Surfboards from './Surfboards';
import SurfboardDetail from '../components/SurfboardDetail';
import SurfboardForm from '../components/SurfboardForm';
import Navbar from '../components/Navbar';
import './App.css';
import {Route} from 'react-router-dom'

class App extends Component {
  render() {
    return (
        <div className="App">
          <div className="App-header">
            <h2>Surboard Collection</h2>
            <Navbar />
          </div>
          <div>
            <Route path="/surfboards" component={Surfboards}/>
            <Route path="/about" render={()=>(<h1>About surfboards</h1>)}/>
          </div>
        </div>
    );
  }
}

export default App;
