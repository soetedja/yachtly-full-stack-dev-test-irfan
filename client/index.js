import React from "react";
import ReactDOM from "react-dom";
import App from "./containers/app";
import { BrowserRouter, Route, Link } from 'react-router-dom'

ReactDOM.render(  
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('react-container')
 );