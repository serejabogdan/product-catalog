import React from 'react';
import {Card, Form, Button} from 'bootstrap-4-react';
import './Auth.css';
import {Link} from 'react-router-dom';

export default function Auth(props) {
  const {isSignUp} = props;
  return (
    <div className="wrapper">
      <Card>
        <Card.Body>
          <Card.Title>{isSignUp ? 'Sign Up' : 'Sign In'}</Card.Title>
          <Form
            onSubmit={
              isSignUp
                ? (e) => {
                    e.preventDefault();
                    console.log('Sign Up');
                  }
                : (e) => {
                    e.preventDefault();
                    console.log('Sign In');
                  }
            }
          >
            <Form.Group>
              <label htmlFor="email-input">Email address</label>
              <Form.Input type="email" id="email-input" placeholder="Enter email" />
            </Form.Group>
            <Form.Group>
              <label htmlFor="password-imput">Password</label>
              <Form.Input type="password" id="password-imput" placeholder="Password" />
            </Form.Group>
            <Form.Group></Form.Group>
            <Button primary type="submit">
              Submit
            </Button>
          </Form>
          <div className="signin-link">
            {isSignUp ? <Link to="/signIn">Войти в аккаунт</Link> : <Link to="/">Зарегистрироваться</Link>}
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}
