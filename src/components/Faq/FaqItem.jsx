import React from 'react'
import { useState } from 'react'
import { FaAngleDown,FaAngleUp } from 'react-icons/fa'

function FaqItem({item}) {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = ()=>{
        setIsOpen(!isOpen)
    }
  return (
    <main className='border lg:w-[60%] mx-auto border-gray-800 rounded-md my-2 py-2 px-4 '>
        <section onClick={toggleMenu}>
            <article className='flex justify-between items-center py-1 my-2'>
                <h4 className='text-gray-800 font-bold  text-sm sm:text-xl xl:text-sm cursor-pointer'>{item.question}</h4>
                <div className={`${isOpen && ' text-gray-800 sm:text-lg border-none'}
                cursor-pointer `}>
                    {isOpen ? <FaAngleDown></FaAngleDown> : <FaAngleUp></FaAngleUp>}
                </div>

            
            </article>
            

            {isOpen && (
                <div>
                    <p className='text-start text-xs sm:text-base xl:text-xs'>{item.content}</p>
                </div>

            )
            }
            
        </section>
    </main>
  )
}

export default FaqItem