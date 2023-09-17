import { useEffect, useRef } from 'react'
import { NavLink, Link } from 'react-router-dom'
import logo from '../../assets/images/Health_logo.png'
import profile from '../../assets/images/avatar-icon.png'
import App from '../../App.css'

const navLinks = [
  {
    path: '/home',
    display: 'Home'
  },
  {
    path: '/doctors',
    display: 'Find a Doctor'
  },
  {
    path: '/services',
    display: 'Services'
  },
  {
    path: '/contact',
    display: 'Contact'
  }
]



function Header() {
  
  const headerRef = useRef(null)
  const menuRef = useRef(null)

  const stickyHeader = ()=>{
        window.addEventListener('scroll', ()=>{
          if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
            headerRef.current.classList.add('sticky-header')
          } else {
            headerRef.current.classList.remove('sticky-header')
          }
        })
  }

  useEffect(() => {
    stickyHeader()
      return ()=>{
        // window.removeEventListener('scroll',stickyHeader)
      }
  }, [])

  const toggler = ()=>{
    menuRef.current.classList.toggle('show')
  }

  return (
    <div>
      <header className=' bg-gradient-to-r from-primaryLight from-1% via-white via-12% to-emerald-50 to-1% ' ref={headerRef}>
        <section className='header section w-11/12 flex justify-between mx-auto items-center h-16'>
        <div>
          <img className='w-36' src={logo}></img>
        </div>
        <nav className='navigation' ref={menuRef} onClick={toggler}>
          <ul className='flex justify-center  items-center flex-row gap-1 text-gray-800'>
            {navLinks.map((link,index)=>
            <li className='lg:p-0 p-5 lg:mx-8 hover:font-semibold' key={index}>
              <NavLink className={navClass => navClass.isActive ? 'text-primaryColor font-bold': 'text-gray-800'} to={link.path}>{link.display}</NavLink>
            </li>
            )}
          </ul>
        </nav>

        <div className='flex basis-28 justify-evenly items-center'>
          <img className='hidden' src={profile}></img>
          <Link to={'/login'}>
            <button className='btn'>Login</button>
          </Link>
          <div onClick={toggler} className='hamburger ml-3 text-2xl text-primaryColor font-bold cursor-pointer'>
            &equiv;
          </div>
        </div>

        </section>
      </header>
    
    </div>


  )
}

export default Header