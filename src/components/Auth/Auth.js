import React, {useEffect, useState} from 'react';
import {Card, Form, Button} from 'bootstrap-4-react';
import './Auth.css';
import {Link, useHistory} from 'react-router-dom';

import {auth} from '../../firebaseConfig';
import {connect} from 'react-redux';

import {setCurrentUser} from '../../redux/actions';
import {signIn, signUp} from '../../utils/auth';
import {PATH_PRODUCTS} from '../../utils/constants';

function Auth(props) {
  const {isSignUp} = props;
  const [userData, setUserData] = useState({email: 'a2@gmail.com', password: '123456'});
  const history = useHistory();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      props.setCurrentUser(user);
    });
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      if (isSignUp) {
        await signUp(userData.email, userData.password);
      } else {
        await signIn(userData.email, userData.password);
      }
      history.push(`/${PATH_PRODUCTS}`);
    } catch {
      console.error('Failed an operation');
    }
  }

  return (
    <div className="Auth">
      <Card>
        <Card.Body>
          <Card.Title>{isSignUp ? 'Регистрация' : 'Вход'}</Card.Title>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <label htmlFor="email-input">Электронный адрес</label>
              <Form.Input
                type="email"
                id="email-input"
                placeholder="Введите email"
                value={userData.email}
                required
                onChange={(e) => setUserData((state) => ({...state, email: e.target.value}))}
              />
            </Form.Group>
            <Form.Group>
              <label htmlFor="password-imput">Пароль</label>
              <Form.Input
                type="password"
                id="password-imput"
                placeholder="Введите пароль"
                value={userData.password}
                required
                onChange={(e) => setUserData((state) => ({...state, password: e.target.value}))}
              />
            </Form.Group>
            <Form.Group></Form.Group>
            <Button primary type="submit">
              Далее
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
