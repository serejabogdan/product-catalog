import React from 'react';
import './App.css';
import Auth from './Auth/Auth';
import AddingProductForm from './AddingProductForm/AddingProductForm';
import Products from './Products/Products';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" render={() => <Auth isSignUp={true} />} />
          <Route path="/signIn" render={() => <Auth isSignUp={false} />} />
          <Route path="/products" component={Products} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
