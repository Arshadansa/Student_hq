import React from 'react'
import Navbar from "../Components/Navbar"
import Footer from '../Components/Footer'
import Faq from '../Components/Faq'
import DeceratationSection from '../Components/DeceratationSection'

function DeceratationWriting() {
    return (
        <div>
            <Navbar />
            <DeceratationSection />
            <div className="flex justify-center bg-fourth bg-background   align-middle w-full h-full">
                <Faq />
            </div>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}

export default DeceratationWriting