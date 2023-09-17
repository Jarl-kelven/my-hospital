import React from 'react'
import star from '../../assets/images/Star.png'
import { FaShare } from 'react-icons/fa'
import { Link } from 'react-router-dom'


function DoctorCard({doctor}) {
    const {name,id,specialization,photo,totalPatients,hospital,totalRating,avgRating } = doctor
  return (
    <main>
        <section className='mx-auto w-11/12 my-14 px-5'>
            <article className='max-w-[80%] mx-auto lg:px-0 sm:w-[427px]'>
                <img className='text-center rounded-md lg:h-[198px]' src={photo} alt=''></img>
                <h2 className='font-bold text-gray-800 text-2xl  mt-4'>{name}</h2>
                <div className='flex items-center justify-between mt-3'>
                    <p className='bg-primaryLight font-bold text-primaryColor inline-block p-2 rounded-lg text-xs sm:text-xs'>{specialization}</p>
                    <p className='flex items-center text-xs gap-1 pr-2'><span><img className='w-[16px]' src={star} alt=''></img></span> {avgRating}</p>
                </div>

                <div className='flex justify-between mt-3'>
                    <div>
                        <h3 className='font-semibold text-gray-800  text-sm sm:text-base'>+{totalPatients} Patients</h3>
                        <p className='text-gray-800 sm:text-sm text-[0.7rem]'>{hospital}</p>
                    </div>
                    
                    <Link to='/doctors' className='w-[44px] h-[44px] flex items-start justify-end'>
                        <span className='share-icon-pink'>
                
                            <FaShare className=''></FaShare>
                        </span>
                    </Link>
                </div>
            </article>
        </section>
    </main>
  )
}

export default DoctorCard