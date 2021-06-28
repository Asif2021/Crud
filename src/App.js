import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/font-awesome/css/font-awesome.min.css';
import Navbar from './Components/Navbar'
import Listing from './Components/Aritcle/Listing'
import Home from './Components/Home'
import UserListing from './Components/User/UserListing'
import AddUser from './Components/User/AddUser'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import EditUser from './Components/User/EditUser';
import User from './Components/User/User';
import UserRegistration from './Components/Pages/UserRegistration';
import Login from './Components/Pages/Login';

function App() {
  return (
    <div className="App">
    
    <Router>
      <Navbar/>

      <Switch>
          <Route path="/" component={Home} exact/>
          <Route path="/user/listing" component = {UserListing} />
          <Route path='/user/adduser' component = {AddUser} />
          <Route path='/user/edituser/:id' component = {EditUser}/>
          <Route path='/user/userlisting/:id' component = {User} />
          <Route path='/article/listing' component = {Listing} /> 
          <Route path='/login' component = {Login} />
          <Route path='/registration' component = {UserRegistration} /> 
          <Route component={Home}/>
      </Switch>
      </Router>
      </div>
  );
}

export default App;
