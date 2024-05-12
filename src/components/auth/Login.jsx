import React, { useState,useEffect } from 'react'
import {useDispatch, useSelector} from "react-redux"
import { loginUser } from '../../features/authSlice';
import { useNavigate } from 'react-router-dom';


function Login() {
  const navigate = useNavigate();
  const auth = useSelector(state=>state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
  if(auth._id){
    navigate("/cart")
  }
  }, [auth._id,navigate])

  const [user, setUser] = useState({
    email: "",
    password: "",
});

const handleformsubmit = (e)=>{
  e.preventDefault();
  dispatch(loginUser(user));
}


  return (
    <div onSubmit={handleformsubmit}>
      <div className='register'>
      <form action="" className='register-form'>
        <h1>Login</h1>
        <input type="email" placeholder='Email' onChange={(e)=>setUser({...user,email:e.target.value})} />
        <input type="password" placeholder='password' onChange={(e)=>setUser({...user,password:e.target.value})}/>
        {auth.loginStatus==="rejected"?<p style={{color:"red"}} >{auth.loginError}</p>:null}
        <button className='all-btn' type='submit'>{auth.registerStatus==="pending"?"submitting....":"submit"}</button>
      </form>
      
    </div>
    </div>
  )
}

export default Login
