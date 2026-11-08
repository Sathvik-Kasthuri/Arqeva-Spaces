import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from "./components/About";
import Services from './components/Services';
import Process from './components/Process';
import WhyChooseUs from './components/WhyChooseUs';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Navbar />
      
       {/* <main>
        <section id="home">
          <h1>Welcome to Arqeva Spaces</h1>
        </section>
      </main> */}

      <Hero/>

      <About/>

      <Services/>

      <Process/>

      <WhyChooseUs/>

      <Contact/>

      <Footer/>
    </div>
  )
}

export default App
