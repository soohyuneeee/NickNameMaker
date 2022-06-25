import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'; //React-Router import
import Maker from './Maker';
import Home from './Home';

class App extends Component {
  render() {
    return(
      <div>
        <BrowserRouter>
          <Route path="/" exact element={<Home/>}/>
          <Route path="/maker" element={<Maker/>}/>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;