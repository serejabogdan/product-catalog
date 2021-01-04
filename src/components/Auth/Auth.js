import React, {useEffect, useState} from 'react';
import {Card, Form, Button} from 'bootstrap-4-react';
import './Auth.css';
import {Link, useHistory} from 'react-router-dom';

import {auth} from '../../firebaseConfig';
import {connect} from 'react-redux';

import {setCurrentUser} from '../../redux/actions';

function Auth(props) {
  const {isSignUp} = props;
  const [userData, setUserData] = useState({email: 'a2@gmail.com', password: '123456'});
  const history = useHistory();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      props.setCurrentUser(user);
      /* if (user) {
        history.push('/products');
      } */
    });
  }, []);

  function signup(email, password) {
    return auth.createUserWithEmailAndPassword(email, password);
  }

  function signin(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
  }

  async function signUpHandleSubmit(e) {
    e.preventDefault();

    try {
      await signup(userData.email, userData.password);
      history.push('/products');
    } catch {
      console.error('Failed to create an account');
    }
  }

  async function signInHandleSubmit(e) {
    e.preventDefault();

    try {
      await signin(userData.email, userData.password);
      history.push('/products');
    } catch {
      console.error('Failed to log in');
    }
  }

  return (
    <div className="Auth">
      <Card>
        <Card.Body>
          <Card.Title>{isSignUp ? 'Sign Up' : 'Sign In'}</Card.Title>
          <Form onSubmit={isSignUp ? signUpHandleSubmit : signInHandleSubmit}>
            <Form.Group>
              <label htmlFor="email-input">Email address</label>
              <Form.Input
                type="email"
                id="email-input"
                placeholder="Enter email"
                value={userData.email}
                onChange={(e) => setUserData((state) => ({...state, email: e.target.value}))}
              />
            </Form.Group>
            <Form.Group>
              <label htmlFor="password-imput">Password</label>
              <Form.Input
                type="password"
                id="password-imput"
                placeholder="Password"
                value={userData.password}
                onChange={(e) => setUserData((state) => ({...state, password: e.target.value}))}
              />
            </Form.Group>
            <Form.Group></Form.Group>
            <Button primary type="submit">
              Submit
            </Button>
          </Form>
          <div className="signin-link">
            {isSignUp ? <Link to="/">Войти в аккаунт</Link> : <Link to="/signUp">Зарегистрироваться</Link>}
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

const mapDispatchToProps = {
  setCurrentUser
};

export default connect(null, mapDispatchToProps)(Auth);
