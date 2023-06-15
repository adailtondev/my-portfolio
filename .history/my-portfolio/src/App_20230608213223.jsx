import { useState, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css";
import Navbar from "./components/Navbar/Navbar";
import MainSec from "./components/MainSec/MainSec";
import AboutMe from "./components/AboutMe/AboutMe";

function App() {
  const PageReveal = () => {
    window.addEventListener('scroll', reveal);
  }

  function reveal () {
    var reveals = document.querySelectorAll('.reveal');

    for (var i = 0; i < reveals.length; i++) {
      var windowheight = window.innerHeight;
      var revealTop = reveals[i].getBoundingClientRect().top;
      var revealpoint = 150

      if (revealTop < windowheight - revealpoint) {
        reveals[i].classList.add('active');
      }
      else {
        reveals[i].classList.remove('active')
      }
    }
  }
  return (
    <div>
      <section>
        <Navbar />
      </section>
      <section>
        <MainSec />
      </section>
      <section>
        <AboutMe />
      </section>
    </div>
  );
}

export default App;
