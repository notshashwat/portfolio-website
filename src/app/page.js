
import Image from "next/image";
import Contact from "./contact";
import Resume from "./resume";
import shash from '../../public/shashwat.jpg'
import Link from 'next/link';
import {BsFillMoonStarsFill} from 'react-icons/bs'
import {AiFillLinkedin, AiFillGithub, AiFillRightCircle} from 'react-icons/ai'
const projects = [
  {'id' : 1,
    'name' : "CAMPDEL",
    'description' : "Designed and Implemented a microservice based application solution made for food delivery in IIT Bhilai Campus.",
    'techs' : ['Node.js','Metaflow','MongoDB','Socket.io','Flask'],
    'concepts' : ['Microservices','MLops','Authentication'],
    'github' : "https://github.com/RASP-food-delivery",
    'link' : "https://campdelrasp.vercel.app/"
  },
  {'id' : 2,
    'name' : "Downloadify",
    'description' : "Built an app to fetch all of users’ Spotify songs and allow them to choose and download multiple songs with a Spotify inspired UI.",
    'techs' : ['React',' Node.js'],
    'concepts' : [],
    'github' : "https://github.com/notshashwat/Downloadify-React",
    'link' : "https://downloadify-frontend-react.onrender.com/"
  },
  {'id' : 3,
    'name' : "Banking Chatbot",
    'description' : "Built voice chatbot for banking application that recognizes natural language and responds using LLM. Functionality for fetching bank details or transferring money.",
    'techs' : ['Flask',' Jquery','Python','vosk','Llama'],
    'concepts' : ['Intent Classification','Function Calling LLM'],
    'github' : "https://github.com/notshashwat/aiml-lab-2",
    'link' : ""
  },
  {'id' : 4,
    'name' : "Mult Drone Delivery Using RL",
    'description' : "Modelled drones as agent that pick and pass parcels to other drones for delivery. Made multi-agent environment and trained PPO algorithm.",
    'techs' : ['Gymnasium',' stable-baseline3','Python'],
    'concepts' : ['MARL','PPO','RL'],
    'github' : "",
    "link" : ""
  },
  {'id' : 5,
    'name' : "CUDA implementation for Convolution ",
    'description' : "High performance CUDA implementation for Convolution operation for CNNs.",
    'techs' : ['CUDA','C'],
    'concepts' : ['shared memory','coalesced memory access','tiling','reduction'],
    'github' : "https://github.com/notshashwat/Parallel-Convolution",
    'link' : ""

  },
  {'id' : 6,
    'name' : "RL Bot : Dots and Boxes ",
    'description' : "Modelled the States, Transition Probabilities, Actions and Rewards. Implemented Value and Policy Iteration to find the optimal policy",
    'techs' : ['Python'],
    'concepts' : ['RL', 'Markov Processes'],
    'github' : "https://colab.research.google.com/drive/1bdkVJ3UW6rGPzgxnj69Bcb3lNRr_kqUE#scrollTo=RajeCQvxxFGh",
    "link" : ""
  },
  
  
  ]
  
  export default function Home() {
   
    return (
    
    <main className="bg-white px-10" >
    <section className=" min-h-screen text-black">
    <nav className="py-10 mb-7 flex justify-end">
    {/* <h1 className="text-xl font-burtons">Portfolio</h1> */}
      {/* <ul className="flex items-center"> */}
        {/* <li><BsFillMoonStarsFill className="cursor-pointer"/></li> */}
        {/* <li> */}
         {/* <button className="bg-gradient-to-r from-pink-800 to-gray-900 text-white px-6 py-3 rounded-md ml-8" onClick={resumeClick}>Resume</button> */}
         <Resume/>
         {/* </li> */}
      {/* </ul> */}
    </nav>
    <div className=" text-center p-10 ">
      <h2 className="text-5xl text-pink-800 font-medium">Shashwat Johri</h2>
      <h3 className="text-2xl py-2">WebDev, ML, Algorithms, HPC</h3>
    
      <p className="text-lg py-5 text-gray-800 px-30">I am a 2024 CS Graduate from IIT Bhilai. I like CS fundamentals, web development, ML and more! I enjoy exploring and applying my knowledge as projects in various domains. I also enjoy practise my problem solving skills, I have represented my college at ICPC Regionals and performed well at various Hackathons. If you're excited about life and tech we'll surely vibe well :)</p>

    </div>
    <div className="text-5xl flex justify-center gap-16">
    <Link href="https://www.linkedin.com/in/shashwat-johri-1402/" passHref legacyBehavior>
      <AiFillLinkedin className="hover:bg-pink-400 rounded-sm cursor-pointer"/>
    </Link>
    <Link href="https://github.com/notshashwat" passHref legacyBehavior>
      <AiFillGithub className="hover:bg-pink-400 rounded-full cursor-pointer"/>
    </Link>
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
      {projects.map(project =>(

        <div className="flex flex-col shadow-lg rounded-md w-80 m-10 justify-between p-5">
        <div className="flex items-center justify-center">
          <h3 className="text-pink-950 p-5 text-xl font-burtons">{project.name}</h3>
          { project.github !== "" &&
            <Link href={project.github} passHref legacyBehavior>
            <AiFillGithub className="shrink-0 text-3xl hover:bg-pink-400 rounded-full cursor-pointer"/>
            </Link>

          }
          { project.link !== "" &&
          <Link href={project.link} passHref legacyBehavior>
          <AiFillRightCircle className="shrink-0 text-3xl hover:bg-pink-400 rounded-full cursor-pointer"/>
          </Link>

          }

        </div>
          <p className="p-5"> {project.description}</p>
         <div>
        <div className="flex  flex-wrap">
          {/* <ul className="flex "> */}
          {project.techs.map(tech => (
            <div className='p-2 text-sm text-pink-800 font-medium shadow-xl shrink-0'> {tech}</div>
          ))}          
          {/* </ul> */}
      </div>
    
      <div className="flex  flex-wrap">
          {/* <ul className="flex "> */}
          {project.concepts.map(concept => (
            <div className='p-2 text-sm text-slate-800 font-medium shadow-xl shrink-0'> {concept}</div>
          ))}    
          {/* </ul> */}
      </div>
    
         </div>
          
          
        </div>
      ))}

      {/* </div> */}

      {/* <div className="flex justify-center w-200"> */}







{/* // </div> */}

</div>
    </div>
    <div className="flex flex-row justify-center px-30">

      <div className="flex flex-col">
    <h2 className="text-3xl text-pink-800 font-semibold p-6">Experience</h2>

<ol class="relative border-l-4 border-pink-800 border-">                  
    <li class="mb-10 ms-4">
        <div class="absolute w-3 h-3 bg-black rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time class="mb-1 text-sm font-normal leading-none text-black-400 dark:text-pink-500">November 2020 - May 2024</time>
        <h3 class="text-lg font-semibold text-pink-900 dark:text-white">B.Tech Computer Science and Engineering, IIT Bhilai</h3>
        <p class="mb-1 text-base font-normal pink-gray-500 dark:pink-gray-400">CGPA 9.46/10</p>
        <p class="mb-1 text-base font-normal pink-gray-500 dark:pink-gray-400">Courses Taken -  Data Structures, Algorithms, ML, AI, NLP, DBMS, OS, Computer Network, Computer System Design</p>
        <p class="mb-4 text-base font-normal pink-gray-500 dark:pink-gray-400">Volunteer Positions: Coordinator - Quizzing club 2021-22, Core Member - Google Developer Student Club, Member - Literary
and Debate Society.</p>
        
        {/* <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">Learn more <svg class="w-3 h-3 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10"> */}
    {/* <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/> */}
  {/* </svg></a> */}
    </li>
    <li class="mb-10 ms-4">
        <div class="absolute w-3 h-3 bg-black rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time class="mb-1 text-sm font-normal leading-none text-black-400 dark:text-pink-500">May 2023 - July 2023</time>
        <h3 class="text-lg font-semibold text-pink-900 dark:text-white">Summer Intern @ CDAC-Pune</h3>
        {/* <p class="text-base font-normal text-pink-500 dark:text-pink-400">All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.</p> */}
        <p class="mb-1 text-base font-normal pink-gray-500 dark:pink-gray-400">Used Road Vector data to identify and prioritize accident hotspots for PM Gram Sadak Yojana. </p>
        <p class="mb-4 text-base font-normal pink-gray-500 dark:pink-gray-400">Showcased Python proficiency by implementing research papers Reproduced 81% accuracy in road curve classification.</p>
        
    </li>
    <li class="ms-4">
        <div class="absolute w-3 h-3 bg-black rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time class="mb-1 text-sm font-normal leading-none text-black-400 dark:text-pink-500">May 2024 - Present</time>
        <h3 class="text-lg font-semibold text-pink-900 dark:text-white">Data Engineer @ Skan</h3>
        {/* <p class="text-base font-normal text-pink-500 dark:text-pink-400"></p> */}
    </li>
</ol>


      </div>
    </div>


    <div>
      <Contact/>
    </div>
    </section>
    </main>
  );
}
