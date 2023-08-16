import React from "react";
import "./Header.css";
import me from '../images/me.png'

import {AiOutlineLinkedin,AiFillGithub} from 'react-icons/ai'
import {FaTwitterSquare} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'
const Header = () => {
  return (
    <>
     
 
     <section class="text-gray-600 body-font overflow-hidden">
  <div class="container px-5 py-24 mx-auto">
    <div class="lg:w-4/5 mx-auto flex flex-wrap">
      <div class="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
        <h2 class="text-sm title-font text-gray-500 tracking-widest">Hello!</h2>
        <h1 class=" text-gray-900 text-5xl title-font font-medium mb-4">I'm Krishna Prasad</h1>
        <h2 className="text-head">I'm a Frontend Developer  </h2>
        <p class="text leading-relaxed mb-4">Passionate about creating elegant and intuitive user interfaces that combine design and functionality.</p>
       
        
       
        
      </div>
      <img alt="ecommerce" class=" rounded-5 lg:w-2/5 w-30 lg:h-1/2 h-64 object-cover object-center rounded" src={me}/>
 
    </div>
  </div>
</section>
         
         
          
       
    </>
  );
};

export default Header;