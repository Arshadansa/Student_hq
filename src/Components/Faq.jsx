import React, { useState } from "react";

function Accordion({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="">
      <button
        className="flex justify-between select-none mb-2 mt-2 w-full transition duration-300 ease-in-out bg-white px-4 py-4 text-lg md:text-2xl font-semibold text-left text-gray-700 rounded-t-3xl rounded-b-3xl  focus:outline-none"
        onClick={handleClick}
      >
        <span>
          {title}
          {isOpen && <div className="">{content}</div>}
        </span>
        <span className="text-3xl">{isOpen ? "-" : "+"}</span>
      </button>
    </div>
  );
}

export default function Faq() {
  const faqData = [
  
    {
      title: "How do I apply for admissions?",
      content:
        "To apply for admissions, you can visit our website and navigate to the Admissions section. There, you will find detailed instructions on the application process and the required documents.",
    },
    {
      title: "What courses do you offer?",
      content:
        "We offer a wide range of courses across various disciplines, including Arts, Science, Business, and Technology. You can explore our course catalog on our website for more information.",
    },
    {
      title: "How long does it take to complete an assignment?",
      content:
        "The time required to complete an assignment depends on various factors, such as the complexity of the task and your familiarity with the subject. It is recommended to allocate sufficient time to ensure the quality and timely completion of your assignments.",
    },
    {
      title: "Are scholarships available for students?",
      content:
        "Yes, we offer scholarships to eligible students. Our scholarship programs aim to support and recognize outstanding academic achievements and talents. You can find more information about our scholarship opportunities on our website.",
    },
    {
      title: "Can I transfer my credits from another institution?",
      content:
        "We have a credit transfer policy in place to consider transferring credits from other recognized institutions. The evaluation of transfer credits depends on various factors, such as the similarity of the courses and the accreditation of the institution. You can contact our admissions office for more information on the credit transfer process.",
    },
    {
      title: "Is financial aid available for students in need?",
      content:
        "Yes, we offer financial aid programs to students in need. Our financial aid office provides assistance in exploring available options, such as grants, loans, and work-study opportunities. We encourage students to reach out to our financial aid office for personalized guidance and support.",
    },
  ];

  return (
    <>
      <div className="flex m-3 select-none lg:p-20 md:p-0 flex-wrap lg:flex-nowrap justify-center align-middle  w-full h-full md:pt-32 md:pb-32  ">
        <div className="w-full  flex flex-col h-full">
          <div className="flex flex-col  h-full ">
            <div className="text-4xl md:text-5xl pl-3 p-10 md:tracking-normal  md:leading-tight font-semibold">
              <div className="text-primary mb-3 text-xl font-bold">
                <span>FAQ</span>
              </div>
              <h1 className="">Frequently asked questions</h1>
              <p className="text-orange-500">___</p>
              <span className="text-3xl md:text-2xl">
                Still have questions? Check out our FAQ section below.
              </span>
              <h3 className="text-3xl md:text-2xl font">
                Feel free to ask our experts here.
              </h3>
            </div>

            <div className="mt-12 select-none ">
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

        <div className="w-full h-auto select-none ">
          <div className="w-full">
            <div className="container  ">
              <div className="w-full  h-fit mt-7">
                {faqData.map((faq) => (
                  <Accordion
                    key={faq.title}
                    title={faq.title}
                    content={faq.content}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
