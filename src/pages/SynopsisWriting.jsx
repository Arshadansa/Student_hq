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
            <div className="flex select-none justify-center bg-fourth bg-background   align-middle w-full h-full">
                <Faq />
            </div>
            <footer>
                <Footer />
            </footer>

        </>
    )
}

export default SynopsisWriting