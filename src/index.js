import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
// import your BrowserRouter as Router inside your `index.js` file.
import { BrowserRouter as Router } from "react-router-dom";


ReactDOM.render(
// wrap your app with the router - renames component to router inside file 
<Router>
<App />
</Router>,
document.getElementById('root'));
