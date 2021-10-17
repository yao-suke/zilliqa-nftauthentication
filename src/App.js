import React from 'react'
import ReactDOM from 'react-dom';
import Button from '@mui/material/Button'; 
import SignIn from './components/SignInPage';  
import Dashboard from './pages/Dashboard/Dashboard'; 
import WalletForm from './components/AdminPageF/WalletForm'; 

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import AdminPage from './components/AdminPageF/AdminPage';

function App() {
  return ( 
    <Router>   
      
      <div className = "App">  
      <Switch>
      <Route path="/signin" component={SignIn}/>  
      <Route path="/dashboard" component={Dashboard}/> 
      <Route path="/admin" component={AdminPage}/> 
      </Switch>
      
      </div> 

    </Router>


  )
}

export default App;
