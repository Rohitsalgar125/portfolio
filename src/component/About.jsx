import { motion } from "framer-motion";

export default function About() {
  const myString = `Specializing in crafting dynamic web experiences with the MERN stack.
  From idea to implementation, I turn concepts into captivating
  applications.Passionate about building scalable solutions using MongoDB,
  Express.js, React.js, and Node.js.Bringing innovation to life through intuitive user interfaces and
  seamless functionality.Elevating your online presence with cutting-edge MERN stack
  development.Experience the power of modern web development with my MERN expertise.
  Creating responsive and scalable applications tailored to your unique
  needs.Let's collaborate to transform your vision into a remarkable digital
  reality.`;
  const mySplittedString = myString.split("");

  const charVariants = {
    hidden: {
      opacity: 0,
    },
    reveal: {
      opacity: 1,
    },
  };

  return (
    <div className=" w-full h-screen text-center" name="about">
      <p className="text-4xl underline">About</p>
      <div className="mt-10 font-serif text-lg">
        <h4 className="font-semibold font-serif animate-pulse text-2xl">
          Hi I'm Rohit , Nice to meet you
        </h4>
        <motion.div whileInView='reveal' initial="hidden">
          {mySplittedString?.map((e, i) => {
            return <motion.span key={i}>{e}</motion.span>;
          })}
        </motion.div>
      </div>
    </div>
  );
}
