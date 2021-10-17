import React from 'react'
import ReactDOM from 'react-dom';
import Button from '@mui/material/Button'; 
import SignIn from './components/SignInPage';  
import Dashboard from './pages/Dashboard/Dashboard';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

function App() {
  return ( 
    <Router>   
      
      <div className = "App">  
      
      <Route path="/signin" component={SignIn}/>  
      <Route path="/dashboard" component={Dashboard}/>
      
      </div> 

    </Router>


  )
}

export default App;
