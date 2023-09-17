import React from 'react'
import { FaShare } from 'react-icons/fa'
import { Link } from 'react-router-dom'



function ServiceCard({item,index}) {
    const {name,desc,bgColor,textColor} = item
    return (
    <main>
        <section className=' text-center gap-1 mt-10 px-14 sm:px-40 md:px-52 lg:px-14'>
            <h2 className='text-xl font-bold text-gray-800 '>{name}</h2>
            <p className='text-xs mt-1'>{desc}</p>
            <Link className=' mt-4 w-[44px] h-[44px] mx-auto flex items-center justify-center'>
                <span className='share-icon text-center'>
                
                <FaShare className=''></FaShare>
                </span>
            </Link>
            
            
            
        </section>
    </main>
  )
}

export default ServiceCard