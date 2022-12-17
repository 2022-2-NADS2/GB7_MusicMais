import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import "./login.css"
import { useState } from 'react';
import { login } from '../../Component/ReduxContainer/apiCall';
export default function Login() {
  const dispatch = useDispatch();
  const {isFetching  , error} = useSelector((state)=>state.user);
  const [email , setemail]= useState('');
  const [password , setPassword] = useState('');
const handleClick = (e)=>{
  e.preventDefault();
  login(dispatch ,{email , password});
}
  return (
    <main class = "Second_body">
    <div class="login-block">
    <h1>Login</h1>
          <input type="email" name="" id="email" placeholder='Email' onChange={(e)=>setemail(e.target.value)} className='inputText' required/>
          <input type="password" placeholder='******' name="" onChange={(e)=>setPassword(e.target.value)} id="password" className='inputText' required/>
          <button className='btnforsignup' onClick={handleClick}>Login</button>
          <Link to={"/forgot/password"}>
          <p style={{textAlign:'start' , marginLeft:"30.6%", fontSize: "13px"}}>Forgot password</p>
          </Link>
          <Link to={"/signup"}>
          <p style={{textAlign:'start' , marginLeft:"30.6%", fontSize: "13px"}}>Create New Account</p>
          </Link>
          </div>
          </main>
  )
}
