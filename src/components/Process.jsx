import { FaRegComments, FaPencilAlt, FaKey, FaTools } from 'react-icons/fa';
// Note: FaTrowelBricks might be in fa6. Using FaTools as fallback or try importing from fa6 if needed.
import { FaTrowelBricks } from 'react-icons/fa6';

const Process = () => {
    const steps = [
        { icon: <FaRegComments />, title: "Consultation", desc: "We meet to understand your vision, requirements, and budget constraints.", id: "01" },
        { icon: <FaPencilAlt />, title: "Concept & Design", desc: "2D Layouts and 3D Visualizations are processed for your approval.", id: "02" },
        { icon: <FaTrowelBricks />, title: "Execution", desc: "Construction / Interior work begins under strict supervision.", id: "03" },
        { icon: <FaKey />, title: "Handover", desc: "Final quality checks and key handover of your dream space.", id: "04" },
    ];

    return (
        <section className="py-20 md:py-32 px-6 md:px-12 bg-hgDark border-t border-white/5 relative overflow-hidden">
             {/* Background Glow */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-hgSlate/10 rounded-full blur-[100px] pointer-events-none"></div>
            
            <div className="max-w-7xl mx-auto relative z-10">
                 <div className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-24">
                    <h2 className="text-5xl md:text-7xl font-bold text-white section-title tracking-tighter">
                        HOW WE <span className="text-hgSlate font-serif italic">WORK</span>
                    </h2>
                    <p className="text-hgMuted md:w-1/3 mt-6 md:mt-0 text-lg font-light">
                        From the first sketch to the final key handover, our process is transparent, structured, and client-focused.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-12 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-hgGold/30 to-transparent"></div>

                    {steps.map((step, index) => (
                        <div key={index} className="relative group">
                            <div className="w-24 h-24 bg-hgDark border border-white/10 rounded-full flex items-center justify-center mb-8 relative z-10 group-hover:border-hgGold transition duration-500">
                                <span className="text-3xl text-hgMuted group-hover:text-hgGold transition px-4">
                                    {step.icon}
                                </span>
                            </div>
                            <h4 className="text-xl font-bold text-white mb-3">{step.id}. {step.title}</h4>
                            <p className="text-hgMuted text-sm leading-relaxed">{step.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Process;
