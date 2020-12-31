import React from 'react';
import './App.css';
import Auth from './Auth/Auth';
import AddingProductForm from './AddingProductForm/AddingProductForm';

function App() {
  return (
    <div className="App">
      <Auth isSignUp={true} />
    </div>
  );
}

export default App;
