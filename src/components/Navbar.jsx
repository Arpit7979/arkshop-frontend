import React from 'react'
import "../App.css"
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logoutUser } from '../features/authSlice'

const Navbar = () => {
  const auth = useSelector(state=>state.auth);
  const dispatch = useDispatch();
  const item = useSelector(state => state.cart);
  return (
    <div className='Navbar'>
     <Link to={'/'}><h2>Arpit Shop</h2></Link> 
      <div className='cart-logo'>
      <Link to="/cart"><h3>Cart </h3></Link>
      <h2>{item.cartTotalQuantity}</h2>
      </div>
      {
        auth._id?<Link><h3 onClick={()=>dispatch(logoutUser(null))} >Logout</h3></Link>:
        (<div className='auth-button'>
        <Link to="/register"><h3>Register</h3></Link>
        <Link to="/Login"><h3>Login</h3></Link>
        </div>)
      }
      
    </div>
  )
}

export default Navbar