import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import FormComponent from './Task-1/form';
import Elements from './Task-1/formelements';
import Number from './Task-2/Number';
import Button from './Task-4/Button';
import Login from './Task-5/Login';
import Structure from './Task-3/Structure';
// import Email from './Task-6/Email';
// import Signup from './Task-6/Signup';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Elements />
    <FormComponent />
    <formelements />
    <Number />
    <Structure />
    <Button />
    <Login />
    {/* <Email />
    <Signup /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
