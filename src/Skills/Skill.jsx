import React from "react";
import react from '../images/react.mp4'
import javascript from '../images/javascript.mp4'
import html from '../images/html.mp4'
import css from '../images/css.mp4'
import 'animate.css';


const Skill = () => {
  return (
    <>
     
   
      
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
        <div data-aos="fade-up" className="relative mb-5">
        <h3 className="index-module_type__E-SaG text-3xl  text-gray-400 sm:text-3xl">My Skills</h3>
        <span className="h-[1.1px] right-0 absolute w-[90%] bg-gray-300 block"></span>
      </div>
          <div class="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
            <div class="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full  text-indigo-500 flex-shrink-0">
            <video loop muted autoPlay className="video-about">
        <source src={react} type="video/mp4"></source>
      </video>
            </div>
            <div class="flex-grow sm:text-left mt-6 sm:mt-0">
              <h2 class="text-white text-lg title-font font-medium mb-2">
                REACT JS
              </h2>
              <p class="leading-relaxed text-base">
              Proficient in building interactive user interfaces and dynamic
                web applications using React.js. Skilled in component-based
                architecture, state management, and integrating APIs to create
                seamless user experiences.
              </p>
            </div>
           

          </div>

          <div class="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
            <div class="flex-grow sm:text-left  mt-6 sm:mt-0">
              <h2 class="text-white text-lg title-font font-medium mb-2">
                JAVA SCRIPT
              </h2>
              <p class="leading-relaxed text-base">
              Strong understanding of JavaScript fundamentals and its role in
                creating dynamic and interactive web content. Capable of
                utilizing libraries and frameworks to streamline development
                processes and enhance user interactivity.
              </p>
            </div>
            <video loop muted autoPlay className="video-about">
        <source src={javascript} type="video/mp4"></source>
      </video>
          </div>

          <div class="flex items-center lg:w-3/5 mx-auto sm:flex-row flex-col">
          <video loop muted autoPlay className="video-about">
        <source src={html} type="video/mp4"></source>
      </video>
            <div class="flex-grow sm:text-left  mt-6 sm:mt-0">
              <h2 class="text-white text-lg title-font font-medium mb-2">
                HTML
              </h2>
              <p class="leading-relaxed text-base">
              Well-versed in crafting structured and semantic HTML markup to
                create the foundation of web pages. Knowledgeable about
                accessibility standards and the latest HTML5 features to enhance
                website functionality.
              </p>
            </div>
          </div>

          <div class="flex items-center lg:w-3/5 mx-auto border-t pt-10 mt-10 border-gray-200 sm:flex-row flex-col">
            <div class="flex-grow sm:text-left  mt-6 sm:mt-0">
              <h2 class="text-white text-lg title-font font-medium mb-2">
                CSS
              </h2>
              <p class="leading-relaxed text-base">
              Experienced in styling web applications with CSS to achieve
                visually appealing and responsive designs. Proficient in layout
                techniques, CSS pre-processors, and adapting designs for various
                screen sizes.
              </p>
            </div>
            <video loop muted autoPlay className="video-about">
        <source src={css} type="video/mp4"></source>
      </video>
          </div>
        </div>
      </section>
    

    
    </>
  );
};

export default Skill;
