import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; //React-Router import
import Maker from './Components/pages/Maker/Maker';
import Home from './Components/pages/Home/Home';
import Result from './Components/pages/Result/Result';
import Header from './Components/pages/Header/Header';
import Login from './Components/pages/Login/Login.js';
import Signup from './Components/pages/Signup/Signup';

class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact={true} element={<Home />} />
          <Route path="/maker" element={<Maker />} />
          <Route path="/result" element={<Result />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    )
  }
}

export default App;