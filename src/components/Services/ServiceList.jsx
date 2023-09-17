import React from 'react'
import { services } from '../../assets/data/services'
import ServiceCard from './ServiceCard'

function ServiceList() {
  return (
    <div className='grid grid-cols-1 mb-10 lg:grid-cols-3'>
        {
            services.map((item,index)=>
                <ServiceCard item={item} index={index}></ServiceCard>
            )
        }
    </div>
  )
}

export default ServiceList