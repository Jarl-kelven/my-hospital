import React from 'react'
import image1 from '../../assets/images/hero-doc.png'
import virtual from '../../assets/images/virtual.png'
import faqImg from '../../assets/images/doc-faq.png'
import About from '../About/About'
import ServiceList from '../Services/ServiceList'
import { Link } from 'react-router-dom'
import DoctorList from '../Doctors/DoctorList'
import FaqList from '../Faq/FaqList'
import Testimonial from '../Testimonial/Testimonial'
import FeatureList from '../Features/FeatureList'


function Home() {
  return (
    <main>
      <section className='container text-center flex flex-col lg:flex-row items-center justify-between gap-8'>
        <article className='flex flex-col basis-3/6'>
          <h1 className='text-3xl md:text-start sm:text-5xl font-bold text-gray-800'>
            Elevating Wellness Together: Your Supportive Hospital Companion.
          </h1>
          <p className='text-sm md:text-start md:text-base text-gray-800 mt-4'>
            Introducing HealthNet, where health and harmony unite. Join us, and discover a new era of healthcare efficiency and patient-centric care with our advanced platform
          </p>
          <div className='md:text-start'>
            <button className='btn md:text-base text-xs p-12'>Book an appointment</button>

          </div>

        </article>

        <article className='flex hidden md:block gap-2 justify-center items-center flex-row basis-[40%] '>
          <div className='basis-2/6'>
            <img className='rounded-lg' src={image1} alt=''></img>
          </div>

        </article>
      </section>

      <section className='mx-auto w-11/12 my-10'>

        <article>
          <h1 className='text-3xl font-bold md:text-5xl lg:px-36 mt-32 text-center text-gray-800'>
            We Provide the best medical services
          </h1>
          <p className='text-sm mt-4 text-center lg:px-60 text-gray-800 md:text-lg md:mt-6'>
            world class for everyone. Our health system offers unmatched, expert health care. From the lab to the clinic.
          </p>

        </article>

        
      </section>

      <section className='container'>
        <FeatureList></FeatureList>
      </section>

      <About></About>

      {/* SERVICES SECTION */}

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

      <ServiceList></ServiceList>

      <section className='container lg:flex lg:items-center justify-between gap-2'>
        <article className='lg:order-2 basis-[50%]'>
          <h1 className='heading-1 mt-24 mb-3 lg:flex lg:order-1 lg:mt-3'>
            Get virtual treatments anytime.
          </h1>

          <ol className=' text-gray-800 '>
            <li className='list'>1. Schedule appointment directly</li>
            <li className='list'>2. Search for your physician here and contact their office</li>
            <li className='list'>3. View our physicians who are accepting new patients, use the online scheduling tool to select an appointment time</li>
          </ol>
          <Link className='md:text-center'>
            <button className='btn'>Learn More</button>
          </Link>
        </article>  
        <div className='lg:order-1 basis-[40%]'>
          <img className='rounded-lg hidden sm:block lg:w-[95%]' src={virtual} alt=''></img>
        </div>
        

      </section>


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




      <section className='container text-center'>
        <article className='xl:flex xl:items-center xl:justify-between'>
          <div className='sm:w-[40%] mx-auto xl:basis-[40%]'>
            <img className='w-full rounded-lg ' src={faqImg} alt=''></img>
          </div>
          
          <div className='xl:basis-[50%]'>
            <h2 className='heading-1 my-7 xl:text-2xl xl:my-2'>
              Most questions by our beloved patients
            </h2>

            <FaqList></FaqList>
          </div>


          
        </article>
      </section>

      <section>
        <article className='container text-center mt-12'>
          <h1 className='heading-1 mt-36'>
           Response From Our Patients
          </h1>
          <p className='mt-2 sm:text-base text-sm'>
            World class care for everyone. Our health system offers unmatched, expert health care
          </p>
        </article>
      </section>

      <section>
        <Testimonial></Testimonial>
      </section>
    </main>
  )
}

export default Home