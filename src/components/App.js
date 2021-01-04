import React from 'react';
import './App.css';
import Auth from './Auth/Auth';
import ProductForm from './ProductForm/ProductForm';
import Products from './Products/Products';
import {HashRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import {connect} from 'react-redux';
import Menu from './Menu/Menu';

function App({isUserAuth}) {
  return (
    <div className="App">
      <Router>
        {isUserAuth && <Menu />}
        <Switch>
          <PrivateRoute path="/products" isUserAuth={isUserAuth} component={Products} />
          <PrivateRoute path="/form" isDefaultForm={true} isUserAuth={isUserAuth} component={ProductForm} />
          <PrivateRoute path="/change-form" isDefaultForm={false} isUserAuth={isUserAuth} component={ProductForm} />
          {isUserAuth && <Redirect exact from="/" to="/products" />}
          <Route path="/signUp" render={() => <Auth isSignUp={true} />} />
          <Route path="/" render={() => <Auth isSignUp={false} />} />
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
