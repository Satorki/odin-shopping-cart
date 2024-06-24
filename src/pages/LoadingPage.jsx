import React from 'react'
import ReactLoading from 'react-loading';

const LoadingPage = () => {
  return (
    <div className="bg-green-700 h-screen">
        <ReactLoading type='spinningBubbles'/>
    </div>
  )
}

export default LoadingPage