import React, { useRef ,useState} from "react";
import Narbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import emailjs, { init } from "@emailjs/browser";
import {MdCheckCircle } from "react-icons/md";

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




function ApplyOnline() {

  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
   
    emailjs.sendForm("service_ehoxret", "template_by0grl4", form.current, "P_PnTN-0ZUJJmj1z-").then(
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
    <>
    
      <nav>
        <Narbar />
      </nav>
      {showSuccessPopup && <SuccessPopup />}
      <form ref={form} onSubmit={handleSubmit}>
      <div className="m-6 md:m-20">
        <div className="">
          <h1 className="text-4xl font-bold">Apply Online</h1>
        </div>

        <div className=" my-16 bg-white rounded-3xl shadow-md p-10 flex flex-col gap-4">
          <h1 className=" text-xl mb-4  font-bold">Primary Information</h1>

          <div className="grid sm:grid-cols-3">
            <div className="relative border border-gray rounded-2xl p-4 m-2 ">
              <div className="absolute inset-y-0 left-4 pl-3 flex items-center pointer-events-none p-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="gray"
                  className="  opacity-70 h-4 w-4"
                  viewBox="0 0 512 512"
                >
                  <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
                </svg>
              </div>
              <input name ="full_name"
                className=" ml-1  font-normal text-bgDark  border-none rounded-xl block w-full pl-10 pr-3 py-2 border-gray-300  focus:outline-none focus:border-indigo-500 focus:ring-indigo-500"
                placeholder="Full Name"
              />
            </div>

            <div className="relative border border-gray rounded-2xl p-4 m-2">
              <div className="absolute inset-y-0 left-4 pl-3 flex items-center pointer-events-none p-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="gray"
                  className="  opacity-70 h-4 w-4"
                  viewBox="0 0 512 512"
                >
                  <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
                </svg>
              </div>
              <input name="email"
                type="email"
                className=" ml-1  font-normal text-bgDark  border-none rounded-xl block w-full pl-10 pr-3 py-2 border-gray-300  focus:outline-none focus:border-indigo-500 focus:ring-indigo-500"
                placeholder="Email address"
              />
            </div>

            <div className="relative border border-gray rounded-2xl p-4 m-2">
              <div className="absolute inset-y-0 left-4 pl-3 flex items-center pointer-events-none p-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="gray"
                  className="  opacity-70 h-4 w-4"
                  viewBox="0 0 512 512"
                >
                  <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
                </svg>
              </div>
              <input name="phone_number"
                type="phonenumber"
                className=" ml-1  font-normal text-bgDark  border-none rounded-xl block w-full pl-10 pr-3 py-2 border-gray-300  focus:outline-none focus:border-indigo-500 focus:ring-indigo-500"
                placeholder="Phone Number"
              />
            </div>

            <div className="relative border border-gray rounded-2xl p-4 m-2">
              <div className="absolute inset-y-0 left-4 pl-3 flex items-center pointer-events-none p-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="gray"
                  className="  opacity-70 h-4 w-4"
                  viewBox="0 0 512 512"
                >
                  <path d="M352 256c0 22.2-1.2 43.6-3.3 64H163.3c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64H348.7c2.2 20.4 3.3 41.8 3.3 64zm28.8-64H503.9c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64H380.8c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32H376.7c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0H167.7c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0H18.6C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192H131.2c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64H8.1C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6H344.3c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352H135.3zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6H493.4z" />
                </svg>
              </div>

              <select name="form_nationality"
                className="ml-1 font-normal text-bgDark border-none rounded block w-full pl-10 pr-3 py-2  focus:outline-none focus:border-indigo-500 focus:ring-indigo-500"
                defaultValue=""
              >
                <option value="" disabled hidden>
                  Nationality
                </option>
                <option value="male">Indian</option>
                <option value="female">Foreign</option>
              </select>
            </div>

            <div className="relative border border-gray rounded-2xl p-4 m-2">
              <div className="absolute inset-y-0 left-4 pl-3 flex items-center pointer-events-none p-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="gray"
                  className="  opacity-70 h-4 w-4"
                  viewBox="0 0 512 512"
                >
                  <path d="M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z" />
                </svg>
              </div>
              <input name="date"
                type="date"
                className=" ml-1  font-normal text-bgDark  border-none rounded-xl block w-full pl-10 pr-3 py-2 border-gray-300  focus:outline-none focus:border-indigo-500 focus:ring-indigo-500"
                placeholder="Date Of Birth"
              />
            </div>

            <div className="relative border border-gray rounded-2xl p-4 m-2">
              <div className="absolute inset-y-0 left-4 pl-3 flex items-center pointer-events-none p-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="gray"
                  className="opacity-70 h-4 w-4"
                  viewBox="0 0 512 512"
                >
                  <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
                </svg>
              </div>
              <select name="gender"
                className="ml-1 font-normal text-bgDark border-none rounded block w-full pl-10 pr-3 py-2  focus:outline-none focus:border-indigo-500 focus:ring-indigo-500"
                defaultValue=""
              >
                <option value="" disabled hidden>
                  Gender
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
          </div>

          {/* //cards */}

          <div>
            <h1 className="text-xl mb-4  font-bold mt-4">
              Select preferred study destination (Select Multiple)
            </h1>
          </div>
          <div className=" flex  flex-wrap  gap-2  justify-center sm:justify-normal ">
            <div className=" flex flex-col  ">
              <div className="flex m-2 flex-col justify-center w-[11rem]  h-[14rem]  border-solid border border-gray rounded-xl  hover:border-primary   sm:w-[11rem] sm:h-60 ">
                <div class=" self-center">
                  <img
                    className=" h-32 w-30 "
                    src="https://static.vecteezy.com/system/protected/files/016/328/568/vecteezy_india-flat-rounded-flag-with-transparent-background_16328568_78.png"
                    alt=""
                  />
                </div>

                <div class="m-4">
                  <h1 class=" mt-5 text-xl text-center">India</h1>
                </div>
              </div>
            </div>

            <div className=" flex flex-col  ">
              <div className="flex m-2 flex-col justify-center w-[11rem]  h-[14rem]  border-solid border border-gray rounded-xl  hover:border-primary   sm:w-[11rem] sm:h-60 ">
                <div class=" self-center">
                  <img
                    class="h-30 w-30 "
                    src="https://themeim.com/demo/eduplan/assets/img/flag/02.png"
                    alt=""
                  />
                </div>

                <div class="m-4">
                  <h1 class=" mt-5 text-xl text-center">Canada</h1>
                </div>
              </div>
            </div>

            <div className=" flex flex-col  ">
              <div className="flex m-2 flex-col justify-center w-[11rem]  h-[14rem]  border-solid border border-gray rounded-xl  hover:border-primary   sm:w-[11rem] sm:h-60 ">
                <div class=" self-center">
                  <img
                    class="h-30 w-30 "
                    src="https://themeim.com/demo/eduplan/assets/img/flag/01.png"
                    alt=""
                  />
                </div>

                <div class="m-4">
                  <h1 class=" mt-5 text-xl text-center">America</h1>
                </div>
              </div>
            </div>

            <div className=" flex flex-col  ">
              <div className="flex m-2 flex-col justify-center w-[11rem]  h-[14rem]  border-solid border border-gray rounded-xl  hover:border-primary   sm:w-[11rem] sm:h-60 ">
                <div class=" self-center">
                  <img
                    class="h-30 w-30 "
                    src="https://themeim.com/demo/eduplan/assets/img/flag/06.png"
                    alt=""
                  />
                </div>

                <div class="m-4">
                  <h1 class=" mt-5 text-xl text-center">London</h1>
                </div>
              </div>
            </div>
          </div>

         <button>
         <div className=" flex  justify-left ml-2 sm:mr-2 sm:justify-end">
            <a
              href="#_"
              class="relative inline-flex   items-center justify-center overflow-hidden text-xl  py-5 px-16 ml  font-sans tracking-tighter text-black border rounded-2xl group"
            >
              <span class="absolute w-0 h-0 transition-all duration-500 ease-out bg-primary rounded-full group-hover:w-80 group-hover:h-80"></span>
              <span class="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent "></span>
              <span class="relative ">Submit</span>
            </a>
          </div>
         </button>
        </div>
      </div>
      </form>

      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default ApplyOnline;
