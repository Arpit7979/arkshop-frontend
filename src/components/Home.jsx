import React from 'react';
import { useGetAllProductsQuery } from '../features/productsApi';
import "../App.css";
import { useDispatch } from 'react-redux';
import { addToCart, cartTotal } from '../features/CartSlice';



const Home = () => {
  const {data,isLoading,error} = useGetAllProductsQuery();
  const dispatch = useDispatch();

  const handleClick = (item)=>{
    dispatch(addToCart(item));
    dispatch(cartTotal());
  }

  return (
    <div className='home'>
    {isLoading?<h1>Loading....</h1>:error?<h1>An error occoured</h1>:data.map((item)=>(
        <div className='home-card' key={item.id} >
        <>
        <img src={item.image} alt=''/>
        <h2>{item.name}</h2>
        <p>{item.disc}</p>
        <h3>{item.price}</h3>
        <button onClick={()=>handleClick(item)}>Add to Cart</button>
        </>
      </div>))}
    
    </div>
  )
}

export default Home