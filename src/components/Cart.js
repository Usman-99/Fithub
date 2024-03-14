import React, { useContext } from 'react'
import { storeContext } from '../Context and Reduce/StoreContext'
import CartProduct from './CartProduct'

export default function Cart() {
  const {products,total} =useContext(storeContext)

  return (
    <div className='w-full max-w-3xl mx-auto mb-5'>
      <div className='flex flex-row items-center justify-between mt-2 py-6 px-10 text-xl font-medium'>
        {products.length>0 ? (<><h3 className='bg-transparent text-black w3-xlarge'>Your Basket</h3>
        <p>Total: Rs {total.toFixed(2)}</p></>) : (<h2 className='flex flex-row items-center justify-between mt-2 py-6 px-10'>No Items are added in cart!!</h2>)
        }
      </div>
      {products.map((product,i)=>
        <CartProduct key={i} item={product}/>
      )}
    </div>
  )
}
