import React, { Component } from 'react';
import Layot from './components/layout';
     

import './App.css';
import Headers from './components/header';




class App extends Component {
  render() {
    return (
      <div className="Main">
     <Headers />
          <Layot/>
          
      </div>
    );
  }
}

export default App;
