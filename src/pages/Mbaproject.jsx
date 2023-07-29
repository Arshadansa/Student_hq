import React from 'react'
import Navbar from "../Components/Navbar"
import Footer from '../Components/Footer'
import Faq from '../Components/Faq'
import MbaprojectSection from '../Components/MbaprojectSection'

function Mbaproject() {
    return (
        <>
            <Navbar />
            <MbaprojectSection />
            <div className="flex justify-center bg-fourth bg-background   align-middle w-full lg:first-letter:h-full">
                <Faq />
            </div>
            <footer>
                <Footer />
            </footer>
        </>
    )
}

export default Mbaproject