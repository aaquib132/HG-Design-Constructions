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
        { icon: <FaDraftingCompass />, title: "Full Building Designs", desc: "Complete 2D/3D layouts, elevation planning, and spatial optimization aligned with Vastu principles.", id: "01" },
        { icon: <FaLayerGroup />, title: "Construction", desc: "End-to-end execution with premium materials, ensuring every square foot meets our rigorous standards.", id: "02" },
        { icon: <FaHardHat />, title: "Supervision", desc: "Constant on-site monitoring by certified engineers to ensure compliance with structural drawings.", id: "03" },
        { icon: <FaCalculator />, title: "Management", desc: "Turnkey project management including precise budgeting, scheduling, and expert labor coordination.", id: "04" },
    ];

    return (
        <section id="services" ref={sectionRef} className="py-24 md:py-32 px-6 md:px-12 bg-hgDark relative">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 border-b border-hgGold/20 pb-12">
                    <h2 className="text-4xl md:text-7xl font-bold text-white section-title tracking-tight font-heading">
                        OUR <span className="text-hgSlate italic font-serif">EXPERTISE</span>
                    </h2>
                    <p className="text-hgMuted md:w-1/3 mt-6 md:mt-0 text-lg font-light leading-relaxed">
                        Integrating aesthetics with structural integrity. We handle everything from the blueprint to the finishing touch with absolute precision.
                    </p>
                </div>

                {/* Core Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-32">
                    {services.map((service, index) => (
                        <div 
                            key={index} 
                            ref={addToRefs}
                            className="glass-card p-8 rounded-none border border-white/5 hover:border-hgGold/40 transition-all duration-500 group cursor-default"
                        >
                            <div className="flex justify-between items-start mb-8">
                                <span className="text-3xl text-hgGold group-hover:scale-110 transition duration-300">
                                    {service.icon}
                                </span>
                                <span className="text-xs font-mono text-hgSlate border border-hgSlate/30 px-2 py-1">{service.id}</span>
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-white group-hover:text-hgGold transition font-heading">{service.title}</h3>
                            <p className="text-hgMuted text-sm leading-relaxed">{service.desc}</p>
                        </div>
                    ))}
                </div>
                
                
                {/* Specialized Projects */}
                <div className="mt-32">
                    <h3 className="text-4xl md:text-5xl font-bold mb-16 text-white text-center font-heading">
                        SPECIALIZED <span className="text-hgSlate font-serif italic">PROJECTS</span>
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Static specialized project cards */}
                        {[
                            { title: "Luxury Interiors", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop", desc: "Premium residential interiors crafted with modern materials." },
                            { title: "Commercial Projects", img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2070&auto=format&fit=crop", desc: "Office spaces, showrooms, and commercial buildings designed for efficiency." },
                            { title: "Exterior Elevation", img: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?q=80&w=2070&auto=format&fit=crop", desc: "Contemporary façade designs enhancing curb appeal." }
                        ].map((item, i) => (
                             <div key={i} className="group relative overflow-hidden h-96 border border-white/10 cursor-pointer">
                                <img 
                                    src={item.img}
                                    className="w-full h-full object-cover transition duration-700 scale-100 group-hover:scale-110 opacity-60 group-hover:opacity-40"
                                    alt={item.title}
                                />
                                <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-hgDark/90 to-transparent">
                                    <h4 className="text-2xl font-bold mb-2 text-white group-hover:text-hgGold transition-colors font-heading">{item.title}</h4>
                                    <p className="text-hgMuted text-sm leading-relaxed opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">{item.desc}</p>
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
