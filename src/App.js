import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; //React-Router import
import Maker from './Maker.js';
import Home from './Home.js';
import Result from './Result.js';
import Header from './Header.js';

class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact={true} element={<Home />} />
          <Route path="/maker" element={<Maker />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </Router>
    )
  }
}

export default App;