import React from 'react'

function SigninForm() {
  return (
    <div className='flex flex-col w-[343px] xl:w-[384px] mx-auto text-white'>
        <h1 className='text-[28px] mb-10'>Sign In</h1>
        <input type="text" placeholder='Username' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full h-[44px] p-2 mb-5 outline-none" />
        <button type="button" className="font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 w-full bg-lightgreen">Sign in</button>
    </div>
  )
}

export default SigninForm