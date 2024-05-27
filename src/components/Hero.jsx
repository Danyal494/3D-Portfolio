import { motion } from "framer-motion";

import { styles } from "../styles";

import { ComputersCanvas } from "./canvas";
const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto  ">
      <div
        className={`${styles.paddingX} absolute mt-5 inset-0 top-[100px] mx-auto flex flex-row item-start gap-5 max-w-7xl`}
      >
        <div className="flex flex-col justify-center items-center -mt-72">
          <div className="w-5 h-5 rounded-full bg-[#915eff] " />
          <div className="w-1 sm:h-80 h-40 bg-gradient-to-b from-violet-500" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText}`}>
            Hi , I'm <span className="text-[#915eff]"> Danyal Khan</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            i devolop 3D visuals, user <br className="sm:block hidden" />{" "}
            interface and web application
          </p>
        </div>
      </div>
      <ComputersCanvas />

      <div className="absolute xs:bottom-1 bottom-1 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
