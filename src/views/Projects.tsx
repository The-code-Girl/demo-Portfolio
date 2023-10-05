// react
import { useState } from "react";

// assets
import projectsPageImg from "../assets/projects-page.svg";

// components
import { Button, Card, Reveal } from "../components";

// data
import { projects } from "../data";

// framer-motion
import { motion } from "framer-motion";

// utils
import { fadeIn } from "../utils/variants";
import { transition } from "../utils/transition";

type category  = 1|2;

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState<category>(1);
  const filterProjectHanlder = () =>{
    if(activeCategory === 1){
      return projects.filter((item)=> item.category === 1)
    }else{
      return projects.filter((item)=> item.category === 2)
    }
  }
  return <div id="project" className="min-h-screen relative" style={{
    background : `url(${projectsPageImg})`,
    backgroundPosition : 'center',
    backgroundRepeat : 'no-repeat',
    backgroundSize :  'cover'

  }}> 
  <div className="max-w-screen-2xl w-full py-16 px-12 mx-auto">
<div className="flex-1 flex flex-col gap-4">
  <Reveal>
    <h2 className="text-center xl:text-start text-4xl sm:text-5xl lg:text-[64px] font-bold text-textPrimary"> My recent
          <span className="text-secondary "> projects</span>
        </h2>
  </Reveal>
  
        <motion.div variants={fadeIn('up')} initial="hidden" whileInView='visible' viewport={{once : false}} transition={transition()}  className="flex items-center gap-4 justify-center xl:justify-start flex-col sm:flex-row">
<Button secondary={activeCategory === 1 ? true : false} onClick={()=>setActiveCategory(1)}> 1</Button>
<Button secondary={activeCategory === 2 ? true : false} onClick={()=>setActiveCategory(2)}> 2</Button>

        </motion.div>
        <motion.div variants={fadeIn('up')} initial="hidden" whileInView='visible' viewport={{once : false}} transition={transition()}  className="flex gap-12 mt-12 flex-wrap justify-center ">
          {filterProjectHanlder().map(items => <Card imgSrc={items.img} title={items.title} />)}
        </motion.div>
</div>
  </div>
  </div>;
};

export default Projects;
