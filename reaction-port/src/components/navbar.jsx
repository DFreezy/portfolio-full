import React from 'react'

export default function Navbar(){
    return(
        <>
        <div className='bg-blue-200 py-8 px-6 -skew-y-2 -skew-x-6'>
        <h1 className='text-lg text-red-600 font-bold'>Chipper</h1>
        
        </div>
        <hr className='-skew-y-2 -skew-x-6 mt-6 z-40'/>
        <h1 className='text-center text-red-500 font-bold'>Get high quality food on the go</h1>
        <h2 className='mt-12 text-center'>We aim to deliver five star meals at a low price</h2>
        <div className="flex items-center justify-center h-screen">
        <img src="Chips.jpg" className='rounded-3xl mx-auto w-4/12 h-3/5'/>
        </div>
        <div className='box-border float-end mr-24 border-solid border-black mb-24'>
            <h1 className='text-7xl'>Chipper</h1>
            <button className='text-4xl bg-blue-500 text-white px-4 py-2 rounded mt-20'>Sign up</button>
        </div>
        </>
    )
}