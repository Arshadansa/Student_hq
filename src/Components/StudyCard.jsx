import React, { useRef ,useState} from "react";
import Narbar from "../Components/Navbar";
import emailjs, { init } from "@emailjs/browser";
import {MdCheckCircle } from "react-icons/md";
import { Button } from "flowbite-react";



const SuccessPopup = () => {

    const [isVisible, setIsVisible] = useState(true);
  
    const handleClose = () => {
      setIsVisible(false);
    };
  
    return (


        
      <div
        className={`fixed inset-0 flex items-center justify-center z-10 bg-opacity-50 bg-gray-500 backdrop-filter backdrop-blur-sm transition-opacity ${
          isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="bg-white rounded-lg p-8 flex flex-col items-center">
          <MdCheckCircle className="text-green-500 text-5xl mb-4" />
          <p className="text-xl">Message Sent Successfully</p>
          <button
            className="mt-6 px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
            onClick={handleClose}
          >
            Close
          </button>
        </div>
      </div>
    );
  
    
  };
  

function Footer() {

    const [showSuccessPopup, setShowSuccessPopup] = useState(false);
    const form = useRef();
  
    const handleSubmit = (e) => {
      e.preventDefault();
     
      emailjs.sendForm("service_ehoxret", "template_j93jwtr", form.current, "P_PnTN-0ZUJJmj1z-").then(
        (result) => {
         // alert("Message Sent Successfully");
          console.log(result.text);
          setShowSuccessPopup(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
    
    };

  return (    
    
    <div>
 {showSuccessPopup && <SuccessPopup />}
 <form ref={form} onSubmit={handleSubmit}>
    <div
      className="select-none mt-24 px-8 grid gap-8 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 py-16 mx-auto bg-gray-100 text-gray-900 rounded-lg ">
      <div className="flex flex-col justify-between">
        <div>
          <h2 className="text-4xl lg:text-5xl font-bold leading-tight">Lets talk about everything!</h2>
          <div className="text-gray-700 mt-8">
            Hate forms? Send us an <span className="underline">email</span> instead.
          </div>
        </div>
        <div className="select-none text-center">

          <img src="https://themeim.com/demo/eduplan/assets/img/services-details/01.png" alt="" />

        </div>
      </div>
      <div className>

        <div className='select-none grid grid-cols-2 gap-10'>
          <div>
            <span className="uppercase text-sm text-gray-600 font-bold">Full Name</span>
            <input name="fullname"
              className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="text" placeholder />
          </div>
          <div className="">
            <span className="uppercase text-sm text-gray-600 font-bold">Email</span>
            <input name="email"
              className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="text" />
          </div>
        </div>
        <div className="mt-8">
          <span className="uppercase text-sm text-gray-600 font-bold">Contact</span>
          <input name="phone"
            className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="text" />
        </div>
        <div className="mt-8">
          <span className="uppercase text-sm text-gray-600 font-bold">Course</span>
          <input name="course"
            className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="text" />
        </div>

        <button>
        <div className="mt-8">
          <a href="#_"
            class="relative inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-indigo-600 border-2 border-indigo-600 rounded-full hover:text-white group hover:bg-gray-50">
            <span
              class="absolute left-0 block w-full h-0 transition-all bg-indigo-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
            <span
              class="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3">
                </path>
              </svg>
            </span>
            <span class="relative">Submit</span>
          </a>
        </div>
        </button>
      </div>
    </div>
    </form>
  </div>
  );
}

export default Footer;