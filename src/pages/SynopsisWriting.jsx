import Footer from "../Components/Footer"
import Navbar from "../Components/Navbar"
import React from 'react'
import Faq from '../Components/Faq'
import AssignementSection from "../Components/AssignementSection"

function SynopsisWriting() {
    return (
        <>
            <Navbar />
            <AssignementSection />
            <div className="flex justify-center bg-fourth bg-background   align-middle w-full h-full">
                <Faq />
            </div>
            <footer>
                <Footer />
            </footer>

        </>
    )
}

export default SynopsisWriting