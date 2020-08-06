import React from 'react';
import './App.css';
import {BrowserRouter as Router ,Route} from 'react-router-dom';
import Login from './components/login/login';
import SignUp from './components/signup/signup';
import Home from './components/home/home';
import Dashboard from './components/dashboard/dashboard';
import Product from './components/products/product';

class App extends React.Component {
  render(){
    return (
      <Router>
              <Route path="/" component={Home}></Route>
              <Route path="/login" component={Login}></Route>
              <Route path="/signup" component={SignUp}></Route>
              <Route path="/dashboard" component={Dashboard}></Route>
              <Route path="/products"  component={Product}></Route>
      </Router>
      );
  }
}

export default App;
