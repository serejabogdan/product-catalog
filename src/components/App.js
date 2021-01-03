import React from 'react';
import './App.css';
import Auth from './Auth/Auth';
import ProductForm from './ProductForm/ProductForm';
import Products from './Products/Products';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import {connect} from 'react-redux';

function App({isUserAuth}) {
  return (
    <div className="App">
      <Router>
        <Switch>
          {/* <PrivateRoute path="/products" isUserAuth={isUserAuth} component={Products} /> */}
          <Route path="/form" component={ProductForm} />
          <Route path="/products" component={Products} />
          <Route exact path="/" render={() => <Auth isSignUp={true} />} />
          <Route path="/signIn" render={() => <Auth isSignUp={false} />} />
        </Switch>
      </Router>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    isUserAuth: state.auth.currentUser
  };
};

export default connect(mapStateToProps)(App);
