import React from 'react'

function Logo({white = false}) {
  const reqWhite = white;

  return (
    <div className='flex items-center'>
      <div className='m-2'>
        <img className='h-12 w-12' src="../../../favicon/android-chrome-192x192.png" alt="Logo" />
      </div>
      <div>
        <p className={`font-playwriteIt text-[24px] ${reqWhite? "text-white" : "text-black"}`}>BlogVerse</p>
      </div>
    </div>
  )
}

export default Logo
