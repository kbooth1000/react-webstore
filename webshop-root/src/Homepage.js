import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {NavLink, Route } from 'react-router-dom';

class Homepage extends Component {
  render() {

    return (
      <main>
      
      <div className="main-content">
      <div className="welcome">
          <h1>Welcome to my <br />
              Webstore
          </h1>
          <NavLink to={'/product'}>Product Page</NavLink>
      </div>
  </div>
  </main>
    );
  }
}

export default Homepage;
