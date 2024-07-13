
import { work } from "../Works/Work";
import "./Works.css";
import { RxExternalLink } from "react-icons/rx";
import { AiOutlineGithub } from "react-icons/ai";

function Works() {
  return (
    <>
    <div id="works">
      <div data-aos="fade-up" className="relative mt-20 mb-12 mx-16 ">
        <h3 className=" my-skills text-3xl  text-gray-400 sm:text-3xl">
          My Works
        </h3>
        <span className="h-[1.1px] right-0 absolute w-[90%] bg-gray-300 block"></span>
      </div>
      <div className="grid-container ">
        {work.map((work) => (
          <div
            data-aos="zoom-in"
            key={work.id}
            className=" main mt-6  "
            style={{ width: "26rem" }}
          >
            <div className="sub  img-content relative POPUP ">
              <div className="image-container  h-[280px] w-[380px] hover:scale-125 transition duration-500 cursor-pointer shadow-xl rounded-md overflow-hidden sm:h-[260px] sm:w-[92%] sm:bg-cover mx-auto ">
                <img
                  src={work.image}
                  alt={work.title}
                  className=" image flex mx-auto  object-cover w-full h-full hover:scale-125 transition duration-500 cursor-pointer"
                />
              </div>

              <div
                className={` popup  h-[280px] w-fit shadow-xl rounded-md overflow-hidden sm:h-[280px] sm:w-[100%] p-4`}
              >
                <p className=" pop text-gray-700 px-4 py-4 h-[100%]  text-base leading-[1.4] text-justify w-[100%]">
                  {work.desc}
                </p>
                <div className="   bg-transparent  flex items-center w-[100%]  justify-center gap-4">
                  <a
                    href={work.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="  mt-3 rounded-md shadow-md p-1 px-2 flex gap-2 items-center justify-center font-medium"
                  >
                    <RxExternalLink className=" text-black bg-white rounded-full border  w-[35px] h-[35px] p-2" />
                    <p className=" text-white">Demo</p>
                  </a>
                  <br className="w-[2px] bg-white" />
                  <a
                    href={work.git}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="  mt-3 rounded-md shadow-md p-1 px-2 flex gap-2 items-center justify-center font-medium"
                  >
                    <AiOutlineGithub className="  text-black bg-white rounded-full border  w-[35px] h-[35px] p-2" />
                    <p className=" text-white">Code</p>
                  </a>
                </div>
              </div>
              
                <p className="title text-white text-xl font-medium  mt-3 ms-10 mb-20 sm:text-lg name">
                  {work.title}
                </p>
              
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  )
}

export default Works