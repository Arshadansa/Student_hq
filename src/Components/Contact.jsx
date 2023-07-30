import Modal from 'react-modal';
import React, { useState, useEffect } from 'react';

function Contact() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsModalOpen(true); // Open the modal after 5 seconds
    }, 10000);

    return () => {
      clearTimeout(timer); // Clean up the timer on component unmount
    };
  }, []);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission
    // Add your form submission logic here
  };

  return (
    <Modal isOpen={isModalOpen} onRequestClose={closeModal} className="flex p-3 justify-center items-center h-screen">
      <div className="modal-content select-none flex justify-center items-center">
        <div className="p-5 rounded-[30px] text-white my-5 bg-gradient-to-r from-orange-400 to-rose-400 lg:mx-52 shadow-inner">
          <div className="flex flex-col md:flex-row lg:flex-row md:flex-wrap lg:flex-wrap">
            {/* left */}
            <div className="m-4 md:w-1/3 self-center md:mx-12">
              <p className="lg:text-4xl text-xl font-bold md:text-4xl">Join Us <span className="block">And Stay Tuned</span></p>
              <p className="lg:text-xl text-lg my-4">Curation active learning ecosystem em learning content management system lxd lxp rapid learning</p>
            </div>
            {/* right */}
            <div className="p-2 w-full md:w-1/2 lg:w-1/2 md:ml-auto lg:ml-auto">
              <div className="flex flex-col text-black">
                <div className="flex flex-col md:flex-row md:space-x-4">
                  <input className="p-2 shadow-md my-4 rounded-xl h-14 md:w-1/2" type="text" placeholder="Name" />
                  <input className="p-2 shadow-md my-4 rounded-xl h-14 md:w-1/2" type="email" placeholder="Email" />
                </div>
                <textarea className="shadow-md h-36 my-4 p-2 rounded-xl" placeholder="Message"></textarea>

                <div className='flex gap-5 justify-center '>
                  <button onClick={closeModal} className="w-1/3 my-4 outline-none relative inline-flex items-center justify-center px-2 py-2 md:p-4  md:px-6 md:py-3 overflow-hidden font-medium text-white transition duration-300 ease-out border-2 rounded-full shadow-md group">
                    <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full group-hover:translate-x-0 ease">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </span>
                    <span className="absolute flex items-center justify-center w-full h-full text-white  transition-all duration-300 transform group-hover:translate-x-full ease">Cancel</span>
                    <span className="relative invisible hover:text-[#6610f2]">Cancel "</span>
                  </button>
                  <button onClick={handleFormSubmit} className="w-1/3 outline-none my-4 relative inline-flex items-center justify-center px-2 py-2 md:p-4 md:px-6 md:py-3 overflow-hidden font-medium text-white transition duration-300 ease-out border-2 rounded-full shadow-md group">
                    <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full group-hover:translate-x-0 ease">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </span>
                    <span className="absolute flex items-center justify-center  w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease">Send</span>
                    <span className="relative invisible ">Send "</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default Contact;
