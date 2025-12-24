import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CheckCircle2, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const TechnicalGuide = () => {
    const sectionRef = useRef(null);
    
    useEffect(() => {
        const ctx = gsap.context(() => {
             gsap.utils.toArray('.guide-section').forEach((section, i) => {
                const img = section.querySelector('.guide-img');
                const text = section.querySelector('.guide-text');
                
                let tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: section,
                        start: "top 70%",
                    }
                });

                tl.from(img, { opacity: 0, x: i % 2 === 0 ? -50 : 50, duration: 1, ease: "power3.out" })
                  .from(text, { opacity: 0, y: 30, duration: 0.8, ease: "power3.out" }, "-=0.6");
             });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    const sections = [
        {
            title: "The Foundation",
            subtitle: "Planning & Vastu",
            img: "https://www.assureshift.in/sites/default/files/images/blog/home-and-office-vastu-plan.jpg", // Blueprint/Compass feel
            content: (
                <>
                    <p className="text-hgMuted leading-relaxed mb-6">
                        A home is more than just walls; it is an energy center. We begin every project by harmonizing ancient wisdom with modern precision.
                    </p>
                    <div className="space-y-6">
                        <div>
                            <h4 className="text-white font-bold text-lg mb-2 flex items-center gap-2">
                                <span className="text-hgGold">01.</span> Vastu Shastra
                            </h4>
                            <p className="text-sm text-hgSlate">
                                We meticulously align the layout to ensure optimal energy flow (Prana), promoting peace and prosperity for the inhabitants. Directions, entrances, and room placements are scientifically calculated.
                            </p>
                        </div>
                        <div>
                            <h4 className="text-white font-bold text-lg mb-2 flex items-center gap-2">
                                <span className="text-hgGold">02.</span> Proper Working Design
                            </h4>
                            <p className="text-sm text-hgSlate">
                                Before a single brick is laid, we eliminate errors through architectural precision. Our zero-waste layouts ensure efficient space utilization, proper ventilation, and structural feasibility.
                            </p>
                        </div>
                    </div>
                </>
            )
        },
        {
            title: "The Strength Checklist",
            subtitle: "Material Quality",
            img: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=2070&auto=format&fit=crop", // Construction materials (Concrete/Steel)
            content: (
                <>
                    <p className="text-hgMuted leading-relaxed mb-6">
                        The longevity of a structure is defined by the quality of its raw materials. We do not compromise on the 'Bone and Muscle' of your building.
                    </p>
                    <div className="space-y-6">
                        <div>
                            <h4 className="text-white font-bold text-lg mb-2 flex items-center gap-2">
                                <span className="text-hgGold">01.</span> Cement & Iron Grade
                            </h4>
                            <p className="text-sm text-hgSlate">
                                We exclusively use <strong>OPC 53 Grade</strong> cement for high-load bearing members and <strong>Fe550D TMT bars</strong> which offer superior ductility and earthquake resistance compared to standard steel.
                            </p>
                        </div>
                        <div>
                            <h4 className="text-white font-bold text-lg mb-2 flex items-center gap-2">
                                <span className="text-hgGold">02.</span> Mix Design & Ratios
                            </h4>
                            <p className="text-sm text-hgSlate">
                                Concrete is chemistry. We use automated batching to strictly maintain the <strong>M20/M25</strong> mix design ratios, ensuring the concrete achieves its target comprehensive strength without segregation.
                            </p>
                        </div>
                    </div>
                </>
            )
        },
        {
            title: "Precision in Execution",
            subtitle: "The Professional Touch",
            img: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop", // Construction site action
            content: (
                <>
                    <p className="text-hgMuted leading-relaxed mb-6">
                        Even the best materials fail without expert handling. Our on-site engineering team ensures every protocol is followed with military precision.
                    </p>
                    <div className="space-y-6">
                        <div className="flex gap-4">
                            <div className="w-10 h-10 rounded-full bg-hgGold/10 flex items-center justify-center shrink-0 border border-hgGold/30 text-hgGold">1</div>
                            <div>
                                <h4 className="text-white font-bold text-lg mb-1">Alignment & Framework</h4>
                                <p className="text-sm text-hgSlate">Laser-leveled shuttering ensures columns and beams are perfectly vertical (plumb) and horizontal, preventing future cracks or structural tilt.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="w-10 h-10 rounded-full bg-hgGold/10 flex items-center justify-center shrink-0 border border-hgGold/30 text-hgGold">2</div>
                            <div>
                                <h4 className="text-white font-bold text-lg mb-1">Bar-Binding</h4>
                                <p className="text-sm text-hgSlate">Steel must be tied, not just placed. We ensure correct stirrup spacing and lap lengths to resist shear and tension forces effectively.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="w-10 h-10 rounded-full bg-hgGold/10 flex items-center justify-center shrink-0 border border-hgGold/30 text-hgGold">3</div>
                            <div>
                                <h4 className="text-white font-bold text-lg mb-1">Compaction & Curing</h4>
                                <p className="text-sm text-hgSlate">Needle vibrators remove air voids for density. Post-casting, we enforce a strict 21-day pond curing regimen to maximize chemical bonding.</p>
                            </div>
                        </div>
                    </div>
                </>
            )
        }
    ];

    return (
        <section ref={sectionRef} className="py-32 bg-hgDark text-white relative overflow-hidden" id="expert-guide">
            {/* Background Texture */}
             <div className="absolute inset-0 z-0 opacity-20 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>

            <div className="container max-w-7xl mx-auto px-6 relative z-10">
                
                {/* Main Title & Intro */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-24 border-b border-white/5 pb-8">
                    
                    <h2 className="text-6xl md:text-8xl font-bold text-white section-title tracking-tighter">
                        <span className="text-hgGold uppercase tracking-widest text-sm ml-1 font-bold ">Expert Insight</span><br />
                        BUILDING YOUR <span className="text-hgSlate text-5xl md:text-7xl font-serif italic"><br />DREAM HOME</span>
                    </h2>
                    <p className="text-hgMuted md:w-1/3 mt-6 md:mt-0 text-lg font-light">
                        A Guide to Strength, Vastu, and Design. True luxury lies in the unseen details. A masterpiece is born from the perfect union of ancient wisdom and modern structural engineering.
                    </p>
                </div>

                <div className="space-y-32 mb-32">
                    {sections.map((section, index) => (
                        <div key={index} className={`guide-section flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-20 items-center`}>
                            
                            {/* Image Side */}
                            <div className="w-full lg:w-1/2 guide-img relative group">
                                <div className={`absolute -inset-4 border border-hgGold/20 rounded-xl transition-transform duration-700 group-hover:scale-105 ${index % 2 === 0 ? '-rotate-2' : 'rotate-2'}`}></div>
                                <div className="relative h-[400px] md:h-[500px] w-full overflow-hidden rounded-lg shadow-2xl">
                                    <div className="absolute inset-0 bg-hgDark/30 group-hover:bg-hgDark/0 transition-colors duration-700 z-10"></div>
                                    <img 
                                        src={section.img} 
                                        alt={section.title} 
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition duration-1000"
                                    />
                                </div>
                            </div>

                            {/* Text Side */}
                            <div className="w-full lg:w-1/2 guide-text">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="h-px flex-1 bg-hgGold/30"></div>
                                    <span className="text-hgGold font-bold tracking-widest uppercase text-sm">{section.subtitle}</span>
                                </div>
                                <h3 className="text-4xl font-bold font-heading text-white mb-8">{section.title}</h3>
                                {section.content}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Expert Tip Call-to-Action */}
                <div className="relative rounded-xl p-[2px] bg-gradient-to-r from-hgGold/20 via-hgGold to-hgGold/20 max-w-4xl mx-auto transform hover:scale-[1.02] transition duration-500">
                    <div className="bg-hgDark rounded-xl p-8 md:p-12 text-center md:text-left flex flex-col md:flex-row items-center gap-8 shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-hgGold/5 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3"></div>
                        
                        <div className="flex-1 relative z-10">
                            <div className="flex items-center justify-center md:justify-start gap-3 mb-4 text-hgGold">
                                <CheckCircle2 size={28} />
                                <span className="font-bold tracking-widest uppercase text-sm">Expert Tip</span>
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">
                                A building is only as strong as the supervision it receives.
                            </h3>
                            <p className="text-hgMuted text-lg leading-relaxed">
                                At HG Design & Constructions, we provide full management to ensure every one of these steps is executed with 100% precision.
                            </p>
                        </div>
                        <div className="shrink-0 relative z-10">
                            <a href="#contact" className="group relative inline-flex items-center justify-center px-10 py-5 text-base font-bold text-hgDark bg-hgGold hover:bg-white transition-all duration-300 rounded-full shadow-[0_0_20px_rgba(197,160,89,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]">
                                <span className="mr-3">Consult Structural Experts</span>
                                <ArrowRight className="group-hover:translate-x-1 transition-transform"/>
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default TechnicalGuide;
