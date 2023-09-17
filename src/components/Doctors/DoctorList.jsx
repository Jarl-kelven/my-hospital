import React from 'react'
import { doctors } from '../../assets/data/doctors'
import DoctorCard from './DoctorCard'

function DoctorList() {
  return (
    <main>
        <section className='grid grid-cols-1 gap-3 lg:grid-cols-3'>
            {doctors.map((doctor) => <DoctorCard doctor={doctor} key={doctor.id}></DoctorCard>)}
        </section>
        
    </main>
  )
}

export default DoctorList