// assets
import aboutPageImg from "../assets/about-me-page.svg";
import aboutIllustration from "../assets/about-illustration.svg";
import github from '../assets/github.svg'
import linkedin from '../assets/linkedin.svg'
import mail1 from '../assets/mail1.svg'
 
// components
import { SocialMediaIcon, Reveal } from "../components";

// framer-motion
import { motion } from "framer-motion";

// utils
import { fadeIn, scale } from "../utils/variants";
import { transition } from "../utils/transition";

const About = () => {
  return <div id="about" 
  className="min-h-screen flex items-center justify-center relative"
  style={{
background : `url(${aboutPageImg})`,
    backgroundPosition : 'center',
    backgroundRepeat : 'no-repeat',
    backgroundSize :  'cover'

  }}>
    <div className="max-w--screen-2xl flex flex-col xl:flex-row xl:justify-between items-center xl:items-start gap-12 w-full py-16 px-12">

      <div className="flex-1 flex flex-col gap-4">
        

        <h2 className="text-center xl:text-start text-4xl sm:text-5xl lg:text-[64px] font-bold text-textPrimary"> About
          <span className="text-secondary "> Me</span>

        </h2>
        <Reveal>
          <p className="text-center xl:text-start   text-base sm:text-lg text-textSecondary">
          Greetings! I'm Anjali Joshi, a dedicated web developer currently in my fourth year at Inderprasath Engineering College. I've built a strong foundation in web development, honing my skills in HTML, CSS, and JavaScript and React. My primary objective is to translate imaginative concepts into functional, user-friendly websites that leave a memorable impact.
<br/><br/>
I'm committed to ongoing learning, especially as I progress through my college education. I eagerly embrace emerging technologies and stay updated with industry trends, understanding that every project is an opportunity for personal and professional growth.
<br/><br/>

I invite you to explore my portfolio to see some of my recent projects. If you're interested in collaborating or have a project concept in mind, I'm always open to new opportunities. Let's work together to turn your vision into a vibrant digital reality!
        </p>
        </Reveal>
        
        <motion.div variants={fadeIn('up')} initial="hidden" whileInView='visible' viewport={{once : false}} transition={transition()}  className="flex text-center  justify-center xl:justify-start gap-6">
          <SocialMediaIcon imgSrc={github} title='Github'/>
          <SocialMediaIcon imgSrc={linkedin} title='LinkedIn'/>
          <SocialMediaIcon imgSrc={mail1} title='Mail'/>
        </motion.div>
      </div>
      <div className="flex-1 flex items-center justify-center">
          <motion.img  variants={scale()} initial="hidden" whileInView='visible' viewport={{once : false}} transition={transition()}src={aboutIllustration} alt="" className="max-w-full sm:max-w-[401px]"/>
        </div>
    </div>
           <div className="absolute bottom-0 left-0 w-full h-[1px] bg-divider"/>

     </div>;
};

export default About;
