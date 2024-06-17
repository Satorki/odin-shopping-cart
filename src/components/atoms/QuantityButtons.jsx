import React from 'react'

const QuantityButtons = () => {
  return (
    <div className='flex flex-col'>
      <button className='bg-white border rounded-md border-black hover:bg-green-300 active:shadow-inner'>UP</button>
      <button className='bg-white border rounded-md border-black hover:bg-green-300 active:shadow-inner'>DW</button>
    </div>
  )
}

export default QuantityButtons