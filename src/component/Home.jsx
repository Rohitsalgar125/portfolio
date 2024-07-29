import "./Home.css";
import {motion} from "framer-motion"

function Home() {
  return (
    <div className=" w-full h-screen flex justify-center items-center">
      <div className=" mx-10">
        <motion.p initial={{opacity:0 , y : 100}} animate={{opacity:1 , y : 0}} transition={{delay:1,duration :1}} className=" text-6xl font-semibold text-center font-serif">
          I am a MERN stack developer.
        </motion.p>
        <motion.p initial={{opacity:0 , y : 100}} animate={{opacity:1 , y : 0}} transition={{delay:1,duration :1}} className="text-xl text-center m-5 font-serif">
          Transforming visions into dynamic web experiences, one MERN stack at a
          time
        </motion.p>
        <motion.p initial={{opacity:0 , y : 100}} animate={{opacity:1 , y : 0}} transition={{delay:1,duration :1}} className="text-center font-semibold">
          I have 2 years of experience building and desgining software.
        </motion.p>
        <motion.p initial={{opacity:0 , y : 100}} animate={{opacity:1 , y : 0}} transition={{delay:1,duration :1}} className="text-center font-semibold">
          Currently, I love to work on web application using technologies like
          React, Tailwind, Next JS and Node JS.
        </motion.p>
      </div>
    </div>
  );
}

export default Home;
