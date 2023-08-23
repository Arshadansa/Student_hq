import Footer from "../Components/Footer"
import Navbar from "../Components/Navbar"
import React from 'react'
import Faq from '../Components/Faq'
import SypnosisSection from "../Components/SypnosisSection"

function SynopsisWriting() {
    return (
        <>
            <Navbar />
            <SypnosisSection />
            <div className="flex justify-center bg-fourth  align-middle w-full lg:first-letter:h-full">
                <Faq />
            </div>
            <footer>
                <Footer />
            </footer>

        </>
    )
}

export default SynopsisWriting