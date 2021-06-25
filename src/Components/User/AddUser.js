import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const AddUser = () => {
  let history = useHistory();
  const [user, setUser] = useState({
    name: '',
    username: '',
    email: '',
    Phone: '',
  });

  // const { name, username, email, Phone } = useState();

  const InputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    if (user.name.length <= 2 || user.username.length <= 2 || user.email !== '') {
      await axios.post('http://localhost:3003/users', user);
      history.push('/user/listing');
    } else {
      alert('please fill correct information');
    }
  };
  return (
    <div className='container'>
      <div className='w-75 mx-auto shadow p-5'>
        <h1>Add User</h1>
        <div>
          <form onSubmit={(e) => onSubmit(e)}>
            <div className='form-group'>
              <input
                type='text'
                className='form-control form-control-lg'
                placeholder='Enter your Name'
                name='name'
                value={user.name}
                onChange={(e) => {
                  InputChange(e);
                }}
              />
            </div>

            <div className='form-group'>
              <input
                type='text'
                autoComplete='off'
                className='form-control form-control-lg'
                placeholder='Enter your User Name'
                name='username'
                value={user.username}
                onChange={(e) => {
                  InputChange(e);
                }}
              />
            </div>

            <div className='form-group'>
              <input
                type='email'
                autoComplete='off'
                className='form-control form-control-lg'
                placeholder='Enter your Email'
                name='email'
                value={user.email}
                onChange={(e) => {
                  InputChange(e);
                }}
              />
            </div>

            <div className='form-group'>
              <input
                type='number'
                autoComplete='off'
                className='form-control form-control-lg'
                placeholder='Enter your Phone Number'
                name='Phone'
                value={user.Phone}
                onChange={(e) => {
                  InputChange(e);
                }}
              />
            </div>

            <button className='btn btn-block btn-primary'>Add User</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddUser;
