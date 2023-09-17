import React from 'react'
import DoctorList from '../../Doctors/DoctorList'

function Doctors() {
  return (
    <div>
      <section className='container mt-20'>
        <article className='container text-center'>
          <h1 className='heading-1'>
            Our Great Doctors
          </h1>
          <p className='mt-2 sm:text-base text-sm'>
            World class care for everyone. Our health system offers unmatched, expert health care
          </p>
        </article>
      </section>
      
      <DoctorList></DoctorList>
    </div>
  )
}

export default Doctors