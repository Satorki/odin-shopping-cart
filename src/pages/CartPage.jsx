import React from 'react'
import Navbar from '../components/molecules/Navbar'
import ProductCartList from '../components/organisms/ProductCartList'

const CartPage = () => {
  return (
    <div className='bg-green-700 h-screen'>
      <ProductCartList />
    </div>
  )
}

export default CartPage

//M Navbar

//O ProductCartList
    //A CartTable
    //M CartProduct
        //A CartProductDeleteButton
        //AA PImage
        //AA PName
        //AA PPrice
        //OO Quantity
        //A CartProductSubtotal