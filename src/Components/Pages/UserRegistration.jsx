import React, {useState} from 'react'
import Button from '../Custom/Button'
import Heading from '../Custom/Heading'
import Input from  '../Custom/Input'

const UserRegistration = () => {

    const [userRegistration, setUserRegistration] = useState({
        userName:'',
        email: '',
        password:''
    });
    
    const [records, setRecords] = useState([]);

    const handleInput = (e)=> {
        const name = e.target.name;
        const value = e.target.value;
        setUserRegistration({...userRegistration, [name]: value})
            }

    const submit = (e) => {
        const newRecord = {...userRegistration, id:new Date().getTime().toString()}
        setRecords([...records, newRecord])
        setUserRegistration({userName:'',
        email: '',
        password:''});
    }
    return (
        <>
        <div className='container'>
            <div className='text-uppercase text-black'>  
            <Heading text = {<h3> User Registration Page </h3>} /> <br /><br />
            <div>
                <label htmlFor="userName"> UserName</label>
                <Input type='text' autoComplete = "off" name = 'userName' id='userName'
                value={userRegistration.userName} onChange={handleInput}  /> <br />
                
                <label htmlFor="email"> Email</label>
                <Input type='email' autoComplete = "off" name = 'email' id = 'email'
                value={userRegistration.email} onChange={handleInput}   /> <br />

                <label htmlFor="password"> Password</label>
                <Input type='text' autoComplete = "off" name = 'password' id = 'password'
                value={userRegistration.password} onChange={handleInput}  /> <br />

                <Button text='Register' onClick={submit} />



            </div>
            </div>
            {
                    records.map((curElem)=>{
                        
                        return(
                            <div key={curElem.id}>
                                <table>
                                <td>{curElem.userName} </td>
                                <td>{curElem.email} </td>
                                <td>{curElem.password} </td>
                                </table>
                            </div>
                        )
                    })
            }
        </div>
        </>
    )
}

export default UserRegistration
