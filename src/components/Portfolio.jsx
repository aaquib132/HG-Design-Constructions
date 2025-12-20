import { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaTimes } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

const Portfolio = () => {
    const [filter, setFilter] = useState('all');
    const [selectedProject, setSelectedProject] = useState(null);
    const containerRef = useRef(null);
    const cardRefs = useRef([]);

    const projects = [
        { id: 1, category: "interior", title: "Modern Living Room", img: "https://images.unsplash.com/photo-1682662046610-fbdb3db4bd74?q=80&w=870&auto=format&fit=crop", desc: "Interior design project with modern aesthetics." },
        { id: 2, category: "exterior", title: "Facade Design", img: "https://images.unsplash.com/photo-1633109956509-5303bda0cd7c?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", desc: "Exterior building design with modern facade treatment." },
        { id: 3, category: "commercial", title: "Office Interiors", img: "https://images.unsplash.com/photo-1667646639495-ab1b362e1523?q=80&w=1031&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", desc: "Commercial interior design project for modern offices." },
        // Add more duplicates or unique ones to populate grid if needed
    ];

    useEffect(() => {
        // Initial animation
        const ctx = gsap.context(() => {
             gsap.fromTo(".portfolio-card",
                { y: 60, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    stagger: 0.15,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 80%",
                        once: true,
                    },
                }
            );
        }, containerRef);
        return () => ctx.revert();
    }, []);

    useEffect(() => {
        // Filtering animation
         const ctx = gsap.context(() => {
             cardRefs.current.forEach((card) => {
                if(!card) return;
                const category = card.dataset.category;
                const show = filter === 'all' || category === filter;

                if(show) {
                    gsap.to(card, {
                        autoAlpha: 1,
                        scale: 1,
                        display: 'block',
                        duration: 0.4,
                        ease: "power2.out"
                    });
                } else {
                    gsap.to(card, {
                        autoAlpha: 0,
                        scale: 0.8,
                        display: 'none',
                        duration: 0.4,
                        ease: "power2.in"
                    });
                }
             });
             ScrollTrigger.refresh();
         }, containerRef);
         return () => ctx.revert();
    }, [filter]);


    const addToRefs = (el) => {
        if (el && !cardRefs.current.includes(el)) {
            cardRefs.current.push(el);
        }
    };

    return (
        <section id="portfolio" ref={containerRef} className="py-20 md:py-32 px-6 md:px-12 bg-hgDark relative border-t border-white/5">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-24 border-b border-white/5 pb-8">
                    <h2 className="text-5xl md:text-7xl font-bold text-white section-title tracking-tighter">
                        SELECTED <span className="text-hgSlate font-serif italic">WORKS</span>
                    </h2>
                    <p className="text-hgMuted md:w-1/3 mt-6 md:mt-0 text-lg font-light">
                        Explore our completed works across interior, exterior, and commercial projects.
                    </p>
                </div>

                {/* Filters */}
                <div className="flex gap-4 mb-12 flex-wrap">
                    {['all', 'interior', 'exterior', 'commercial'].map((f) => (
                        <button 
                            key={f}
                            onClick={() => setFilter(f)}
                            className={`px-6 py-2 rounded-full border border-white/10 transition duration-300 uppercase text-xs tracking-widest font-bold ${filter === f ? 'bg-hgGold text-hgDark border-hgGold' : 'text-hgMuted hover:border-hgGold hover:text-white'}`}
                        >
                            {f}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 portfolio-grid min-h-[500px]">
                    {projects.map((project) => (
                        <div 
                            key={project.id}
                            ref={addToRefs}
                            data-category={project.category}
                            onClick={() => setSelectedProject(project)}
                            className="portfolio-card glass-card rounded-2xl overflow-hidden cursor-pointer hover-trigger"
                        >
                            <img src={project.img} className="w-full h-64 object-cover" alt={project.title} />
                            <div className="p-4">
                                <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                                <p className="text-gray-400 text-sm mt-1">{project.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal */}
            {selectedProject && (
                <div 
                    className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 transition-opacity duration-300 backdrop-blur-sm"
                    onClick={() => setSelectedProject(null)}
                >
                    <div 
                        className="relative w-11/12 md:w-3/4 lg:w-1/2 max-h-[90vh] overflow-auto rounded-none bg-hgDark border border-white/10 p-6 shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button 
                            onClick={() => setSelectedProject(null)} 
                            className="absolute top-4 right-4 text-white text-2xl hover:text-hgGold transition"
                        >
                            <FaTimes />
                        </button>
                        <img src={selectedProject.img} className="w-full h-auto rounded-lg mb-4" alt={selectedProject.title} />
                        <h3 className="text-3xl text-white font-bold">{selectedProject.title}</h3>
                        <p className="text-hgMuted mt-2">{selectedProject.desc}</p>
                        <p className="text-sm text-hgSlate uppercase tracking-widest mt-4">Category: {selectedProject.category}</p>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Portfolio;
