import React from 'react'

function LoadingContainer() {
  return (
    <div className="w-full h-screen grid place-items-center">
      <div class="lds-facebook">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}

export default LoadingContainer
