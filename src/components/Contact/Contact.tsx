import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";

const Contact = () => {
     const form = useRef<HTMLFormElement | any>("");
     const [isSent, setIsSent] = useState(false);

     const sendEmail = (e: any) => {
          console.log(isSent);
          e.preventDefault();

          const currentTime = new Date().toLocaleString(); // e.g. "6/1/2025, 3:45 PM"
          const currentYear = new Date().getFullYear().toString();

          if (form.current) {
               form.current.elements.namedItem("time")!.value = currentTime;
               form.current.elements.namedItem("year")!.value = currentYear;
          }

          emailjs
               .sendForm("service_nv8g7og", "template_1g12gdd", form.current, "74FlIBP9KcHevaJ04")
               .then(
                    () => {
                         setIsSent(true);
                         form.current.reset();
                         toast.success("Message sent successfully!", {
                              position: "top-right",
                              autoClose: 3000,
                              hideProgressBar: false,
                              closeOnClick: true,
                              pauseOnHover: true,
                              draggable: true,
                              theme: "dark",
                         });
                    },
                    (error) => {
                         toast.error("Error Sending Message.", error);
                         toast.error("Failed to send message. Please try again.", {
                              position: "top-right",
                              autoClose: 3000,
                              hideProgressBar: false,
                              closeOnClick: true,
                              pauseOnHover: true,
                              draggable: true,
                              theme: "dark",
                         });
                    }
               );
     };

     return (
          <section
               id='contact'
               className='flex flex-col items-center justify-center py-24 px-[12vw] md:px-[7vw] lg:px-[20vw]'
          >
               <ToastContainer />
               {/* section title */}
               <div className='text-center mb-16'>
                    <h2 className='text-4xl font-bold text-white uppercase'>Contact</h2>
                    <div className='w-32 h-1 bg-purple-500 mx-auto mt-4'></div>
                    <p className='text-gray-400 mt-4 text-lg font-semibold'>
                         I’d love to hear from you—reach out for any opportunities or questions!
                    </p>
               </div>

               {/* contact form */}
               <div className='mt-8 w-full max-w-md bg-[#0d081f] p-6 rounded-lg shadow-lg border border-gray-700'>
                    <h3 className='text-xl font-semibold text-white text-center'>
                         Connect With Me
                    </h3>

                    <form ref={form} onSubmit={sendEmail} className='mt-4 flex flex-col space-y-4'>
                         <input
                              type='email'
                              name='user_email'
                              placeholder='Your Email'
                              required
                              className='w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500'
                         />

                         <input
                              type='text'
                              name='user_name'
                              placeholder='Your Name'
                              required
                              className='w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500'
                         />

                         <input
                              type='text'
                              name='subject'
                              placeholder='Subject'
                              required
                              className='w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500'
                         />

                         <textarea
                              name='message'
                              placeholder='Message'
                              rows={4}
                              required
                              className='w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500'
                         ></textarea>
                         <input type='hidden' name='time' value='' />
                         <input type='hidden' name='year' value='' />

                         {/* send button */}
                         <button
                              type='submit'
                              className='w-full bg-gradient-to-r from-purple-600 to-pink-500 py-3 text-white font-semibold rounded-md hover:opacity:90 transition'
                         >
                              SEND
                         </button>
                    </form>
               </div>
          </section>
     );
};

export default Contact;
