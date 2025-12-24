import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Award, Compass, Users, Calculator, ShieldCheck, Ruler } from 'lucide-react';

const About = () => {
    const sectionRef = useRef(null);
    const titleRef = useRef(null);

    useEffect(() => {
        const el = sectionRef.current;
        
        gsap.fromTo(titleRef.current,
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: el,
                    start: "top 80%",
                }
            }
        );
    }, []);

    const credentials = [
        { icon: <Award className="w-8 h-8 text-hgGold" />, title: "M.Tech Certified", desc: "Advanced Engineering" },
        { icon: <ShieldCheck className="w-8 h-8 text-hgGold" />, title: "AMIE Certified", desc: "ID: AMI964448" },
        { icon: <Ruler className="w-8 h-8 text-hgGold" />, title: "Head Surveyor", desc: "Award Winning" },
        { icon: <Compass className="w-8 h-8 text-hgGold" />, title: "Vastu Expert", desc: "Scientific Planning" },
    ];

    return (
        <section ref={sectionRef} className="py-24 md:py-32 bg-hgDark text-white relative overflow-hidden" id="about">
            <div className="container mx-auto px-6 relative z-10">
                
                {/* Header */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
                    <div className="relative">
                         <div className="absolute -left-10 -top-10 w-40 h-40 border-l border-t border-hgGold/30 rounded-tl-3xl"></div>
                        <h2 ref={titleRef} className="text-4xl md:text-6xl font-heading font-bold mb-8 text-white leading-tight">
                            Structural <span className="text-hgGold">Authority</span>.<br/>
                            Modern <span className="text-hgGold">Luxury</span>.
                        </h2>
                        <p className="text-lg text-hgMuted leading-relaxed max-w-xl font-sans">
                            At HG Design & Constructions, we don't just build structures; we craft legacies. 
                            Anchored by scientific Vastu planning and certified structural integrity, we deliver premium spaces that stand the test of time.
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 gap-6">
                        <div className="glass-card p-8 border border-hgGold/10 rounded-none relative overflow-hidden group hover:border-hgGold/30 transition-all duration-500">
                             <div className="absolute right-0 top-0 w-20 h-20 bg-hgGold/10 rounded-bl-full"></div>
                             <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                                <span className="text-hgGold"><Compass size={24}/></span> Vastu-Compliant
                             </h3>
                             <p className="text-sm text-hgMuted">Scientific spatial planning ensuring prosperity and harmony in every square foot.</p>
                        </div>
                        <div className="glass-card p-8 border border-hgGold/10 rounded-none relative overflow-hidden group hover:border-hgGold/30 transition-all duration-500">
                             <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                                <span className="text-hgGold"><ShieldCheck size={24}/></span> Structural Integrity
                             </h3>
                             <p className="text-sm text-hgMuted">Verified M.Tech certified designs focusing on load-bearing optimization and safety.</p>
                        </div>
                        <div className="glass-card p-8 border border-hgGold/10 rounded-none relative overflow-hidden group hover:border-hgGold/30 transition-all duration-500">
                             <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                                <span className="text-hgGold"><Calculator size={24}/></span> Budget Innovation
                             </h3>
                             <p className="text-sm text-hgMuted">Premium aesthetics achieved through smart material selection and cost-efficient engineering.</p>
                        </div>
                    </div>
                </div>

                {/* Credentials Bar */}
                <div className="border-y border-white/5 py-12">
                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {credentials.map((cred, index) => (
                            <div key={index} className="flex items-center gap-4 group cursor-default">
                                <div className="p-4 bg-white/5 border border-white/10 rounded-full group-hover:border-hgGold/50 transition-colors">
                                    {cred.icon}
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-white group-hover:text-hgGold transition-colors">{cred.title}</h3>
                                    <p className="text-hgMuted text-xs uppercase tracking-wider">{cred.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default About;
