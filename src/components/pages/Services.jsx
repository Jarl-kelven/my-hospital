import React from 'react'
import Service from '../Services/ServiceList'

function Services() {
  return (
    <div>
      <section className=''>
        <article className='container text-center mt-10'>
          <h1 className='heading-1'>
            Our Medical Services
          </h1>
          <p className='mt-2 sm:text-base text-sm'>
            World class care for everyone. Our health system offers unmatched, expert health care
          </p>
        </article>
      </section>
      <Service></Service>
    </div>
  )
}

export default Services