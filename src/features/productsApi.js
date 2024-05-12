

//fetch backend products data through RTK query

import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react"

export const productsApi = createApi({
    reducerPath:"productsApi",
    baseQuery:fetchBaseQuery({baseUrl:"https://arkshop-backend.onrender.com"}),
    endpoints:(builder)=>({
        getAllProducts:builder.query({
            query:()=>"/products"
        })
    })
});

export const {useGetAllProductsQuery} = productsApi;