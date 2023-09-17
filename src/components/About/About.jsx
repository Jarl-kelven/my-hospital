import React from 'react'
import aboutimg from '../../assets/images/doc-about.png'
import { Link } from 'react-router-dom'

function About() {
  return (
    <main>
        <section className='container flex flex-col items-center justify-center gap-1 mt-40 xl:flex-row '>
          <article className='xl:basis-[50%]'>
            <img className='rounded-md xl:w-[80%]' src={aboutimg} alt=''></img>
          </article>

          <article className='text-center flex flex-col justify-center items-center xl:basis-[45%] xl:items-start xl:justify-start xl:text-start lg:px-4 '>
            <h1 className='text-gray-800 font-bold text-4xl mt-6 lg:text-[2.5rem] xl:mt-0'>
              Proud to be one of the nations best
            </h1>

            <p className='mt-5 text-gray-800 text-sm'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia ab voluptas, quia alias itaque sed exercitationem, ipsa dolores sapiente magni eaque et incidunt amet eveniet maiores repudiandae earum tempora dicta aliquid dolorum voluptate vitae, similique ipsam! Optio officiis sequi quisquam error vero veritatis ab vitae nisi id quis. Praesentium provident unde cumque temporibus expedita cum reiciendis dolore tempora, fuga porro. <br></br>

            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere quod magnam aut autem sint, explicabo corporis! Corporis nostrum nemo odit eligendi. Corrupti atque laudantium, praesentium porro mollitia aliquam eius tempore.

            
            </p>

            <Link>
              <button className='btn'>
                Learn More
              </button>
            </Link>
          </article>
        </section>
    </main>
  )
}

export default About