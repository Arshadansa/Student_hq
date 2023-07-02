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
      <main className="select-none">
        <Mid />
        <Contact />
      </main>
      <section className="select-none">
        <Bottom />
      </section>
      <footer className="select-none">
        <Footer />
      </footer>
    </>
  );
}

export default Home;
