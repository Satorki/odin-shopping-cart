import React from 'react'

const CartTable = () => {
  return (
    <>
    <div className='flex justify-around text-lg pt-10'>
        <p>Product</p>
        <div className='flex gap-10'>
            <p>Price</p>
            <p>Quantity</p>
            <p>Subtotal</p>
        </div>
    </div>
    <div className='w-9/12 border-b-2 border border-black mx-auto'></div>
    </>
  )
}

export default CartTable