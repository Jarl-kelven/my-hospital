import React from 'react'

function Contact() {
  return (
    <main className='xl:w-[50%] mx-auto'>
      <section className='container'>
        <h1 className='heading-1 text-center'>Contact Healthnet</h1>
        <p className='text-sm md:text-start md:text-base text-gray-800 mt-1 text-center'>
        We're here to assist you. Whether you have questions, feedback, or need assistance, please don't hesitate to reach out. 
        </p>
      </section>

      <div className='container flex flex-col gap-3 justify-center items-center mt-4'>
              <input className='input-field' type='text' placeholder='Name..'></input>
              <input className='input-field' type='email' placeholder='Email'></input>
              <input className='input-field' type='number' placeholder='Phone Number'></input>
              <input className='input-field' type='text' placeholder='Subject'></input>
              <textarea placeholder='Message...' className='input-field' rows='3'></textarea>
              <button className='btn login'>Send</button>
      </div>
    </main>
  )
}

export default Contact