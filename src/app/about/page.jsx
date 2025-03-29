"use client";
import Brain from "/workspaces/next-animated-portfolio/src/components/brain.jsx";
import { motion, useInView, useScroll } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const AboutPage = () => {
  const containerRef = useRef();

  const { scrollYProgress } = useScroll({ container: containerRef });

  const skillRef = useRef();
  // const isSkillRefInView = useInView(skillRef, {once:true});
  const isSkillRefInView = useInView(skillRef, { margin: "-100px" });

  const experienceRef = useRef();
  const isExperienceRefInView = useInView(experienceRef, { margin: "-100px" });
  const achievementRef = useRef();
const isAchievementRefInView = useInView(achievementRef, { margin: "-100px" });
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* CONTAINER */}
      <div className="h-full overflow-scroll lg:flex" ref={containerRef}>
        {/* TEXT CONTAINER */}
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:w-1/2">
          {/* BIOGRAPHY CONTAINER */}
          <div className="flex flex-col gap-12 justify-center">
            {/* BIOGRAPHY IMAGE */}
            <Image
              src="https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt=""
              width={112}
              height={112}
              className="w-28 h-28 rounded-full object-cover"
            />
            {/* BIOGRAPHY TITLE */}
            <h1 className="font-bold text-2xl">BIOGRAPHY</h1>
            {/* BIOGRAPHY DESC */}
            <p className="text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              harum quibusdam cupiditate nobis accusamus sed aut aperiam,
              reiciendis numquam! Voluptas voluptatibus obcaecati dolore itaque
              suscipit! Vel doloremque numquam quam nihil.
            </p>
            {/* BIOGRAPHY QUOTE */}
            <span className="italic">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </span>
            {/* BIOGRAPHY SIGN SVG*/}
            <div className="self-end">
           
<svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink">
                <path d="M26.64 39.76L26.64 39.76Q26.64 40.16 25.92 40.16L25.92 40.16Q25.44 40.16 24.52 39.96L24.52 39.96Q23.08 38.08 21.48 30.96L21.48 30.96Q19.80 31.20 16.76 31.32L16.76 31.32Q15.08 31.40 13.92 31.46Q12.76 31.52 12.08 31.60L12.08 31.60Q11.52 32.52 10.70 33.92Q9.88 35.32 8.72 37.16L8.72 37.16Q6.20 41 3.64 41L3.64 41Q0.32 41-1.04 38.12L-1.04 38.12Q-0.84 37.84-0.72 37.80L-0.72 37.80Q-0.60 37.72-0.40 37.80L-0.40 37.80Q-0.24 37.84 0 37.84L0 37.84Q0 39.04 1.96 39.04L1.96 39.04Q4.96 39.04 7.12 36.76L7.12 36.76Q8.36 35.40 10.24 31.76L10.24 31.76Q9.92 31.72 9.66 31.70Q9.40 31.68 9.16 31.68L9.16 31.68Q8.88 31.68 8.42 31.78Q7.96 31.88 7.72 31.88L7.72 31.88Q6.76 31.88 6.76 31.32L6.76 31.32Q6.76 31.04 11.08 30.56L11.08 30.56Q13.08 27.28 15.68 20.60L15.68 20.60Q18 14.72 18 13.52L18 13.52Q18 13.40 17.92 13.22Q17.84 13.04 17.84 12.92L17.84 12.92Q17.84 12.40 19.08 12.40L19.08 12.40Q19.48 12.40 20.60 13.08L20.60 13.08Q21.72 13.72 21.72 14.12L21.72 14.12Q21.72 14.44 21.64 15.06Q21.56 15.68 21.56 16L21.56 16Q21.56 21.48 23.24 29.44L23.24 29.44Q23.92 32.60 24.52 34.92Q25.12 37.24 25.68 38.72L25.68 38.72Q25.84 39.20 26.20 39.42Q26.56 39.64 26.64 39.76ZM20.72 26.76L20.72 26.76Q19.56 19.80 19.40 17.76L19.40 17.76Q19.36 17.20 19.34 16.92Q19.32 16.64 19.32 16.64L19.32 16.64Q19.12 15.92 18.84 15.68L18.84 15.68Q18.48 16.36 17.78 18.08Q17.08 19.80 16.04 22.64L16.04 22.64Q15 25.40 14.18 27.28Q13.36 29.16 12.72 30.28L12.72 30.28L21.24 30.08Q21.24 29.84 20.72 26.76ZM39.76 28.76L39.76 28.76Q39.76 29.88 38.36 34.20L38.36 34.20Q36.44 40 35.28 40L35.28 40Q33.80 40 33.24 37.16L33.24 37.16Q33.08 36.36 32.96 34.66Q32.84 32.96 32.72 30.28L32.72 30.28Q32.52 31 31.98 32.94Q31.44 34.88 30.64 38.12L30.64 38.12Q30.24 39.84 29.40 39.84L29.40 39.84Q28.16 39.84 27.88 38.16L27.88 38.16L27.72 35.16Q27.60 33.40 27.72 31.96L27.72 31.96L27.84 30.48L27.48 29.72Q27.52 28.64 27.68 28.28L27.68 28.28Q27.92 27.64 28.68 27.64L28.68 27.64Q29.48 27.64 29.48 28.36L29.48 28.36Q29.48 28.60 29.20 29.40L29.20 29.40Q28.96 30.20 28.96 30.68L28.96 30.68Q28.96 31.04 28.96 31.60L28.96 31.60Q28.96 32.12 28.92 32.84L28.92 32.84Q28.88 33.56 28.88 34.12L28.88 34.12Q28.88 34.64 28.88 35L28.88 35Q28.88 37.88 29.52 37.88L29.52 37.88Q29.72 37.88 30.04 36.84L30.04 36.84Q30.60 34.52 30.88 33.80L30.88 33.80Q31.44 32 31.80 30.48Q32.16 28.96 32.24 27.60L32.24 27.60Q32.36 25.92 32.80 25.60L32.80 25.60Q34.84 25.72 34.84 26.88L34.84 26.88Q34.84 26 34.72 26.56Q34.60 27.12 34.40 29.16L34.40 29.16Q34.20 31.16 34.10 32.42Q34 33.68 34 34.24L34 34.24Q34 38.56 35.12 38.56L35.12 38.56Q36.08 38.56 37.44 34.32L37.44 34.32Q37.84 33.08 38.18 31.86Q38.52 30.64 38.80 29.40L38.80 29.40Q39.08 28.16 39.44 28.16L39.44 28.16Q39.76 28.16 39.76 28.76ZM46.12 39.56L46.12 39.56Q45.24 39.56 44.60 38.24L44.60 38.24Q44.44 38 43.88 36.16L43.88 36.16Q43.60 36.84 43.28 37.58Q42.96 38.32 42.64 39.12L42.64 39.12Q41.92 40.36 40.76 40.36L40.76 40.36Q39.72 40.36 39.12 39.16L39.12 39.16Q38.64 38.16 38.64 37L38.64 37Q38.64 36.16 38.68 34.94Q38.72 33.72 38.80 32.08L38.80 32.08Q38.96 28 39.24 27.56L39.24 27.56Q39.44 27.24 39.92 27.24L39.92 27.24Q40.32 27.24 40.64 27.58Q40.96 27.92 40.96 28.32L40.96 28.32Q40.96 28.72 40.80 29.24L40.80 29.24Q40.72 29.64 40.66 29.86Q40.60 30.08 40.56 30.16L40.56 30.16Q40.28 31.72 40.14 33.58Q40 35.44 40 37.60L40 37.60Q40 39.36 40.76 39.36L40.76 39.36Q41.36 39.36 41.88 38.36L41.88 38.36Q42.08 37.96 42.24 37.58Q42.40 37.20 42.56 36.80L42.56 36.80Q43.44 34.72 43.88 31.60L43.88 31.60Q43.92 31.52 43.98 31.08Q44.04 30.64 44.16 29.88L44.16 29.88Q44.24 29.32 44.30 28.90Q44.36 28.48 44.36 28.16L44.36 28.16Q44.36 27.24 44.36 26.88L44.36 26.88Q44.36 26.48 44.32 26.64L44.32 26.64Q44.44 25.60 45.12 25.68L45.12 25.68Q46.28 25.68 46.28 26.32L46.28 26.32Q46.28 26.52 46.06 26.98Q45.84 27.44 45.80 27.80L45.80 27.80Q45.80 27.96 45.70 28.70Q45.60 29.44 45.40 30.80L45.40 30.80Q45.24 31.92 45.16 32.84Q45.08 33.76 45.08 34.48L45.08 34.48Q45.08 38.28 46.24 38.28L46.24 38.28Q47.32 38.28 48.56 34.04L48.56 34.04Q49.04 32.32 50 28.76L50 28.76Q50.16 28.16 50.48 28.16L50.48 28.16Q50.80 28.16 50.80 28.64L50.80 28.64Q50.80 30.04 49.44 34.24L49.44 34.24Q47.76 39.56 46.12 39.56ZM56.56 29.80L56.56 29.80Q56.56 32.72 55.80 36.12L55.80 36.12Q54.76 41 53 41L53 41Q52 41 51.24 39.20L51.24 39.20L50.88 39.20Q50.68 39.80 50.32 39.80L50.32 39.80Q49.96 39.80 49.68 39.34Q49.40 38.88 49.40 38.48L49.40 38.48Q49.40 38.32 49.48 38.08L49.48 38.08Q49.44 35.04 49.64 31.68Q49.84 28.32 50.28 24.56L50.28 24.56Q50.48 23.12 50.76 20.96Q51.04 18.80 51.40 15.88L51.40 15.88Q51.56 14.56 51.44 14.16L51.44 14.16Q51.68 13.72 52.48 13.80L52.48 13.80Q53.44 13.80 53.44 14.80L53.44 14.80Q53.44 15.20 53.16 16.20L53.16 16.20Q53 16.80 52.86 17.40Q52.72 18 52.64 18.56L52.64 18.56Q51.76 23.56 51.32 26.90Q50.88 30.24 50.88 32.04L50.88 32.04Q51.28 31.08 51.68 29.48L51.68 29.48Q52.52 26.24 54.08 26.24L54.08 26.24Q56.56 26.24 56.56 29.80ZM55.28 30.56L55.28 30.56Q55.28 27.24 54.36 27.24L54.36 27.24Q53.24 27.24 52.04 31.88L52.04 31.88Q50.96 35.92 50.96 37.72L50.96 37.72Q51.32 38.04 51.92 39.04L51.92 39.04Q52.28 39.64 52.80 39.64L52.80 39.64Q53.76 39.64 54.40 37.20L54.40 37.20Q55.28 34.16 55.28 30.56ZM70.40 34.04L70.40 34.04Q69.96 35.64 69.68 36.60Q69.40 37.56 69.24 37.88L69.24 37.88Q68.52 39.60 67.48 39.60L67.48 39.60Q65.12 39.60 64.88 35.12L64.88 35.12Q64.88 35.12 64.86 33.54Q64.84 31.96 64.80 28.72L64.80 28.72Q64.12 29.76 61.80 40.20L61.80 40.20Q61.52 40.36 61.24 40.36L61.24 40.36Q59.64 40.36 59.64 33.88L59.64 33.88Q59.64 32.24 59.88 29.82Q60.12 27.40 60.56 24.12L60.56 24.12Q61 20.84 61.24 18.42Q61.48 16 61.48 14.36L61.48 14.36Q61.48 14 61.46 13.72Q61.44 13.44 61.40 13.24L61.40 13.24Q61.68 12.60 62.72 12.64L62.72 12.64Q63.52 12.72 63.52 13.36L63.52 13.36Q63.52 13.88 63.16 15.08L63.16 15.08Q63.08 15.48 63 15.86Q62.92 16.24 62.84 16.60L62.84 16.60Q61.92 22.44 61.44 26.76Q60.96 31.08 60.96 33.96L60.96 33.96Q60.96 33.88 61.06 34.78Q61.16 35.68 61.36 37.56L61.36 37.56Q62.36 34.76 63.16 31.74Q63.96 28.72 64.56 25.40L64.56 25.40Q64.72 24.32 65.36 24.32L65.36 24.32Q65.80 24.32 67.08 25.40L67.08 25.40Q66 31.12 66 34.88L66 34.88Q66 38.12 67.28 38.12L67.28 38.12Q68.40 38.12 69.92 32.72L69.92 32.72Q70.20 31.80 70.44 30.88Q70.68 29.96 70.88 29.04L70.88 29.04Q71.04 28.16 71.40 28.16L71.40 28.16Q71.76 28.16 71.76 28.68L71.76 28.68Q71.76 29.24 70.40 34.04ZM74.80 29.44L74.32 28.80Q74.16 26.96 73.32 26.96L73.32 26.96Q72.64 26.96 72.12 28.88L72.12 28.88Q71.96 29.32 71.76 30.04Q71.56 30.76 71.28 31.68L71.28 31.68Q70.64 34.12 70.64 37.72L70.64 37.72Q70.64 38.40 70.92 39L70.92 39Q71.28 39.76 71.84 39.76L71.84 39.76Q72.60 39.32 73.44 36.68L73.44 36.68Q73.76 35.64 74 34.74Q74.24 33.84 74.32 33.12L74.32 33.12L74.80 29.44ZM76.76 40L76.76 40Q75.28 40 74.32 37.08L74.32 37.08Q73.28 40.80 71.64 40.80L71.64 40.80Q69.28 40.80 69.40 34.96L69.40 34.96Q69.48 33.40 70.40 29.76L70.40 29.76Q71.56 25.60 72.36 25.60L72.36 25.60Q74.12 25.60 74.60 26.52L74.60 26.52L75.32 27.96L76.72 28.44Q75.72 31.36 75.36 35.60L75.36 35.60Q75.28 36.52 75.52 37.52L75.52 37.52Q75.84 38.92 76.52 38.92L76.52 38.92Q77.88 38.92 80.24 29.08L80.24 29.08Q80.48 28.16 80.80 28.16L80.80 28.16Q81.12 28.16 81.12 28.76L81.12 28.76Q81.12 30.24 79.64 34.80L79.64 34.80Q77.96 40 76.76 40ZM86.52 28.52L86.52 28.52Q86.52 30.76 85.48 34.80L85.48 34.80Q84.24 39.64 82.68 39.64L82.68 39.64Q81.24 39.64 80.64 36.68L80.64 36.68Q80.28 34.88 80.28 32.64L80.28 32.64Q80.28 32.32 80.28 31.84L80.28 31.84Q80.28 31.32 80.32 30.64L80.32 30.64Q80.36 29.96 80.36 29.44L80.36 29.44Q80.36 28.92 80.36 28.60L80.36 28.60Q80.28 28.28 80.28 28.16L80.28 28.16Q80.28 28.04 80.36 27.92Q80.44 27.80 80.76 27.80L80.76 27.80Q82 27.84 82 29.08L82 29.08Q82 29.40 81.94 29.94Q81.88 30.48 81.80 31.16L81.80 31.16Q81.72 31.84 81.68 32.36Q81.64 32.88 81.64 33.20L81.64 33.20Q81.64 38.16 82.84 38.16L82.84 38.16Q83.44 38.16 84.48 34.48L84.48 34.48Q85.44 31.08 85.44 29.52L85.44 29.52L85.44 26.60Q85.16 25.32 85.16 25.44L85.16 25.44Q85.16 25.20 85.44 25.20L85.44 25.20Q86.52 25.20 86.52 28.52Z" fill="black"/></svg>
            </div>
            {/* BIOGRAPHY SCROLL SVG */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
          {/* SKILLS CONTAINER */}
          <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
            {/* SKILL TITLE */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              SKILLS
            </motion.h1>
            {/* SKILL LIST */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              className="flex gap-4 flex-wrap"
            >
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                JavaScript
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                TypeScript
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                React.js
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Next.js
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                SCSS
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Tailwind CSS
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                MongoDB
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                PostgreSQL
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Node.js
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Nest.js
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Express.js
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Spring Boot
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                GraphQL
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Apollo
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Redux
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Framer Motion
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Three.js
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                WebGL
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Webpack
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Vite
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Docker
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                AWS
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Firebase
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Git
              </div>
              <div className="ro unded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Figma
              </div>
            </motion.div>
            {/* SKILL SCROLL SVG */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
          {/* EXPERIENCE CONTAINER */}
          <div
            className="flex flex-col gap-12 justify-center pb-48"
            ref={experienceRef}
          >
            {/* EXPERIENCE TITLE */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              EXPERIENCE
            </motion.h1>
            {/* EXPERIENCE LIST */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}
              className=""
            >
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 ">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Senior JavaScript Engineer
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic">
                    I led web development, offering expertise in JavaScript
                    frameworks.{" "}
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    2024 - Present
                  </div>
                  {/* JOB COMPANY */}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                    Apple
                  </div>
                </div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 "></div>
              </div>
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 "></div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 ">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Senior React Developer
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic">
                    I spearheaded React-based application development,
                    leveraging advanced skills.{" "}
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    2019 - 2024{" "}
                  </div>
                  {/* JOB COMPANY */}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                    Microsoft
                  </div>
                </div>
              </div>
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 ">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Freelancer{" "}
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic">
                    I provided web solutions, applying a range of technologies
                    to address client requirements.{" "}
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    2010 - 2019{" "}
                  </div>
                </div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 "></div>
              </div>
            </motion.div>
          </div>
         {/* ACHIEVEMENTS CONTAINER */}
{/* ACHIEVEMENTS CONTAINER */}
<div className="flex flex-col gap-12 justify-center pb-48 " ref={achievementRef}>
  {/* ACHIEVEMENTS TITLE */}
  <motion.h1
    initial={{ x: "-300px" }}
    animate={isAchievementRefInView ? { x: "0" } : {}}
    transition={{ delay: 0.2 }}
    className="font-bold text-2xl"
  >
    ACHIEVEMENTS
  </motion.h1>
  {/* ACHIEVEMENTS LIST */}
  <motion.div
    initial={{ x: "-300px" }}
    animate={isAchievementRefInView ? { x: "0" } : {}}
    className="flex flex-wrap gap-8"
  >
    {/* ACHIEVEMENT CARD */}
    <motion.div 
      className="w-84 h-92 bg-black rounded-lg text-white relative overflow-hidden"
      whileHover={{ 
        scale: 1.05,
        rotateY: 15,
        rotateX: 5,
        transition: { duration: 0.3 }
      }}
    >
      <div className="p-4 flex flex-col h-full justify-between">
        <div className="text-xl font-bold mb-2 flex items-center gap-2">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width={24} height={24}>
            <path d="M12 15L8.5 8.5L15 12L21.5 5.5L15 18.5L12 15Z" fill="#FFD700" stroke="#FFD700"/>
            <path d="M12 15L15 18.5L5.5 21.5L8.5 8.5L12 15Z" fill="#FFD700" stroke="#FFD700"/>
          </svg>
          Best Web App Award
        </div>
        <div className="text-sm italic">Received the prestigious innovation award for a React-based product visualization tool.</div>
        <div className="text-red-400 font-semibold">2023</div>
      </div>
      <motion.div 
        className="absolute -bottom-3 -right-3 w-20 h-20 bg-red-400 rounded-full opacity-60"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.6, 0.8, 0.6]
        }}
        transition={{ 
          repeat: Infinity,
          duration: 3,
          ease: "easeInOut"
        }}
      />
    </motion.div>
    
    {/* ACHIEVEMENT CARD */}
    <motion.div 
      className="w-84 h-92 bg-black rounded-lg text-white relative overflow-hidden"
      whileHover={{ 
        scale: 1.05,
        rotateY: -15,
        rotateX: 5,
        transition: { duration: 0.3 }
      }}
    >
      <div className="p-4 flex flex-col h-full justify-between">
        <div className="text-xl font-bold mb-2 flex items-center gap-2">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width={24} height={24}>
            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="#61DAFB" stroke="#61DAFB" strokeWidth="1"/>
          </svg>
          Open Source Contributor
        </div>
        <div className="text-sm italic">Contributed to major React libraries with over 1.5M downloads, improving framework performance.</div>
        <div className="text-red-400 font-semibold">2020 - Present</div>
      </div>
      <motion.div 
        className="absolute -top-3 -left-3 w-20 h-20 bg-red-400 rounded-full opacity-60"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.6, 0.8, 0.6]
        }}
        transition={{ 
          repeat: Infinity,
          duration: 4,
          ease: "easeInOut"
        }}
      />
    </motion.div>
    
    {/* ACHIEVEMENT CARD */}
    <motion.div 
      className="w-84 h-92 bg-black rounded-lg text-white relative overflow-hidden"
      whileHover={{ 
        scale: 1.05,
        rotateY: 15,
        rotateX: -5,
        transition: { duration: 0.3 }
      }}
    >
      <div className="p-4 flex flex-col h-full justify-between">
        <div className="text-xl font-bold mb-2 flex items-center gap-2">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width={24} height={24}>
            <rect x="2" y="2" width="20" height="20" rx="4" fill="#FF4154" />
            <path d="M7 12C7 9.79086 8.79086 8 11 8H13C15.2091 8 17 9.79086 17 12C17 14.2091 15.2091 16 13 16H11C8.79086 16 7 14.2091 7 12Z" fill="white" />
            <circle cx="11" cy="12" r="2" fill="#FF4154" />
          </svg>
          Speaker at Tech Conference
        </div>
        <div className="text-sm italic">Featured speaker at JSConf and ReactConf, presenting advanced animation techniques.</div>
        <div className="text-red-400 font-semibold">2021, 2022</div>
      </div>
      <motion.div 
        className="absolute -bottom-3 -left-3 w-20 h-20 bg-red-400 rounded-full opacity-60"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.6, 0.8, 0.6]
        }}
        transition={{ 
          repeat: Infinity,
          duration: 3.5,
          ease: "easeInOut"
        }}
      />
    </motion.div>
    
    {/* ACHIEVEMENT CARD */}
    <motion.div 
      className="w-84 h-92 bg-black rounded-lg text-white relative overflow-hidden"
      whileHover={{ 
        scale: 1.05,
        rotateY: -15,
        rotateX: -5,
        transition: { duration: 1 }
      }}
    >
      <div className="p-4 flex flex-col h-full justify-between">
        <div className="text-xl font-bold mb-2 flex items-center gap-2">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width={24} height={24}>
            <path d="M18.5 2H5.5C3.57 2 2 3.57 2 5.5V18.5C2 20.43 3.57 22 5.5 22H18.5C20.43 22 22 20.43 22 18.5V5.5C22 3.57 20.43 2 18.5 2Z" stroke="#00BFFF" fill="#00BFFF" strokeWidth="1"/>
            <path d="M7 17V11H9V17H7Z" fill="white"/>
            <path d="M11 17V7H13V17H11Z" fill="white"/>
            <path d="M15 17V10H17V17H15Z" fill="white"/>
          </svg>
          Tech Publication Author
        </div>
        <div className="text-sm italic">Published articles on modern web development techniques in leading tech journals.</div>
        <div className="text-red-400 font-semibold">2019 - Present</div>
      </div>
      <motion.div 
        className="absolute -top-3 -right-3 w-20 h-20 bg-red-400 rounded-full opacity-60"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.6, 0.8, 0.6]
        }}
        transition={{ 
          repeat: Infinity,
          duration: 2.5,
          ease: "easeInOut"
        }}
      />
    </motion.div>
  </motion.div>
  
  {/* LOGO MARQUEE */}
  <motion.div
    initial={{ opacity: 0 }}
    animate={isAchievementRefInView ? { opacity: 1 } : {}}
    transition={{ delay: 0.4 }}
    className="w-full overflow-hidden py-8"
  >
    <div className="font-semibold text-sm mb-4">RECOGNIZED BY</div>
    <motion.div 
      className="flex gap-12 items-center"
      animate={{ x: [0, -1000] }}
      transition={{ 
        repeat: Infinity,
        duration: 20,
        ease: "linear"
      }}
    >
      {/* TECH LOGOS */}
      <div className="flex items-center justify-center bg-white p-4 rounded-lg h-16 w-32">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width={40} height={40}>
          <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="#61DAFB"/>
          <path d="M2 17L12 22L22 17" stroke="#61DAFB" strokeWidth="2"/>
          <path d="M2 12L12 17L22 12" stroke="#61DAFB" strokeWidth="2"/>
        </svg>
      </div>
      <div className="flex items-center justify-center bg-white p-4 rounded-lg h-16 w-32">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width={40} height={40}>
          <path d="M21 3H3C1.89543 3 1 3.89543 1 5V19C1 20.1046 1.89543 21 3 21H21C22.1046 21 23 20.1046 23 19V5C23 3.89543 22.1046 3 21 3Z" fill="#FF4154"/>
          <circle cx="12" cy="12" r="6" fill="white"/>
          <circle cx="12" cy="12" r="3" fill="#FF4154"/>
        </svg>
      </div>
      <div className="flex items-center justify-center bg-white p-4 rounded-lg h-16 w-32">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width={40} height={40}>
          <path d="M19.5 12L12 4.5L4.5 12L12 19.5L19.5 12Z" fill="#F7DF1E"/>
          <path d="M12 16.5V7.5" stroke="black" strokeWidth="2"/>
          <path d="M7.5 12H16.5" stroke="black" strokeWidth="2"/>
        </svg>
      </div>
      <div className="flex items-center justify-center bg-white p-4 rounded-lg h-16 w-32">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width={40} height={40}>
          <path d="M3 3H21V21H3V3Z" fill="#007ACC"/>
          <path d="M12 12V3" stroke="white" strokeWidth="2"/>
          <path d="M12 12H3" stroke="white" strokeWidth="2"/>
          <path d="M12 12L21 21" stroke="white" strokeWidth="2"/>
        </svg>
      </div>
      <div className="flex items-center justify-center bg-white p-4 rounded-lg h-16 w-32">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width={40} height={40}>
          <path d="M12 2L19.5 16.5H4.5L12 2Z" fill="#00BFFF"/>
          <path d="M12 22C15.866 22 19 18.866 19 15C19 11.134 15.866 8 12 8C8.13401 8 5 11.134 5 15C5 18.866 8.13401 22 12 22Z" fill="#0288D1"/>
        </svg>
      </div>
      <div className="flex items-center justify-center bg-white p-4 rounded-lg h-16 w-32">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width={40} height={40}>
          <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="#61DAFB"/>
          <path d="M2 17L12 22L22 17" stroke="#61DAFB" strokeWidth="2"/>
          <path d="M2 12L12 17L22 12" stroke="#61DAFB" strokeWidth="2"/>
        </svg>
      </div>
      <div className="flex items-center justify-center bg-white p-4 rounded-lg h-16 w-32">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width={40} height={40}>
          <path d="M21 3H3C1.89543 3 1 3.89543 1 5V19C1 20.1046 1.89543 21 3 21H21C22.1046 21 23 20.1046 23 19V5C23 3.89543 22.1046 3 21 3Z" fill="#FF4154"/>
          <circle cx="12" cy="12" r="6" fill="white"/>
          <circle cx="12" cy="12" r="3" fill="#FF4154"/>
        </svg>
      </div>
    </motion.div>
  </motion.div>
  
  {/* 3D ROTATING CUBE */}
  <motion.div 
    className="w-full flex justify-center py-12"
    initial={{ opacity: 0 }}
    animate={isAchievementRefInView ? { opacity: 1 } : {}}
    transition={{ delay: 0.6 }}
  >
    <div className="relative w-40 h-40 perspective-1000">
      <motion.div 
        className="w-full h-full absolute"
        animate={{ 
          rotateY: [0, 360],
          rotateX: [0, 360]
        }}
        transition={{ 
          repeat: Infinity,
          duration: 20,
          ease: "linear"
        }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* FRONT FACE */}
        <div 
          className="absolute w-full h-full bg-black flex items-center justify-center rounded-lg"
          style={{ transform: "translateZ(20px)" }}
        >
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width={30} height={30}>
            <path d="M12 2L14.4 9.6H22L16 14.4L18.4 22L12 17.6L5.6 22L8 14.4L2 9.6H9.6L12 2Z" fill="#FFD700" stroke="#FFD700"/>
          </svg>
        </div>
        
        {/* BACK FACE */}
        <div 
          className="absolute w-full h-full bg-red-400 flex items-center justify-center rounded-lg"
          style={{ transform: "rotateY(180deg) translateZ(20px)" }}
        >
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width={30} height={30}>
            <path d="M12 2L14.4 9.6H22L16 14.4L18.4 22L12 17.6L5.6 22L8 14.4L2 9.6H9.6L12 2Z" fill="white" stroke="white"/>
          </svg>
        </div>
        
        {/* LEFT FACE */}
        <div 
          className="absolute w-full h-full bg-gray-800 flex items-center justify-center rounded-lg"
          style={{ transform: "rotateY(-90deg) translateZ(20px)" }}
        >
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width={30} height={30}>
            <path d="M21 4H3C1.89543 4 1 4.89543 1 6V18C1 19.1046 1.89543 20 3 20H21C22.1046 20 23 19.1046 23 18V6C23 4.89543 22.1046 4 21 4Z" fill="#61DAFB"/>
            <circle cx="12" cy="12" r="4" fill="white"/>
          </svg>
        </div>
        
        {/* RIGHT FACE */}
        <div 
          className="absolute w-full h-full bg-gray-800 flex items-center justify-center rounded-lg"
          style={{ transform: "rotateY(90deg) translateZ(20px)" }}
        >
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width={30} height={30}>
            <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="#00BFFF"/>
            <path d="M2 17L12 22L22 17" stroke="#00BFFF" strokeWidth="2"/>
            <path d="M2 12L12 17L22 12" stroke="#00BFFF" strokeWidth="2"/>
          </svg>
        </div>
        
        {/* TOP FACE */}
        <div 
          className="absolute w-full h-full bg-gray-700 flex items-center justify-center rounded-lg"
          style={{ transform: "rotateX(90deg) translateZ(20px)" }}
        >
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width={30} height={30}>
            <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" fill="#FF4154"/>
            <path d="M12 11.39L15.54 9.51L16.25 10.71L13.2 12.39L16.25 14.07L15.54 15.27L12 13.39L8.46 15.27L7.75 14.07L10.8 12.39L7.75 10.71L8.46 9.51L12 11.39Z" fill="#FF4154"/>
          </svg>
        </div>
        
        {/* BOTTOM FACE */}
        <div 
          className="absolute w-full h-full bg-gray-700 flex items-center justify-center rounded-lg"
          style={{ transform: "rotateX(-90deg) translateZ(20px)" }}
        >
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width={30} height={30}>
            <path d="M12 2L19.5 16.5H4.5L12 2Z" fill="#F7DF1E"/>
            <path d="M12 12L4.5 16.5H19.5L12 12Z" fill="#C5AC00"/>
          </svg>
        </div>
      </motion.div>
    </div>
  </motion.div>
  
  {/* ACHIEVEMENT SCROLL SVG */}
  <motion.svg
    initial={{ opacity: 0.2, y: 0 }}
    animate={{ opacity: 1, y: "10px" }}
    transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    width={50}
    height={50}
  >
    <path
      d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
      stroke="#000000"
      strokeWidth="1"
    ></path>
    <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
    <path
      d="M15 11L12 14L9 11"
      stroke="#000000"
      strokeWidth="1"
    ></path>
  </motion.svg>
</div>
        </div>
        {/* SVG CONTAINER */}
        <div className="hidden lg:block w-1/3 sticky top-0 z-30 xl:w-1/2 ">
          <Brain scrollYProgress={scrollYProgress} />
        </div>

      </div>
      
    </motion.div>
  );
};

export default AboutPage;