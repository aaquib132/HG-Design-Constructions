import { useEffect, useRef } from 'react'
import Lenis from '@studio-freight/lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Process from './components/Process';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const cursorDotRef = useRef(null);
  const cursorOutlineRef = useRef(null);

  useEffect(() => {
    // Register ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Smooth Scroll (Lenis)
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      smooth: true,
    });

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    // Cursor Logic
    const cursorDot = cursorDotRef.current;
    const cursorOutline = cursorOutlineRef.current;

    if (cursorDot && cursorOutline && window.matchMedia("(min-width: 768px)").matches) {
        
        // Initial set to avoid jump
        gsap.set([cursorDot, cursorOutline], { xPercent: -50, yPercent: -50 });

        const onMouseMove = (e) => {
            gsap.to(cursorDot, { 
                x: e.clientX, 
                y: e.clientY, 
                duration: 0.1, 
                ease: "power2.out" 
            });
            gsap.to(cursorOutline, { 
                x: e.clientX, 
                y: e.clientY, 
                duration: 0.5, 
                ease: "power2.out" 
            });
        };

        const onHover = () => cursorOutline.classList.add("cursor-hover");
        const onLeave = () => cursorOutline.classList.remove("cursor-hover");

        window.addEventListener("mousemove", onMouseMove);

        // Add hover listeners to interactive elements
        const addListeners = () => {
             const hoverables = document.querySelectorAll('a, button, .hover-trigger');
             hoverables.forEach(el => {
                 el.addEventListener('mouseenter', onHover);
                 el.addEventListener('mouseleave', onLeave);
             });
             return hoverables;
        };
        
        const hoverables = addListeners();

        // Cleanup
        return () => {
            gsap.ticker.remove(lenis.raf);
            lenis.destroy();
            window.removeEventListener("mousemove", onMouseMove);
            hoverables.forEach(el => {
                 el.removeEventListener('mouseenter', onHover);
                 el.removeEventListener('mouseleave', onLeave);
            });
        };
    }

    return () => {
      gsap.ticker.remove(lenis.raf);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="bg-hgDark min-h-screen text-white font-sans selection:bg-hgGold selection:text-hgDark overflow-x-hidden">
      {/* Custom Cursor Elements */}
      <div ref={cursorDotRef} className="cursor-dot hidden md:block"></div>
      <div ref={cursorOutlineRef} className="cursor-outline hidden md:block"></div>

      <Navbar />
      <Hero />
      <Services />
      <Process />
      <Portfolio />
      <Testimonials />
      
      {/* Parallax Section */}
      <div className="h-[50vh] relative overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <img src="https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?q=80&w=2897&auto=format&fit=crop" className="w-full h-[120%] object-cover absolute top-0" alt="Architecture" />
        <h2 className="relative z-20 text-6xl md:text-9xl font-bold text-white/90 text-center tracking-tighter mix-blend-overlay">
            PATNA'S FINEST
        </h2>
      </div>

      <Contact />
      <Footer />
    </div>
  )
}

export default App

