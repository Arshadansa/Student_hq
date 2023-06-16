import { useState, React } from "react";
function Accordion({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="">

      <button
        className="flex justify-between mb-2 mt-2 w-full transition duration-300 ease-in-out bg-white px-4 py-4 text-lg md:text-2xl font-semibold text-left text-gray-700 rounded-t-3xl rounded-b-3xl  focus:outline-none"
        onClick={handleClick}
      >
        <span>
          {title}
          {isOpen && (
            <div className="">
              {content}
            </div>
          )}
        </span>
        <span className="text-3xl">{isOpen ? "-" : "+"}</span>
      </button>
    </div>
  );
}

export default function Faq() {
  return (
    <>
      <div className="flex m-3 lg:p-20 md:p-0 flex-wrap lg:flex-nowrap justify-center align-middle  w-full h-full md:pt-32 md:pb-32  ">
        <div className="w-full  flex flex-col h-full">
          <div className="flex flex-col  h-full ">

            <div className="text-4xl md:text-5xl pl-3 p-10 md:tracking-normal  md:leading-tight font-semibold">
              <div className="text-primary mb-3 text-xl font-bold">
                <span>FAQ</span>
              </div>
              <h1 className="">Frequently asked question</h1>
              <p className="text-orange-500">___</p>
              <span className="text-3xl md:text-2xl">
                Still do you have any questions to know?
              </span>
              <h3 className="text-3xl md:text-2xl font">
                Feel free to ask our experts here.
              </h3>
            </div>

            <div className="mt-12 ">
              <a
                href="#_"
                className="relative inline-flex  bg-white items-center justify-center overflow-hidden text-xs font-semibold py-5 px-12   font-sans tracking-tighter text-black border-[1px] border-gray rounded-2xl group"
              >
                <span className="absolute w-0 h-0 transition-all duration-700 ease-in-out bg-primary rounded-full group-hover:w-80 group-hover:h-80"></span>
                <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent "></span>
                <span className="relative  group-hover:text-white text-xl ">
                  ASK YOUR QUESTIONS
                </span>
              </a>
            </div>
          </div>
        </div>

        <div className="w-full h-auto  ">
          <div className="w-full">
            <div className="container  ">
              <div className="w-full  h-fit mt-7">
                <Accordion
                  className="text-xl"
                  title="1. When will my order arrive?"
                  content="Shipping time is set by our delivery partners, according to the delivery method chosen by you. Additional details can be found in the order confirmation."
                />
                <Accordion
                  className=" "
                  title="2. When will my order arrive?"
                  content="Shipping time is set by our delivery partners, according to the delivery method chosen by you. Additional details can be found in the order confirmation."
                />
                <Accordion
                  className=" "
                  title="3. When will my order arrive?"
                  content="Shipping time is set by our delivery partners, according to the delivery method chosen by you. Additional details can be found in the order confirmation."
                />
                <Accordion
                  className=" "
                  title="4. When will my order arrive?"
                  content="Shipping time is set by our delivery partners, according to the delivery method chosen by you. Additional details can be found in the order confirmation."
                />
                <Accordion
                  className=" "
                  title="5. When will my order arrive?"
                  content="Shipping time is set by our delivery partners, according to the delivery method chosen by you. Additional details can be found in the order confirmation."
                />
                <Accordion
                  className=" "
                  title="6. When will my order arrive?"
                  content="Shipping time is set by our delivery partners, according to the delivery method chosen by you. Additional details can be found in the order confirmation."
                />
              </div>
            </div>
          </div>
        </div>
      </div>


    </>
  );
}
