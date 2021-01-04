import React from 'react';
import './Error.css';
import {Alert} from 'bootstrap-4-react';

export default function Error({error}) {
  return (
    <>
      {error && (
        <Alert className="alert" danger>
          {error.message}
        </Alert>
      )}
    </>
  );
}
