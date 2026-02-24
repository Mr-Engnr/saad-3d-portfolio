import { motion } from "framer-motion";
import { useState, useEffect } from "react";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [jobIndex, setJobIndex] = useState(0);
  
  const jobs = ["AI Agents Engineer", "ML Engineer", "Data Analyst", "Cloud Engineer", "Web Developer"];
  const currentJob = jobs[jobIndex];

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (text === currentJob) {
          // Start deleting after a pause
          setTimeout(() => setIsDeleting(true), 1500);
          return;
        }
        setText(currentJob.slice(0, text.length + 1));
      } else {
        if (text === "") {
          setIsDeleting(false);
          setJobIndex((prev) => (prev + 1) % jobs.length);
          return;
        }
        setText(currentJob.slice(0, text.length - 1));
      }
    }, isDeleting ? 100 : 150);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, currentJob, jobIndex]);

  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[50px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>Saad</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            AI agents. Automated workflows. Data-driven decisions. That's my stack.
          </p>
          <p className={`${styles.heroSubText} mt-4 text-white-100`}>
            I am a{" "}
            <span className='text-[#915EFF] font-bold'>
              {text}
              <span className='animate-pulse'>|</span>
            </span>
          </p>
        </div>
      </div>

      <ComputersCanvas />

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
