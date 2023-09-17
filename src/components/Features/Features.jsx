import React from 'react'
import { FaShare } from 'react-icons/fa'

function Features({feature}) {
    const {id,image,head,para} = feature
  return (
    <main >
        <section className='feature-container px-2 md:px-32 xl:px-3'>
            <img className='w-2/6 md:w-1/4' src={image} alt='link'></img>
            <h2 className='mt-6 text-2xl font-bold sm:text-3xl text-gray-800'>{head}</h2>
            <p className='text-gray-800 text-xs sm:text-sm mt-3'>
                {para}
            </p>
            <span className='share-icon'>
                <FaShare></FaShare>
            </span> 
        </section>
    </main>
  )
}

export default Features