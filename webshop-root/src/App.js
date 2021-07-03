import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Homepage from './Homepage';
import Product from './Product';
// import Main from './Main';
import {
    HashRouter as Router,
    Route,
  } from 'react-router-dom'

class App extends Component {
    render() {
        return (
            <Router>
                <div className="container" >
                    <Header />
                    <Route path="/" exact component={Homepage} />
                    <Route path="/product" component={Product} />
                    <Route path="/#/product/:product" component={Product} />
                </div>
            </Router>
        );
    }
}

export default App;
