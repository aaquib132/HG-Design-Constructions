import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { FaArrowRight, FaChevronDown } from 'react-icons/fa';

const Hero = () => {
    const heroRef = useRef(null);
    const textRefs = useRef([]);
    const imgRef = useRef(null);
    const trustRefs = useRef([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline();
            
            tl.to(textRefs.current, {
                y: 0,
                opacity: 1,
                duration: 1,
                stagger: 0.15,
                ease: "power3.out"
            })
            .to(imgRef.current, {
                scale: 1,
                duration: 2,
                ease: "power2.out"
            }, "-=1")
            .to(trustRefs.current, {
                opacity: 1,
                y: 0,
                stagger: 0.05,
                duration: 0.6,
                ease: "back.out(1.7)"
            }, "-=1.5");

        }, heroRef);

        return () => ctx.revert();
    }, []);

    const addToTextRefs = (el) => {
        if (el && !textRefs.current.includes(el)) {
            textRefs.current.push(el);
        }
    };

    const addToTrustRefs = (el) => {
        if (el && !trustRefs.current.includes(el)) {
            trustRefs.current.push(el);
        }
    };

    return (
        <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image - Dark Mode Compatible */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-hgDark/60 z-10"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-hgDark/80 via-transparent to-hgDark z-10"></div>
                <img 
                    ref={imgRef}
                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop" 
                    className="w-full h-full object-cover scale-110 opacity-50" 
                    alt="Luxury Interior"
                />
            </div>

            {/* Content */}
            <div className="relative z-20 text-center px-4 max-w-6xl mx-auto mt-0 md:mt-10">
                <div ref={addToTextRefs} className="opacity-0 translate-y-10 mb-4 mt-5 md:mb-6">
                    <span className="inline-block py-1 px-3 rounded-full bg-hgGold/10 text-hgGold text-xs md:text-sm font-bold tracking-widest border border-hgGold/20">
                        EST. 2017 • 8 YEARS OF EXCELLENCE
                    </span>
                </div>

                {/* Hindi Tagline */}
                <h1 
                    ref={addToTextRefs}
                    className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 opacity-0 translate-y-10 text-white font-sans"
                >
                    <span className="block text-hgGold font-sans text-2xl pt-5 md:text-4xl lg:text-6xl mb-4 tracking-normal">
                        "मेरा सेवा आपका पसंद,<br/> मेरा महनत आपका भविष्य"
                    </span>
                    <span className="block text-sm md:text-base text-white uppercase tracking-widest mt-5 font-sans font-medium  opacity-50">
                        Structural Strength meets <span className="text-hgGold">Modern Luxury</span>
                    </span>
                </h1>
                
                <div 
                    ref={addToTextRefs}
                    className="opacity-0 translate-y-10 mt-8 md:mt-10 flex flex-col md:flex-row gap-4 justify-center items-center"
                >
                    <a href="#contact" className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-bold text-hgDark transition-all duration-300 bg-hgGold hover:bg-white rounded-full focus:outline-none overflow-hidden">
                        <span className="relative uppercase tracking-widest">Book Consultation</span>
                        <FaArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" />
                    </a>
                    <a href="#portfolio" className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white border border-white/20 hover:border-hgGold hover:text-hgGold transition-all duration-300 rounded-full overflow-hidden">
                         <span className="relative uppercase tracking-widest">View Projects</span>
                    </a>
                </div>

                {/* Trust Highlights - Bottom of Content */}
                <div className="mt-12 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-auto mx-auto border-t border-white/10 pt-8">
                    {[
                        { label: "Experience", value: "8+ Years" },
                        { label: "Projects", value: "Project Letter Available", small: true },
                        { label: "Certified", value: "M.Tech & AMIE" },
                        { label: "Rating", value: "Customer Loved" }
                    ].map((item, idx) => (
                        <div key={idx} ref={addToTrustRefs} className="opacity-0 translate-y-4">
                            <p className={`font-bold text-hgGold ${item.small ? 'text-sm md:text-base' : 'text-xl md:text-2xl'}`}>{item.value}</p>
                            <p className="text-hgMuted text-xs md:text-sm uppercase tracking-wider">{item.label}</p>
                        </div>
                    ))}
                </div>
            </div>
            
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
                <FaChevronDown className="text-white/50 text-xl" />
            </div>
        </section>
    );
};

export default Hero;
