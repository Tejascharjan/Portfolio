import { Typewriter } from "react-simple-typewriter";
import Tilt from "react-parallax-tilt";
import profileimage from "../../assets/profile.png";
import resume from "../../assets/work_logo/Tejas_Charjan_Resume.pdf";

const About = () => {
     return (
          <section
               id='about'
               className='py-4 px-[7vw] md:px-[7vw] lg:px-[18vw] font-sans mt-16 md:mt-24 lg:mt-32 mb-4'
          >
               <div className='flex flex-col-reverse md:flex-row justify-between items-center'>
                    {/* left side */}
                    <div className='w-1/2 text-center md:text-left mt-8 md:mt-0'>
                         {/* greeting */}
                         <h1 className='text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-2 leading-tight'>
                              Hi, I am
                         </h1>
                         {/* name */}
                         <h2 className='text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight'>
                              Tejas Charjan
                         </h2>
                         {/* skills heading with typing effect */}
                         <h3 className='text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight'>
                              <span className='text-white'>I am a </span>
                              <Typewriter
                                   words={["Full Stack Developer", "Coder", "UI/UX Designer"]}
                                   loop={0}
                                   cursor
                                   cursorStyle='|'
                                   typeSpeed={100}
                                   deleteSpeed={50}
                                   delaySpeed={2000}
                              ></Typewriter>
                         </h3>
                         {/* About me paragraph */}
                         <p className='text-base sm:text-lg  md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed'>
                              I am a full-stack developer with over 1 year of experience in building
                              scalable web applications. Skilled in both front-end and back-end
                              development, I specialize in the use of modern technologies to create
                              seamless user experiences and efficient solutions.
                         </p>
                         {/* resume link */}
                         <a
                              href={resume}
                              target='_blank'
                              rel='noopener noreferrer'
                              className='inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105'
                              style={{
                                   background: "linear-gradient(90deg,#8245ec,#a855f7)",
                                   boxShadow: "0 0 2px #8245ec,0 0 2px #8245ec, 0 0 40px #8245ec",
                              }}
                         >
                              DOWNLOAD CV
                         </a>
                    </div>

                    {/* right site */}
                    <div className='md:w-1/2 flex justify-center md:justify-end lg:justify-end'>
                         <Tilt
                              className='w-48 h-48 sm:w-64 sm:h-64 md:w-[25rem] md:h-[25rem] border-4 border-purple-700 rounded-full'
                              tiltMaxAngleX={20}
                              tiltMaxAngleY={20}
                              perspective={1000}
                              scale={1.05}
                              transitionSpeed={1000}
                              gyroscope={true}
                         >
                              <img
                                   src={profileimage}
                                   alt='Tejas Charjan'
                                   className='w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]'
                              />
                         </Tilt>
                    </div>
               </div>
          </section>
     );
};

export default About;
