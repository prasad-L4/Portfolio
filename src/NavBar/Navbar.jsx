import React from 'react'
import'./Navbar.css'
import {Link} from 'react-scroll'

const Navbar = () => {
  return (
    <>
    <div >
      <header data-aos="fade-down" className="navbar text-gray-600 bg-transparent  body-font">
        <div  className="container  mx-auto flex flex-wrap  flex-col md:flex-row items-center">
          <a className="flex  title-font font-medium items-center text-white-900 mb-4 md:mb-0">
            <span className=" logo ml-3  ">PortFolio</span>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-[10px] text-center sm:text-base justify-center">
            <Link to='head' spy={true} smooth={true} offset={-100} duration={10} className=" nav mr-5  hover:text-orange-400 text-white ">HOME</Link>
            <Link to='skills' spy={true} smooth={true} offset={-70} duration={10} className=" nav mr-5  hover:text-orange-400 text-white ">SKILLS</Link>
            <Link to='works' spy={true} smooth={true} offset={-40} duration={10} className=" nav mr-5  hover:text-orange-400 text-white ">WORKS</Link>
   
            <Link to='contact' spy={true} smooth={true} offset={-10} duration={10} className=" nav mr-5 hover:text-orange-400 text-white ">CONTACT</Link>
          </nav>
        </div>
      </header>
    </div>

    
    
      
    </>
  )
}

export default Navbar
