import React, {useState, useEffect} from 'react'
import {useHistory, useParams, Link} from 'react-router-dom'
import axios from 'axios'

const User = () => {
    const [user, setUser] = useState({
        name:'',
        username:'',
        email:'',
        Phone:''
    });
    
    const {id} = useParams();
useEffect(()=>{
loadUser()
},[])
    const loadUser = async () => {
        const res = await axios.get(`http://localhost:3003/users/${id}`)
        setUser(res.data);
        }

    return (
        <div className='container'>
        <Link className='btn btn-primary mt-5' to='/'> Back to Home </Link>
        <h1 className='display-4'> User Id: {id} </h1>
        <hr />
        <ul className='list-group w-50'>
        <li className='list-group-item'> Name: {user.name} </li>
        <li className='list-group-item'> User Name: {user.username} </li>
        <li className='list-group-item'> Email: {user.email} </li>
        <li className='list-group-item'> Phone: {user.Phone} </li>
        </ul>
            
        </div>
    )
}

export default User
