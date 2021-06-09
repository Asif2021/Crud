import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'

function UserListing() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);
  const loadUsers = async () => {
const result = await axios.get("http://localhost:3003/users");
setUsers(result.data.reverse());
  }

  const deleteUser = async (id) => {
await axios.delete(`http://localhost:3003/users/${id}`);
loadUsers();
  }
  return (
    <div className='container'>
      <div className='row py-2'>
        <div className='col-3 offset-1'>
          <h1 className='text-left'>All Users</h1>
        </div>
        <div className='col-3 offset-5'>
          <Link className='btn btn-primary' to='/user/adduser'>Add New User</Link>
        </div>
      </div>
      <hr />
      <table class="table border shadow">
  <thead className='thead-dark'>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">UserName</th>
      <th scope="col">E-Mail</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
    {
      users.map((user, index) => (
        <tr>
          <th scope='row'>{index+1}</th>
          <td>{user.name}</td>
          <td>{user.username}</td>
          <td>{user.email}</td>
          <td>
            <Link className='btn btn-primary mr-2' to={`/user/userlisting/${user.id}`} ><i class="fa fa-eye" aria-hidden="true"></i></Link>
            <Link className='btn btn-outline-info mr-2' to={`/user/edituser/${user.id}`}><i class="fa fa-pencil" aria-hidden="true"></i></Link>
            <Link className='btn btn-danger' onClick={ () => { deleteUser(user.id) }}> <i class="fa fa-trash-o" aria-hidden="true"> </i></Link>

          </td>
        </tr>
      )

      )
    }
  </tbody>
</table>        
    </div>
  );
}

export default UserListing;
