import React, { useEffect } from 'react'
import {useSelector,useDispatch} from "react-redux"
import { cartTotal, decreaseCartQuantity, increaseCartQuantity, removeFromCart } from '../features/CartSlice';
import { useNavigate } from 'react-router-dom';


const Cart = () => {
  const navigate = useNavigate();
  const auth = useSelector(state=>state.auth);
  const item = useSelector(state=>state.cart);
  const dispatch = useDispatch();
  useEffect(()=>{dispatch(cartTotal())},[item,dispatch])
  return (
    <>
    <div className='cart'>
      {item.cartItems.map(item=>(
        <div className='cart-card' key={item.id}>
        
          <img src={item.image} alt=''/>
          <h2>{item.name}</h2>
          <p>{item.disc}</p>

          <div className='quantity'>
          <button onClick={()=>dispatch(decreaseCartQuantity(item))} >-</button>
          <h3>{item.cartQuantity}</h3>
          <button onClick={()=>dispatch(increaseCartQuantity(item))} >+</button>
          </div>

          <h4>{item.price}</h4>

          <button onClick={()=>dispatch(removeFromCart(item))} >Remove from Cart</button>
       
        </div>
      ))}
    </div>
    <div className='cart-total'>
      <h3>Total Amount:{item.cartTotalAmount} </h3>
      {auth._id?<button >Proceed to checkout</button>:<button style={{backgroundColor:"yellow",color:"blue"}} onClick={()=>navigate("/register")} >Proceed to register</button>}
    </div>
    </>
  )
}

export default Cart