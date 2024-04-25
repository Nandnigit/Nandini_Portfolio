import "./App.css";
import Porfile from "./assets/Photo.jpg";
import Project1 from "./assets/Screenshot2.png";
import Project2 from "./assets/1.png";
import Project3 from "./assets/Screenshot4.png";
import Project4 from "./assets/2.png";
import ArrowDown from "./assets/arrow-down.svg";
import resume from './assets/Nandini Gupta.pdf'
import Certificate_CSA from './assets/Nandini_CSA.jpg';
import Certificate_CAD from './assets/Nandini_CAD.jpg';
import Certificate_C from './assets/Nandini_C++.jpg';
import Certificate_AMCAT from './assets/Nandini_AMCAT.jpg';
import html from './assets/html_logo.jpg';
import css from './assets/css-logo.png';
import Bootstrap from './assets/bootstrap.png';
import Tailwind from './assets/tailwind-css.png';
import reactlogo from './assets/react.png';
import gitlogo from './assets/git.png';
import servicenow from './assets/ServiceNow.png';
import salesforce from './assets/salesforce.webp';

import { useEffect, useState } from "react";

function App() {
  const [scrolling, setScrolling] = useState(false);

  const onPageScroll = () => {
    if(window.pageYOffset > 200) {
      setScrolling(true)
    } else {
      setScrolling(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", onPageScroll)
    return() => {
      window.removeEventListener("scroll", onPageScroll)
    }
  }, [])

  return (
    <div className="max-w-4xl m-auto relative">


    {/* Navbar */}
      <header className={`${scrolling ? 'border-b border-gray-900' : ''}  fixed left-0 right-0 top-0 z-20`} id="home">
        <div className="container m-auto px-4 py-6 max-w-4xl bg-black ">
          <div className="flex flex-col gap-4 sm:flex-row justify-between items-center">
            <div>
              <h1 className=" font-extrabold text-3xl">Portfolio</h1>
            </div>
            <div>
              <ul className="flex gap-4">
                <li>
                  <a href="#projects" className="text-gray-300 hover:text-white hover:underline cursor-pointer">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#technologies" className="text-gray-300 hover:text-white hover:underline cursor-pointer">
                    Technologies
                  </a>
                </li>
                <li>
                  <a href="#aboutme" className="text-gray-300 hover:text-white hover:underline cursor-pointer">
                    Certificate
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-gray-300 hover:text-white hover:underline cursor-pointer">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>

      {/* Home section */}
      <main className="relative mt-28">
        {/* Intro section */}
        <section>
          <div className="container m-auto px-4 pt-12 pb-12 sm:pt-20 flex flex-col sm:flex-row gap-6 text-center sm:text-left">
            <div>
              <h2 className="font-bold text-4xl">Hello, I'm Nandini,</h2>
              <div>
                <h2 className="font-bold text-4xl mt-1 gradiant-text">frontend developer</h2>
              </div>
              <div>
                <p className="mt-4 text-gray-400">
                  A self-assured, goal-oriented individual who is enthusiastic about invention and the application of fresh concepts. 
                  In order to discover a solution that inspires me to continue my career as a frontend developer, I want to apply my knowledge to problems that actually exist in the world. 
                </p>
                <button className="px-8 text-lg shadow-gray-500 shadow-md py-5 mt-5 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700 hover:font-bold">
                  <a href={resume} target='_blank'>Download resume</a>  
                </button>
              </div>
            </div>
            <div >
              <div className="  rounded-xl ">
                <img src={Porfile} className="relative z-10 w-[280px] m-auto sm:w-[600px]" id='profile_photo' />
              </div>
            </div>
          </div>
        </section>

        {/* Projects section */}
        <section id="projects">
          <div className="container m-auto px-4 sm:py-12">
            <h2 className="text-2xl font-semibold">Projects</h2>
            <div className="flex flex-col sm:flex-row gap-10 mt-11">
              <div className="border border-gray-500 rounded-xl p-5 flex-1">
                <img src={Project4} className="w-full h-auto" />
                <h3 className="text-2xl font-semibold mt-8">
                  Portfolio For Interior Designer
                </h3>
                <p className="text-gray-400 text-sm mt-2">
                  Responsive layout (HTML, Bootstrap, React)
                </p>
                <div className=" mt-20">
                  
                  <button className="text-lg p-3 border rounded-xl hover:text-black hover:bg-slate-400">
                    <a href='https://github.com/Nandnigit/Tanisha_Portfolio' target='_blank'>Checkout github</a>
                    
                  </button>
                </div>
              </div>
              <div className="border border-gray-500 rounded-xl p-5 flex-1">
                <img src={Project2} className="w-full h-auto" />
                <h3 className="text-2xl font-semibold mt-8">
                  GrowthX Frontend UI Clone
                </h3>
                <p className="text-gray-400 text-sm mt-2">
                  Responsive HTML/CSS React layout for GrowthX UI clone. (HTML5, CSS, React) 
                </p>
                <div className=" mt-16">
                  
                  <button className="text-lg p-3 border rounded-xl  hover:text-black hover:bg-slate-400">
                    <a href='https://github.com/Nandnigit/Landing-page' target='_blank'> Checkout github</a>
                    
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row  gap-10 mt-11">
              <div className="border border-gray-500 rounded-xl p-5 flex-1">
                <img src={Project3} className="w-full h-auto" />
                <h3 className="text-2xl font-semibold mt-8">
                  UI Design for Amrutam Pharmaceuticals 
                </h3>
                <p className="text-gray-400 text-sm mt-2">
                  Responsive layout (HTML, Tailwind, React)
                </p>
                <div className=" mt-12">
                  
                  <button className="text-lg p-3 border rounded-xl hover:text-black hover:bg-slate-400">
                    <a href='https://github.com/Nandnigit/Assignment_Amrutam_Pharmaceuticals' target='_blank'> Checkout github</a>
                    
                  </button>
                </div>
              </div>
              <div className="border border-gray-500 rounded-xl p-5 flex-1">
                <img src={Project1} className="w-full h-auto" />
                <h3 className="text-2xl font-semibold mt-8">
                  SetUp page UI 
                </h3>
                <p className="text-gray-400 text-sm mt-2">
                  Responsive layout (HTML,Tailwind, React).
                </p>
                <div className=" mt-20 ">
                  
                  <button className="text-lg p-3 border rounded-xl hover:text-black hover:bg-slate-400">
                    <a href='https://github.com/Nandnigit/setup-page' target='_blank' >
                    Checkout github
                    </a>  
                  </button>
                </div>
               </div>
            </div>
          </div>
        </section>

        {/* Technoglies section */}
        <section className="py-10" id="technologies">
          <div className="container m-auto px-4">
            <h2 className="text-2xl font-semibold">My Expertise</h2>
            <div className="mt-14 flex flex-col justify-center gap-4">
              <div className=" flex flex-col md:flex-row gap-5 ">
              <div className="mt-4">
                <div className="flex justify-center  border-2 border-solid border-slate-700 rounded-xl p-3 shadow-md shadow-slate-200 ">
                  {/* <h2 className="font-semibold">HTML</h2> */}
                  <img src={html} height='100' width='100'></img>
                </div>
                </div>
              <div className="mt-4">
                <div className="flex justify-center  border-2 border-solid border-slate-700 rounded-xl p-2 shadow-md shadow-slate-200">
                  {/* <h2 className="font-semibold">CSS</h2> */}
                  <img src={css} height='40' width='60'></img>
                </div>
              </div>
               
              <div className="mt-4">
                <div className="flex justify-center  border-2 border-solid border-slate-700 rounded-xl p-2 shadow-md shadow-slate-200">
                  {/* <h2 className="font-semibold">Bootstrap</h2> */}
                  <img src={Bootstrap} height='50' width='85'></img>
                </div>
              </div>

              <div className="mt-4">
                <div className="flex justify-center  border-2 border-solid border-slate-700 rounded-xl p-2 shadow-md shadow-slate-200">
                  {/* <h2 className="font-semibold">Tailwind</h2> */}
                  <img src={Tailwind} height='200' width='150'></img>
                </div>
              </div>

              <div className="mt-4">
                <div className="flex justify-center  border-2 border-solid border-slate-700 rounded-xl p-2 shadow-md shadow-slate-200">
                  {/* <h2 className="font-semibold">React</h2> */}
                  <img src={reactlogo} height='70' width='80'></img>
                </div>
              </div>

              </div>

              
              
            </div>
          </div>
        </section>
        {/* Additional skills section */}
        <section>
          <div className="container m-auto px-4 py-14">
            <h2 className="text-2xl font-semibold">
              Additional skills
            </h2>
            <div className=" flex flex-col gap-4">
            <div className="flex flex-col md:flex-row ml-4 gap-4  mt-4 ">
              <div>
                <p className="font-bold flex justify-center  md:left-5 border-2 border-solid border-slate-700 rounded-xl p-3 shadow-md shadow-slate-200 ">
                <img src={gitlogo} height='90' width='100'></img>
                </p>
              </div>
              <div>
                <p className="font-bold flex justify-center  md:left-5 border-2 border-solid border-slate-700 rounded-xl p-3 shadow-md shadow-slate-200">
                <img src={servicenow} height='70' width='80'></img>
                </p>
              </div>
              <div>
                <p className="font-bold flex justify-center  md:left-5 border-2 border-solid border-slate-700 rounded-xl p-2 shadow-md shadow-slate-200">
                <img src={salesforce} height='70' width='70'></img>
                </p>
              </div>
              
              
            </div>
            {/* <div className="flex flex-col md:flex-row  gap-3  mt-4  ">
              <div>
                <p className="font-bold before:w-4  relative md:left-5 border-2 border-solid border-slate-700 rounded-xl p-3 shadow-md shadow-slate-200">
                  Leadership
                </p>
              </div>
              <div>
                <p className="font-bold before:w-4  relative md:left-5 border-2 border-solid border-slate-700 rounded-xl p-3 shadow-md shadow-slate-200">
                  Management
                </p>
              </div>
              <div>
                <p className="font-bold before:w-4  relative md:left-5 border-2 border-solid border-slate-700 rounded-xl p-3 shadow-md shadow-slate-200">
                  Teamwork
                </p>
              </div>
              
            </div> */}
            </div>
          </div>
        </section>

        {/* Certificate */}
        <section className="py-8" id="aboutme">
          <div className="container m-auto px-4">
            <h2 className="text-2xl font-semibold">Certificates</h2>
            <div className="mt-12 flex flex-col md:flex-row gap-2 ">
              <div className=" border-2 border-solid border-slate-800 p-3 rounded-xl m-1 shadow-xl shadow-slate-400" >
                <img src={Certificate_CSA} height='100' width="500"></img>
                <spam className=" text-stone-500 text-lg ">
                  Certified System Administrator (CSA) from ServiceNow.
                </spam>
                
              </div>

              <div className=" border-2 border-solid border-slate-800 p-3 rounded-xl m-1 shadow-xl shadow-slate-400" >
              <img src={Certificate_CAD} height='100' width="500"></img>
                <spam className=" text-stone-500 text-lg ">
                Certified Application Developer (CAD) from ServiceNow.
                </spam>
               
              </div>
              </div>
              <div className="mt-12 flex flex-col md:flex-row gap-2">
              <div className=" border-2 border-solid border-slate-800 p-3 rounded-xl m-1 shadow-xl shadow-slate-400" >
              <img src={Certificate_C} height='100' width="500"></img>
                <spam className=" text-stone-500 text-lg ">
                Programming Using C++ from Infosys Springboard.
                </spam>
                
              </div>


              <div  className=" border-2 border-solid border-slate-800 p-3 rounded-xl m-1 shadow-xl shadow-slate-400">
              <img src={Certificate_AMCAT} height='100' width="500"></img>
                <spam className=" text-stone-500 text-lg ">
                Certificate of AMCAT.
                </spam>
                
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer id='contact'>
        <div className="container m-auto flex flex-col md:flex-row gap-2 justify-between px-4 py-6 ">
          
          <div>
            <ul className="flex flex-col md:flex-row gap-4">
              <li>
                <a href='https://github.com/Nandnigit' target='_blank'>
                <i className="fa-brands fa-github w-5 h-15"></i>
                </a>
              </li>
              <li>
                <a href='https://www.linkedin.com/in/nandini-gupta-378930202/' target='_blank'>
                  {/* <img src={LinkedIn} className="w-5" /> */}<i class="fa-brands fa-linkedin"></i>
                </a>
              </li>
              <li>
                <p><i className="fa-solid fa-phone p-1"></i>8755488541</p>
              </li>
              <li>
                <p><i className="fa-solid fa-envelope p-1"></i>nandinigupta63696@gmail.com</p>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      {
        scrolling && (
          <button className="fixed block right-8 bottom-0 w-24" onClick={() => {
            window.scrollTo(0,0);
          }}>
            <img src={ArrowDown} />
          </button>
        )
      }
    </div>
  );
}

export default App;