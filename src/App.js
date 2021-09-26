import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Screens/Home';
import Login from './Screens/Auth/Login';
import SignUp from './Screens/Auth/SignUp';


export default function RouteMap() {
  const isAuthenticate = ()=>{
    const Allusers = JSON.parse(localStorage.getItem('users'));
    return (Allusers && Allusers['currentUser']) ? <Home /> :(<Login />)
   }
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/"
          
          render={() => isAuthenticate()}
          />
             
     
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

