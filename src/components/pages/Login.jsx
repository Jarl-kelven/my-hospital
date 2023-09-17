import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <main className='sm:w-[640px] mx-auto p-4'>
        <section className='mx-auto w-11/12 my-24 p-7 shadow-lg'>
            <h2 className='text-gray-800 text-xl font-bold'>Hello! Welcome back</h2>
            <div className=' flex flex-col gap-3 justify-center items-center mt-4'>
              <input className='input-field' type='email' placeholder='enter your e-mail..'></input>
              <input className='input-field' type='password' placeholder='enter your password..'></input>
              <button className='btn login'>Login</button>
            </div>
            <div className='flex justify-center gap-3 mt-[-15px]'>
                <p className='text-xs text-gray-800'>Don't have an account?
                <Link><span className='text-primaryColor font-bold text-xs ml-1 cursor-pointer'>Register</span></Link>
                </p>
                
            </div>
        </section>
        
    </main>
  )
}

export default Login