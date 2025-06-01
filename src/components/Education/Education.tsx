import { education } from "../../constants";

const Education = () => {
     return (
          <section
               id='education'
               className='py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans skills-gradient clip-path-custom-3'
          >
               {/* section title */}
               <div className='text-center mb-16'>
                    <h2 className='text-4xl font-bold text-white uppercase'>Education</h2>
                    <div className='w-32 h-1 bg-purple-500 mx-auto mt-4'></div>
                    <p className='text-gray-400 mt-4 text-lg font-semibold'>
                         Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam,
                         dolores.
                    </p>
               </div>

               {/* education timeline */}
               <div className='relative'>
                    {/* verticle line */}{" "}
                    <div className='absolute sm:left-1/2 left-0 transform -translate-x-1/2 sm:-translate-x-0 w-1 bg-white h-full'></div>
                    {/* education entries */}
                    {education.map((education, index) => (
                         <div
                              key={education.id}
                              className={`flex flex-col sm:flex-row items-center mb-16 ${
                                   index % 2 === 0 ? "sm:justify-start" : "sm:justify-end"
                              }`}
                         >
                              {/* timeline circle */}
                              <div className='absolute sm:left-1/2 left-0 transform -translate-x-1/2 bg-gray-400 border-4 border-[#8245ec] w-12 h-12 sm:w-16 sm:h-16 rounded-full flex justify-center items-center z-10'>
                                   <img
                                        src={education.img}
                                        alt={education.school}
                                        className='w-full h-full object-cover rounded-full'
                                   />
                              </div>

                              {/* content section */}
                              <div
                                   className={`w-full sm:max-w-md p-4 sm:p-8 rounded-2xl border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] ${
                                        index % 2 === 0 ? "sm:ml-0" : "sm:mr-0"
                                   } sm:ml-8 sm:mr-8 ml-8 transform transition-transform duration-300 hover:scale-105`}
                              >
                                   {/* Flex container for image and text */}
                                   <div className='flex items-center space-x-6'>
                                        {/* school logo */}
                                        <div className='w-16 h-16 bg-white rounded-md overflow-hidden'>
                                             <img
                                                  src={education.img}
                                                  alt={education.school}
                                                  className='w-full h-full object-cover'
                                             />
                                        </div>
                                        {/* Degree, school name and date */}
                                        <div className='flex flex-col justify-between'>
                                             <div>
                                                  <h3 className='text-xl sm:text-2xl font-semibold text-white'>
                                                       {education.degree}
                                                  </h3>
                                                  <h4 className='text-md sm:text-sm text-gray-300'>
                                                       {education.school}
                                                  </h4>
                                             </div>

                                             {/* date */}
                                             <p className='text-sm text-gray-500 mt-2'>
                                                  {education.date}
                                             </p>
                                        </div>
                                   </div>
                                   <p className='mt-4 text-gray-400 font-bold'>
                                        Grade: {education.grade}
                                   </p>
                                   <p className='mt-4 text-gray-400'>{education.desc}</p>
                              </div>
                         </div>
                    ))}
               </div>
          </section>
     );
};

export default Education;
