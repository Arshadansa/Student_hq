import React from 'react'
import Navbar from "../Components/Navbar"
import Footer from '../Components/Footer'
import Faq from '../Components/Faq'
import PhdthesisSection from '../Components/PhdthesisSection'

function PhdthesisWriting() {
    return (
        <>
            <Navbar />
            <PhdthesisSection />
            <div className="flex justify-center bg-fourth   align-middle w-full lg:first-letter:h-full">
                <Faq />
            </div>
            <footer>
                <Footer />
            </footer>
        </>
    )
}


export default PhdthesisWriting