import React from "react";
import Narbar from "../Components/Navbar";
import Header from '../Components/Header'
import Mid from "../Components/Mid";
import Footer from "../Components/Footer";
import Bottom from "../Components/Bottom";
import Contact from "../Components/Contact";

function Home() {
  return (
    <>
      <nav>
        <Narbar />
      </nav>

      <section>
        <Header />
      </section>
      <main>
        <Mid />
        <Contact />
      </main>
      <section>
        <Bottom />
      </section>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default Home;
