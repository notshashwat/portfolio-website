import Image from "next/image";
import shash from '../../public/shashwat.jpg'
import {BsFillMoonStarsFill} from 'react-icons/bs'
import {AiFillLinkedin, AiFillGithub, AiFillRightCircle} from 'react-icons/ai'
const projectname = "multudrone"
export default function Home() {
  return (
    <main className="bg-white px-10" >
    <section className=" min-h-screen text-black">
    <nav className="py-10 mb-12 flex justify-end">
    {/* <h1 className="text-xl font-burtons">Portfolio</h1> */}
      <ul className="flex items-center">
        <li><BsFillMoonStarsFill className="cursor-pointer"/></li>
        <li> <a className="bg-gradient-to-r from-pink-800 to-gray-900 text-white px-4 py-2 rounded-md ml-8" href="#">Resume</a></li>
      </ul>
    </nav>
    <div className=" text-center p-10">
      <h2 className="text-5xl text-pink-800 font-medium">Shashwat Johri</h2>
      <h3 className="text-2xl py-2">WebDev, ML, Algorithms, HPC</h3>
      <p className="text-md py-5 text-gray-800">I am a 2024 CS Graduate from IIT Bhilai. I like CS fundamentals, web development, ML and more!</p>
    </div>
    <div className="text-5xl flex justify-center gap-16">
      <AiFillLinkedin />
      <AiFillGithub />
    </div>
   
      <div className="relative mx-auto w-60 mt-10 rounded-2xl overflow-hidden">
        <Image src={shash} layout="relative" objectFit="cover"/>
      </div>
      {/* <div className="flex justify-center">
      <div className="flex flex-col justify-end">
      <h1 className="text-xl align-middle pl-10 font-burtons py-2"> B.Tech. CSE, IIT Bhilai</h1>
      <h1 className="text-xl align-middle pl-10 font-burtons py-2"> CGPA 9.46</h1>
      <h1 className="text-xl align-middle pl-10 font-burtons py-2"> Jee Adv. AIR - 4300</h1>
      <h1 className="text-xl align-middle pl-10 font-burtons py-2"> ICPC Regionalist (2x)</h1>
      
        
      </div>

    </div> */}
    <div className="text-center py-10 ">
      <h2 className="text-4xl text-pink-800 font-semibold p-2">My projects</h2>
      <div className="flex flex-wrap justify-center ">

    
      {/* <div className="flex justify-center w-200"> */}

        <div className="flex flex-col shadow-lg rounded-md w-80 m-10 justify-between p-5">
        <div className="flex items-center justify-center">
          <h3 className="text-pink-950 p-5 text-xl font-burtons">Downloadify </h3>
          <AiFillGithub className="text-xl"/>
          <AiFillRightCircle className="text-xl"/>

        </div>
          <p> Built an app to fetch all of users’ Spotify songs and allow them to choose and download multiple songs with a Spotify inspired UI.</p>
         <div>
          <div className="flex  overflow-scroll">
          <ul className="flex ">
          <li className='p-2 text-sm text-pink-800 font-medium shadow-xl '> React</li>
          <li className=' p-2 text-sm text-pink-800 font-medium shadow-xl '> Node.js</li>
          
          </ul>
      </div>
    

         </div>
          
          
        </div>

      {/* </div> */}

      {/* <div className="flex justify-center w-200"> */}

<div className="flex flex-col shadow-lg rounded-md w-80 m-10 justify-between p-5">
<div className="flex items-center justify-center">
  <h3 className="text-pink-950 p-5 text-xl font-burtons">Banking Chatbot</h3>
  <AiFillGithub className="text-xl"/>
  <AiFillRightCircle className="text-xl"/>
  
</div>
<p>Built voice chatbot for banking application that recognizes natural language and responds using LLM. Functionality for fetching bank details or transferring money.</p>
  <div>

    <div className="flex  overflow-scroll">
    <ul className="flex ">
    <li className='p-2 text-sm text-pink-800 font-medium shadow-xl'> Flask</li>
    <li className='p-2 text-sm text-pink-800 font-medium shadow-xl'> Jquery</li>
    <li className='p-2 text-sm text-pink-800 font-medium shadow-xl'> Python</li>
    <li className='p-2 text-sm text-pink-800 font-medium shadow-xl'> vosk</li>
    
    
    </ul>
  </div>
  <div className="flex  overflow-scroll">
    <ul className="flex ">
    <li className='p-2 text-sm text-pink-700 font-medium shadow-xl'> Intent Classification</li>
    <li className='p-2 text-sm text-pink-700 font-medium shadow-xl'> Function Calling LLM</li>
    </ul>
  </div>
    
  </div>
  
</div>


<div className="flex flex-col shadow-lg rounded-md w-80 m-10 justify-between p-5">
<div className="flex items-center justify-center">
  <h3 className="text-pink-950 p-5 text-xl font-burtons">CAMPDEL</h3>
  <AiFillGithub className="text-xl"/>
  <AiFillRightCircle className="text-xl"/>

</div>
  <p>Designed and Implemented a full stack microservice based application solution made for food delivery in IIT Bhilai Campus.</p>

  <div>

    <div className="flex  overflow-scroll">
    <ul className="flex ">
    <li className='p-2 text-sm text-pink-800 font-medium shadow-xl'> Node.js</li>
    <li className='p-2 text-sm text-pink-800 font-medium shadow-xl'> Metaflow</li>
    <li className='p-2 text-sm text-pink-800 font-medium shadow-xl'> MongoDB</li>
    <li className='p-2 text-sm text-pink-800 font-medium shadow-xl'> Socket.io</li>
    <li className='p-2 text-sm text-pink-800 font-medium shadow-xl'> Flask</li>
    
    </ul>
  </div>
  <div className="flex  overflow-scroll">
    <ul className="flex ">
    <li className='p-2 text-sm text-pink-700 font-medium shadow-xl'> Microservices</li>
    <li className='p-2 text-sm text-pink-700 font-medium shadow-xl'> MLops</li>
    <li className='p-2 text-sm text-pink-700 font-medium shadow-xl'> Authentication</li>
    </ul>
  </div>
    
  </div>
  
</div>



<div className="flex flex-col shadow-lg rounded-md w-80 m-10 justify-between p-5">
<div className="flex items-center justify-center">
  <h3 className="text-pink-950 p-5 text-xl font-burtons">{"Mult Drone Delivery Using RL" + projectname}</h3>
  <AiFillGithub className="text-xl"/>
  <AiFillRightCircle className="text-xl"/>

</div>
<p>Modelled drones as agent that pick and pass parcels to other drones for delivery. Made multi-agent environment and trained PPO algorithm.</p>
  <div>

    <div className="flex  overflow-scroll">
    <ul className="flex ">
    <li className='p-2 text-sm text-pink-800 font-medium shadow-xl'> Gymnasium</li>
    <li className='p-2 text-sm text-pink-800 font-medium shadow-xl'> stable-baseline3</li>
    <li className='p-2 text-sm text-pink-800 font-medium shadow-xl'> Python</li>
    
    </ul>
  </div>
  <div className="flex  overflow-scroll">
    <ul className="flex ">
    <li className='p-2 text-sm text-pink-700 font-medium shadow-xl'> MARL</li>
    <li className='p-2 text-sm text-pink-700 font-medium shadow-xl'> PPO</li>
    <li className='p-2 text-sm text-pink-700 font-medium shadow-xl'> RL</li>
    </ul>
  </div>
    
  </div>
  
</div>
{/* // </div> */}

</div>
    </div>
    </section>
    </main>
  );
}
