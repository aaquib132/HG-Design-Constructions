import { FaLinkedinIn, FaEnvelope } from 'react-icons/fa';

const Team = () => {
    const team = [
        { 
            name: "Mukesh Kumar", 
            role: "Lead Structural Engineer", 
            initials: "MK",
            desc: "Expert in high-rise structural analysis and earthquake-resistant design methodologies."
        },
        { 
            name: "Priyanka Kumari", 
            role: "Senior Interior Designer", 
            initials: "PK",
            desc: "Specializing in sustainable luxury interiors and Vastu-compliant spatial planning."
        },
        { 
            name: "Jitesh Kumar", 
            role: "Project Manager", 
            initials: "JK",
            desc: " overseeing end-to-end execution with a focus on cost optimization and timeline adherence."
        }
    ];

    return (
        <section className="py-32 bg-hgDark relative overflow-hidden" id="team">
            
            {/* Background ambient glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-hgGold/5 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                
                <div className="text-center mb-20 team-header animate-fadeInUp">
                    <span className="text-hgGold font-bold tracking-[0.2em] uppercase text-sm mb-4 block">Our Leadership</span>
                    <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
                        Meet The <span className="text-hgGold">Experts</span>
                    </h2>
                    <p className="text-hgMuted max-w-2xl mx-auto text-lg font-light">
                        The minds behind the masterpiece. Guided by precision, driven by passion.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 team-grid max-w-6xl mx-auto">
                    {team.map((member, index) => (
                        <div 
                            key={index} 
                            style={{ animationDelay: `${index * 200}ms` }}
                            className="group relative bg-hgDark/40 backdrop-blur-md border border-hgGold/20 hover:border-hgGold rounded-xl p-10 text-center transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(197,160,89,0.2)] animate-fadeInUp opacity-0 [animation-fill-mode:forwards]"
                        >
                            {/* Stylized Initials Anchor */}
                            <div className="w-24 h-24 mx-auto mb-8 rounded-full border border-hgGold/30 group-hover:border-hgGold bg-hgGold/5 flex items-center justify-center transition-all duration-500 relative overflow-hidden">
                                <span className="font-serif text-3xl text-hgGold group-hover:scale-110 transition-transform duration-500 tracking-widest">
                                    {member.initials}
                                </span>
                                {/* Subtle spin effect on ring */}
                                <div className="absolute inset-0 border-t border-hgGold/50 rounded-full animate-spin-slow opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                            </div>

                            <h3 className="text-2xl font-bold text-white mb-2 font-heading">{member.name}</h3>
                            <p className="text-hgGold text-sm uppercase tracking-widest mb-6 font-medium">{member.role}</p>
                            
                            <p className="text-hgMuted text-sm leading-relaxed mb-8 opacity-80">
                                {member.desc}
                            </p>

                            {/* Contact / Social Placeholder interactions */}
                            <div className="flex justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                                <a href="#" className="p-3 text-hgGold/70 hover:text-hgGold border border-hgGold/20 rounded-full hover:bg-hgGold/10 transition-colors">
                                    <FaLinkedinIn size={16} />
                                </a>
                                <a href="#" className="p-3 text-hgGold/70 hover:text-hgGold border border-hgGold/20 rounded-full hover:bg-hgGold/10 transition-colors">
                                    <FaEnvelope size={16} />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;
