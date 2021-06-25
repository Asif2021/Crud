import React, {useState, useRef} from 'react'
import {useHistory} from 'react-router-dom'
import Button from '../Custom/Button'
import Heading from '../Custom/Heading'
import Input from  '../Custom/Input'


const Login = () => {
    const [data, setData] = useState();
    const inputRef = useRef(null);
    const History = useHistory();

    const database = {
        userName: 'admin',
        password: '123'
    }

    // submit is called whenever clicked on click me button
    const submit = () => {
         const value = inputRef.current.value;
        
        if ( value == database.userName && data == database.password) {
           History.push('/');
        } else {
            alert('Credential does not match')
        }
    }
    
    return (
        <>
        
        <div>
            <Heading text = {<h1> <span className='text-primary'> Login </span>  <span className='text-danger'> Page </span> </h1>}/><br />
{/* uncontrolled Input  */}
            <label htmlFor="userName"> User Name</label><br />
            <input type='text' ref={inputRef} />
<br />
{/* controlled Input */}
            <label htmlFor="password"> Password</label><br />
            <Input type='text' name='password' onChange={(e)=>{setData(e.target.value)}} value={data} />
<br />
            <Button text='Click Me' onClick={submit} />

        </div>
        </>
    )
}

export default Login