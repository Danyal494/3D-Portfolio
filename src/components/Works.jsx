import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { github } from "../assets";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utilts/motion";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up ", "spring", index * 0.5, 0.75)}>
      <Tilt
        option={{ max: 45, scale: 1, speed: 450 }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full justify-center items-center cursor-pointer object-contain"
            >
              <img
                src={github}
                alt="github"
                className="s flex justify-center "
              />
            </div>
          </div>
        </div>
        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className=" mt-2 text-secondary text-[14px] ">{description}</p>
        </div>
        <div>
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>{" "}
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="mt-8">
        <p className={styles.sectionSubText}>My Work </p>
        <h2 className={styles.sectionHeadText}>Projects</h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px] "
        >
          Following projects showcase my skills and experience through real-word
          examples of my work. Each project is briefly described whith links to
          code repositories and live demos in it. it reflects my ability to
          solve complex problems,work with different technologies, and mange
          projects effectively.
        </motion.p>
      </div>
      <div className="flex mt-20 justify-center  flex-wrap gap-7 ">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
