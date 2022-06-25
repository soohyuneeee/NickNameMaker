import React, { Component } from 'react';
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom'; //React-Router import
import Maker from './Maker.js';
import Home from './Home.js';
import Result from './Result.js';

class App extends Component {
  render() {
    return(
      <div>
        <Router>
        <Routes>
          <Route path="/" exact={true} element={<Home/>}/>
          <Route path="/maker" element={<Maker/>}/>
          <Route path="/result" element={<Result/>}/>
        </Routes>
        </Router>
      </div>
      //화면이 안뜸 
    )
  }
}

export default App;