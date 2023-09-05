import React, { useRef, useState, useEffect } from 'react';
import Modal from 'react-modal';
import { MdCheckCircle } from 'react-icons/md';
import emailjs from '@emailjs/browser';

Modal.setAppElement('#root'); // Set the root element for accessibility

const SuccessPopup = ({ isVisible, onClose }) => {
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
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

function Contact() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const form = useRef();

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form.current);
    emailjs.sendForm("service_ehoxret", "template_j93jwtr", form.current, "P_PnTN-0ZUJJmj1z-")
      .then(
        (result) => {
          console.log(result.text);
          setShowSuccessPopup(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsModalOpen(true);
    }, 10000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <Modal isOpen={isModalOpen} onRequestClose={closeModal} className="flex justify-center items-center w-screen h-screen">
      <form ref={form} onSubmit={handleSubmit}>
      <div className="modal-content select-none w-full flex justify-center items-center">
        <div className="p-5 rounded-[30px] text-white my-5 bg-gradient-to-r from-orange-400 to-rose-400 lg:mx-52 shadow-inner">
          <div className="flex flex-col md:flex-row lg:flex-row md:flex-wrap lg:flex-wrap">
            <div className="m-4 md:w-1/3 self-center md:mx-12">
              <p className="lg:text-4xl text-xl font-bold md:text-4xl">Book for <span className="block">Enquiry</span></p>
              <p className="lg:text-xl text-lg my-4">Book and Enquiry Call</p>
            </div>
            <div className="p-2 w-full md:w-1/2 lg:w-1/2 md:ml-auto lg:ml-auto">
              <div className="flex flex-col text-black">
                <div className="flex flex-col md:flex-row md:space-x-4">
                  <input className="p-2 shadow-md my-4 rounded-xl h-14 md:w-1/2" name="fullname" type="text" placeholder="Name" />
                  <input className="p-2 shadow-md my-4 rounded-xl h-14 md:w-1/2" name='email' type="email" placeholder="Email" />
                </div>
                <input className="p-2 shadow-md my-4 rounded-xl h-14 md:w-full" type="phone" name="phone" placeholder="Phone Number" />
                <div className='flex gap-5 justify-center '>
                  <button onClick={closeModal} className="w-1/3 my-4 outline-none relative inline-flex items-center justify-center px-2 py-2 md:p-4 md:px-6 md:py-3 overflow-hidden font-medium text-white transition duration-300 ease-out border-2 rounded-full shadow-md group">
                    <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full group-hover:translate-x-0 ease">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </span>
                    <span className="absolute flex items-center justify-center w-full h-full text-white  transition-all duration-300 transform group-hover:translate-x-full ease">Cancel</span>
                    <span className="relative invisible hover:text-[#6610f2]">Cancel</span>
                  </button>
                  <button type="submit" onClick={handleSubmit} className="w-1/3 outline-none my-4 relative inline-flex items-center justify-center px-2 py-2 md:p-4 md:px-6 md:py-3 overflow-hidden font-medium text-white transition duration-300 ease-out border-2 rounded-full shadow-md group">
                    <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full group-hover:translate-x-0 ease">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </span>
                    <span className="absolute flex items-center justify-center  w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease">Send</span>
                    <span className="relative invisible ">Send</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </form>
      {showSuccessPopup && <SuccessPopup isVisible={showSuccessPopup} onClose={() => setShowSuccessPopup(false)} />}
      
    </Modal>
  );
}

export default Contact;
