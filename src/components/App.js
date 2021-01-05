import React from 'react';
import './App.css';
import Auth from './Auth/Auth';
import ProductForm from './ProductForm/ProductForm';
import Products from './Products/Products';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import {connect} from 'react-redux';
import Menu from './Menu/Menu';
import {PATH_CHANGE_FORM, PATH_FORM, PATH_PRODUCTS} from '../utils/constants';

function App({isUserAuth}) {
  return (
    <div className="App">
      <Router>
        {isUserAuth && <Menu />}
        <Switch>
          <PrivateRoute path={`/${PATH_PRODUCTS}`} isUserAuth={isUserAuth} component={Products} />
          <PrivateRoute path={`/${PATH_FORM}`} isDefaultForm={true} isUserAuth={isUserAuth} component={ProductForm} />
          <PrivateRoute
            path={`/${PATH_CHANGE_FORM}`}
            isDefaultForm={false}
            isUserAuth={isUserAuth}
            component={ProductForm}
          />
          {isUserAuth && <Redirect exact from="/" to={`/${PATH_PRODUCTS}`} />}
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
