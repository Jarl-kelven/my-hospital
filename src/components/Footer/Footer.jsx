import React from 'react'
import { FaFacebook,FaTwitter,FaInstagram,FaGithub } from 'react-icons/fa'
import greyLogo from '../../assets/images/Grey-logo.png'

function Footer() {
  return (
    <footer className='bg-gray-800 text-white p-3'>
      <section>
        <img src={greyLogo} alt=''></img>
      </section>
      <div className='md:grid md:grid-cols-3 items-center justify-center w-full'>
        <section className='px-4 my-12 lg:px-4'> 
          <h3 className='foot-head mb-3'>Company</h3>
          <ul className='foot-list text-xs'>
            <li>About us</li>
            <li>Our Team</li> 
            <li>Blog</li>
            <li>Careers</li>
            <li>Mission & Values</li>
          </ul>
        </section>

        <section className='px-4 my-12 lg:px-4'> 
          <h3 className='foot-head mb-3'>Resources</h3>
          <ul className='foot-list text-xs'>
            <li>Health Tips</li>
            <li>Patient Education</li>
            <li>Wellness Programs</li>
            <li>News & Updates</li>
            <li>Community Outreach</li>
          </ul>
        </section>
        <section className='px-4 my-12 lg:px-4'> 
          <h3 className='foot-head mb-3'>Get Help</h3>
          <ul className='foot-list'>
            <li>Contact Us</li>
            <li>FAQ</li>
            <li>Support Centre</li>
            <li>Privacy Policy</li>
            <li>Terms of Use</li>
          </ul>
        </section>

      </div>
      <section className='px-4 mt-28 w-full'>
          {/* <h3 className='foot-head mb-3'>Social Media</h3> */}
          <ul className='social-list flex items-center justify-center'>
            <li><FaFacebook></FaFacebook></li>
            <li><FaGithub></FaGithub></li>
            <li><FaInstagram></FaInstagram></li>
            <li><FaTwitter></FaTwitter></li>
          </ul>
      </section>  
      
    </footer>
  )
}

export default Footer