import {createSlice} from "@reduxjs/toolkit"

const initialState = {
   cartItems:[],
   cartTotalAmount:0,
   cartTotalQuantity:0,
}

export const productslice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        addToCart:(state,action)=>{
          const itemIndex = state.cartItems.findIndex(item=>(item.id === action.payload.id))
          if(itemIndex>=0){
            state.cartItems[itemIndex].cartQuantity += 1;
          }else{
            const tempProduct = {...action.payload , cartQuantity:1}
            state.cartItems.push(tempProduct);
          }
        },
        removeFromCart:(state,action)=>{
            state.cartItems = state.cartItems.filter(item=>(item.id !== action.payload.id));
        },
        increaseCartQuantity:(state,action)=>{
            const itemIndex = state.cartItems.findIndex(item=>(item.id===action.payload.id));
            state.cartItems[itemIndex].cartQuantity+=1;
        },
        decreaseCartQuantity:(state,action)=>{
            const itemIndex = state.cartItems.findIndex(item=>(item.id === action.payload.id));
            if(state.cartItems[itemIndex].cartQuantity>1){
                state.cartItems[itemIndex].cartQuantity -=1;
            }else{
                state.cartItems = state.cartItems.filter(item=>(item.id !== action.payload.id));
            }
        },
        cartTotal:(state,action)=>{
          let {total,quantity} = state.cartItems.reduce((cartTotal,item)=>{
                const {price,cartQuantity} = item;
                const amount = price*cartQuantity;
                cartTotal.total += amount;
                cartTotal.quantity += cartQuantity;
                return cartTotal
            },{
                total:0,
                quantity:0,
            })
            state.cartTotalAmount = total;
            state.cartTotalQuantity = quantity;
        }
    }
})

export const {addToCart,removeFromCart,increaseCartQuantity,decreaseCartQuantity,cartTotal} = productslice.actions;
export default productslice.reducer;