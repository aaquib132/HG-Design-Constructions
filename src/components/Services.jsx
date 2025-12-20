import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaDraftingCompass, FaLayerGroup, FaCalculator, FaSwatchbook, FaHardHat } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
    const sectionRef = useRef(null);
    const cardRefs = useRef([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
             gsap.fromTo(cardRefs.current, 
                { y: 60, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1.2,
                    stagger: 0.18,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 80%",
                        once: true,
                    }
                }
            );

            gsap.from(".section-title", {
                x: -50,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                }
            });

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const addToRefs = (el) => {
        if (el && !cardRefs.current.includes(el)) {
            cardRefs.current.push(el);
        }
    };

    const services = [
        { icon: <FaDraftingCompass />, title: "Architectural Design", desc: "Modern layouts tailored to your lifestyle with 3D visualization and spatial planning.", id: "01" },
        { icon: <FaLayerGroup />, title: "Structural Design", desc: "Safety-first engineering ensuring stability, durability, and load-bearing optimization.", id: "02" },
        { icon: <FaCalculator />, title: "Estimating & Costing", desc: "Precise budget planning and material costing to prevent overruns.", id: "03" },
        { icon: <FaSwatchbook />, title: "Interior & Exterior", desc: "High-end finishing, elevation design, and interior decor execution.", id: "04" },
        { icon: <FaHardHat />, title: "Project Mgmt", desc: "Full supervision, site visits, and contractor management from start to finish.", id: "05" },
    ];

    return (
        <section id="services" ref={sectionRef} className="py-20 md:py-32 px-6 md:px-12 bg-hgDark relative">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-24 border-b border-white/5 pb-8">
                    <h2 className="text-5xl md:text-7xl font-bold text-white section-title tracking-tighter">
                        OUR <span className="text-hgSlate font-serif italic">EXPERTISE</span>
                    </h2>
                    <p className="text-hgMuted md:w-1/3 mt-6 md:mt-0 text-lg font-light leading-relaxed">
                        Integrating aesthetics with structural integrity. We handle everything from the blueprint to the finishing touch with absolute precision.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div 
                            key={index} 
                            ref={addToRefs}
                            className="glass-card p-10 rounded-none hover:border-hgGold/30 transition duration-500 group cursor-pointer hover-trigger"
                        >
                            <div className="flex justify-between items-start mb-10">
                                <span className="text-4xl text-hgGold group-hover:scale-110 transition duration-300">
                                    {service.icon}
                                </span>
                                <span className="text-xs font-mono text-hgSlate border border-hgSlate/30 px-3 py-1">{service.id}</span>
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-hgGold transition">{service.title}</h3>
                            <p className="text-hgMuted text-sm leading-relaxed">{service.desc}</p>
                        </div>
                    ))}
                </div>
                
                 <div className="mt-20 md:mt-32">
                    <h3 className="text-4xl md:text-5xl font-bold mb-16 text-white text-center">
                        SPECIALIZED <span className="text-hgSlate font-serif italic">PROJECTS</span>
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Static specialized project cards */}
                        {[
                            { title: "Luxury Interiors", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop", desc: "Premium residential interiors crafted with modern materials." },
                            { title: "Commercial Projects", img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2070&auto=format&fit=crop", desc: "Office spaces, showrooms, and commercial buildings designed for efficiency." },
                            { title: "Exterior Elevation", img: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?q=80&w=2070&auto=format&fit=crop", desc: "Contemporary façade designs enhancing curb appeal." }
                        ].map((item, i) => (
                             <div key={i} className="glass-card rounded-3xl overflow-hidden group hover-trigger cursor-pointer">
                                <div className="h-64 overflow-hidden">
                                    <img 
                                        src={item.img}
                                        className="w-full h-full object-cover scale-110 group-hover:scale-125 transition duration-700"
                                        alt={item.title}
                                    />
                                </div>
                                <div className="p-8">
                                    <h4 className="text-2xl font-bold mb-3 text-white group-hover:text-hgGold transition">{item.title}</h4>
                                    <p className="text-hgMuted text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
