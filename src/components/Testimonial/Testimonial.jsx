import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import avatar from '../../assets/images/hero-img02.png'
import { HiStar } from 'react-icons/hi'

function Testimonial() {
  return (
    <main>
        <Swiper 
        modules={[Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{clickable:true}}
        breakpoints={{
            640:{
                slidesPerView:1,
                spaceBetween:0,
            },
            768:{
                slidesPerView:2,
                spaceBetween:20,
            },
            1024:{
                slidesPerView:3,
                spaceBetween:30,
            }
        }}
         >
            <SwiperSlide>
                <section className='container cursor-grab lg:cursor-default'>
                    <article className='flex gap-3 items-center'>
                        <img src={avatar} alt='' className='w-[45px] rounded-full'></img>
                        <div className=''>
                            <h2 className='text-gray-800 font-semibold'>Joshua Eze</h2>
                            <div className='flex'>
                                <HiStar className='text-yellow-400'></HiStar>
                                <HiStar className='text-yellow-400'></HiStar>
                                <HiStar className='text-yellow-400'></HiStar>
                                <HiStar className='text-yellow-400'></HiStar>
                                <HiStar className='text-yellow-400'></HiStar>
                            </div>
                            
                        </div>
                    </article>
                    <p className=' text-sm mt-1'>
                        Their medical services are top notch. They are the best amongst the rest. They are dependable
                    </p>

                </section>
            </SwiperSlide>

            <SwiperSlide>
                <section className='container  cursor-grab lg:cursor-default'>
                    <article className='flex gap-3 items-center'>
                        <img src={avatar} alt='' className='w-[45px] rounded-full'></img>
                        <div className=''>
                            <h2 className='text-gray-800 font-semibold'>Joshua Eze</h2>
                            <div className='flex'>
                                <HiStar className='text-yellow-400'></HiStar>
                                <HiStar className='text-yellow-400'></HiStar>
                                <HiStar className='text-yellow-400'></HiStar>
                                <HiStar className='text-yellow-400'></HiStar>
                                <HiStar className='text-yellow-400'></HiStar>
                            </div>
                            
                        </div>
                    </article>
                    <p className='text-sm mt-1'>
                        Their medical services are top notch. They are the best amongst the rest. They are dependable
                    </p>

                </section>
            </SwiperSlide>

            <SwiperSlide>
                <section className='container cursor-grab lg:cursor-default'>
                    <article className='flex gap-3 items-center'>
                        <img src={avatar} alt='' className='w-[45px] rounded-full'></img>
                        <div className=''>
                            <h2 className='text-gray-800 font-semibold'>Joshua Eze</h2>
                            <div className='flex'>
                                <HiStar className='text-yellow-400'></HiStar>
                                <HiStar className='text-yellow-400'></HiStar>
                                <HiStar className='text-yellow-400'></HiStar>
                                <HiStar className='text-yellow-400'></HiStar>
                                <HiStar className='text-yellow-400'></HiStar>
                            </div>
                            
                        </div>
                    </article>
                    <p className='text-sm mt-1'>
                        Their medical services are top notch. They are the best amongst the rest. They are dependable
                    </p>

                </section>
            </SwiperSlide>

        </Swiper>
    </main>
  )
}

export default Testimonial