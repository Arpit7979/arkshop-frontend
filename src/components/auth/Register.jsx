import React, { useState,useEffect } from 'react'
import {useDispatch, useSelector} from "react-redux"
import { registerUser } from '../../features/authSlice';
import { useNavigate } from 'react-router-dom';

function Register() {
  const navigate = useNavigate();
  const auth = useSelector(state=>state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
  if(auth._id){
    navigate("/cart")
  }
  }, [auth._id,navigate])

  const [user,setUser] = useState({
    name:"",
    email:"",
    password:"",
  })

  const handleformsubmit = (e)=>{
    e.preventDefault();
    dispatch(registerUser(user));
  }

  return (
    <div className='register' onSubmit={handleformsubmit}>
      <form action="" className='register-form'>
        <h1>Register</h1>
        <input type="text" placeholder='Name' onChange={(e)=>setUser({...user, name: e.target.value})} />
        <input type="email" placeholder='Email' onChange={(e)=>setUser({...user,email:e.target.value})} />
        <input type="password" placeholder='password' onChange={(e)=>setUser({...user,password:e.target.value})} />
        {auth.registerStatus==="rejected"?<p style={{color:"red"}} >{auth.registerError}</p>:null}
        <button className='all-btn' type='submit'>{auth.registerStatus==="pending"?"Submitting....":"Submit"}</button>
      </form>
    </div>
  )
}

export default Register
