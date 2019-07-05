import React, { Component } from 'react';
import './App.css';
import HomePage from './components/HomePage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProductsHome from './components/ProductsHome';
import SingleProduct from './components/SingleProduct';
import EventPage from './components/EventPage'
import Contact from './components/Contact'; 
import Header from './components/Header';
import SingleEvents from './components/SingleEvent';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (
      <Router>
        <Switch>
        <Route path='/products' render={()=> {return <div><ProductsHome /></div>}} />
        
        
        <Route path='/single-product' render={()=> {return <div><SingleProduct /></div>}} />
        
        <Route path='/events' render={()=> {return <div><EventPage /></div>}} />
        <Route path='/SingleEvent' render={()=> {return <div><SingleEvents /></div>}} />

        <Route path='/contact' render={()=> {return <div><Contact /></div>}} />
        <Route path='/' render={()=> <div><HomePage /></div>} />
        </Switch>
      </Router>
    );
  }
}

export default App;
