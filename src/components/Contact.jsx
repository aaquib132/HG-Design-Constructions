import { FaPhone, FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
    return (
        <section id="contact" className="py-20 md:py-32 px-4 bg-hgDark relative overflow-hidden">
             {/* Background Blur */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-hgGold/10 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="max-w-5xl mx-auto text-center relative z-10">
                <p className="text-hgGold uppercase tracking-[0.3em] mb-8 text-sm">Start Your Journey</p>
                <h2 className="text-5xl md:text-8xl font-bold mb-16 leading-tight">
                    LET'S BUILD <br /> SOMETHING <span className="text-hgSlate font-serif italic">ICONIC</span>
                </h2>

                <div className="flex flex-col md:flex-row justify-center gap-8 items-center">
                    <a href="tel:+919661755645" className="hover-trigger group bg-hgGold text-hgDark px-12 py-6 rounded-full text-xl font-bold hover:bg-white transition-all duration-300 flex items-center shadow-[0_0_40px_rgba(212,175,55,0.3)]">
                        <FaPhone className="mr-4" /> 
                        +91 966-175-5645
                        <span className="ml-3 w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                    </a>
                    <a href="https://wa.me/918789890316" className="hover-trigger border border-white/20 text-white px-12 py-6 rounded-full text-xl font-bold hover:bg-white/5 hover:border-hgGold hover:text-hgGold transition duration-300 flex items-center backdrop-blur-sm">
                        <FaWhatsapp className="mr-4" /> 
                        WhatsApp Us
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Contact;
