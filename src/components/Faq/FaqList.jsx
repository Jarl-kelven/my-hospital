import React from 'react'
import { faqs } from '../../assets/data/faqs'
import FaqItem from './FaqItem'

function FaqList() {
  return (
    <main>
        <ul>
            {faqs.map((item,index) => 
            <FaqItem item={item} key={index}></FaqItem>)}
        </ul>
    </main>
  )
}

export default FaqList