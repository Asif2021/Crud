import React from 'react'
import {Link, NavLink} from 'react-router-dom'

function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    <div className="collapse navbar-collapse">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
        <NavLink className="nav-link" exact to="/">Home </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" exact to="/user/listing">User</NavLink>
      </li>
            <li className="nav-item">
        <NavLink className="nav-link" exact to="/article/listing">Article</NavLink>
      </li>
            </ul>
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
        </div>
    )
}

export default Navbar
