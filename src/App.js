import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'; //React-Router import
import Maker from './Maker';
import Home from './Home';
import Result from './Result';

class App extends Component {
  render() {
    return(
      <div>
        <BrowserRouter>
          <Route path="/" exact element={<Home/>}/>
          <Route path="/maker" element={<Maker/>}/>
          <Route path="/result" element={<Result/>}/>
        </BrowserRouter>
      </div>
      //화면이 안뜸 
    )
  }
}

export default App;