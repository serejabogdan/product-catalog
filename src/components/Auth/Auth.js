import React from 'react';
import {Card, Form, Button} from 'bootstrap-4-react';
import './Auth.css';

export default function Auth() {
  return (
    <div className="wrapper">
      <Card>
        <Card.Body>
          <Card.Title>Sign Up</Card.Title>
          <Form>
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
        </Card.Body>
      </Card>
    </div>
  );
}
