import React from 'react'
import { features } from '../../assets/data/features'
import Features from './Features'
function FeatureList() {
  return (
    <main>
        <section className='grid grid-cols-1 gap-3 items-start justify-center xl:grid-cols-3 '>
        { 

        
            features.map((feature)=> <Features feature={feature} key={feature.id}></Features>)
        }
        </section>
    </main>
  )
}

export default FeatureList