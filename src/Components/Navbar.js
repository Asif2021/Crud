import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <nav className='navbar navbar-expand-lg navbar-dark bg-primary'>
        <div className='collapse navbar-collapse'>
          <ul className='navbar-nav mr-auto'>
            <li className='nav-item'>
              <NavLink className='nav-link' exact to='/'>
                Home
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className='nav-link' exact to='/user/listing'>
                User
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className='nav-link' exact to='/article/listing'>
                Article
              </NavLink>
            </li>
          </ul>

          <ul className='navbar-nav ml-auto'>
            <li className='nav-item'>
              <NavLink className='nav-link' exact to='/registration'>
                SingUp
              </NavLink>
            </li>
          </ul>
          <div>
            <ul className='navbar-nav ml-auto mr-sm-2'>
              <li className='nav-item'>
                <NavLink className='nav-link' exact to='/login'>
                  SingIn
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
