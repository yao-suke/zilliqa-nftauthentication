import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; 
import ContextContainer from "./functions/contextContainer";

ReactDOM.render(
  <React.StrictMode> 
    <ContextContainer.Provider>
    <App /> 
    </ContextContainer.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

