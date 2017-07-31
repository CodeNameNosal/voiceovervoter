import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', () => {
  let reactElement = document.getElementById('app')

  if (reactElement) {
    ReactDOM.render(
      <h1>Greetings from React!</h1>,
      reactElement
    );
  }
})
