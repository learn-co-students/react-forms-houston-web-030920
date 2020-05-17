import React from 'react';
import ReactDOM from 'react-dom';
import Form from './components/Form'
import ParentComponent from './components/ParentComponent.js'

ReactDOM.render(
  <div>
    <ParentComponent />
  </div>,
  document.getElementById('root')
);