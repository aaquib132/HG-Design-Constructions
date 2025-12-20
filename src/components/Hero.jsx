import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { FaArrowRight, FaChevronDown } from 'react-icons/fa';

const Hero = () => {
    const heroRef = useRef(null);
    const textRefs = useRef([]);
    const imgRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline();
            
            tl.to(textRefs.current, {
                y: 0,
                opacity: 1,
                duration: 1,
                stagger: 0.2,
                ease: "power3.out"
            })
            .to(imgRef.current, {
                scale: 1,
                duration: 1.5,
                ease: "power2.out"
            }, "-=1");
        }, heroRef);

        return () => ctx.revert();
    }, []);

    const addToTextRefs = (el) => {
        if (el && !textRefs.current.includes(el)) {
            textRefs.current.push(el);
        }
    };

    return (
        <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-b from-hgDark/80 via-hgDark/60 to-hgDark z-10"></div>
                <img 
                    ref={imgRef}
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
                    className="w-full h-full object-cover opacity-60 scale-110" 
                    alt="Building"
                />
            </div>

            {/* Content */}
            <div className="relative z-20 text-center px-4 max-w-6xl mx-auto mt-10">
                <p 
                    ref={addToTextRefs}
                    className="font-serif italic text-xl md:text-4xl text-hgGold mb-8 opacity-0 translate-y-10 tracking-wide"
                >
                    Refining Spaces. Elevating Lifestyles.
                </p>
                <h1 
                    ref={addToTextRefs}
                    className="text-4xl md:text-7xl lg:text-9xl font-bold leading-tight tracking-tighter mb-10 opacity-0 translate-y-10 text-white"
                >
                    PRECISION <br /> <span className="bg-gold-gradient text-transparent bg-clip-text">CRAFTSMANSHIP</span>
                </h1>
                
                <div 
                    ref={addToTextRefs}
                    className="opacity-0 translate-y-10 mt-12 flex flex-col md:flex-row gap-6 justify-center items-center"
                >
                    <a href="#contact" className="hover-trigger group relative inline-flex items-center justify-center px-10 py-4 text-base font-bold text-hgDark transition-all duration-300 bg-hgGold rounded-none hover:bg-white focus:outline-none overflow-hidden">
                        <span className="relative uppercase tracking-widest">Book Consultation</span>
                        <FaArrowRight className="ml-3 relative group-hover:translate-x-1 transition" />
                    </a>
                    <a href="#portfolio" className="hover-trigger group relative inline-flex items-center justify-center px-10 py-4 text-base font-bold text-white border border-white/20 hover:border-hgGold hover:text-hgGold transition-all duration-300 rounded-none overflow-hidden">
                         <span className="relative uppercase tracking-widest">View Projects</span>
                    </a>
                </div>
            </div>
            
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
                <FaChevronDown className="text-white/50 text-xl" />
            </div>

            {/* Marquee - Embedded inside Hero or separate? In HTML it was separate. Let's keep it here for simplicity or make a Marquee component. For now, inline it. */}
             <div className="absolute bottom-0 w-full bg-hgGold overflow-hidden py-4 whitespace-nowrap shadow-[0_0_40px_rgba(212,175,55,0.3)] z-30 translate-y-1/2 md:translate-y-2/3 border-y border-white/10 hidden md:block">
                 {/* Note: Marquee simple CSS animation */}
                <div className="animate-marquee inline-block text-hgDark font-bold text-lg md:text-xl uppercase tracking-[0.3em]">
                    Architectural Design • Structural Engineering • MEP Services • Interior Design • Cost Estimation • Project Management •  Architectural Design • Structural Engineering • MEP Services •
                </div>
            </div>
        </section>
    );
};

export default Hero;
