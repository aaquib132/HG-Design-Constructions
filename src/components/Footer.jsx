import { FaInstagram, FaFacebookF, FaYoutube, FaLocationArrow, FaPhone, FaEnvelope } from 'react-icons/fa';
import { FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
    const socialLinks = [
        { icon: <FaInstagram />, href: "#" },
        { icon: <FaFacebookF />, href: "#" },
        { icon: <FaYoutube />, href: "#" },
    ];

    const quickLinks = [
        { name: "About Us", href: "#about" },
        { name: "Our Services", href: "#services" },
        { name: "Portfolio", href: "#portfolio" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <footer className="bg-black py-20 px-6 md:px-12 border-t border-white/10 text-white relative z-20">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                
                {/* Brand */}
                <div className="col-span-1 md:col-span-2">
                    <div className="text-3xl font-bold tracking-tighter mb-6">
                        HG<span className="font-serif italic text-hgGold">.Design</span>
                    </div>
                    <p className="text-hgMuted max-w-sm mb-8 leading-relaxed">
                        Premium construction and interior design services in Bihar. Creating spaces that inspire and endure.
                    </p>
                    <div className="flex gap-4">
                        {socialLinks.map((social, i) => (
                            <a 
                                key={i}
                                href={social.href} 
                                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-hgGold hover:text-black hover:border-hgGold transition duration-300"
                            >
                                {social.icon}
                            </a>
                        ))}
                    </div>
                </div>
                
                {/* Quick Links */}
                <div>
                    <h4 className="font-bold uppercase tracking-widest mb-6 text-sm">Quick Links</h4>
                    <ul className="space-y-4 text-hgMuted text-sm">
                        {quickLinks.map((link) => (
                            <li key={link.name}>
                                <a href={link.href} className="hover:text-hgGold transition">{link.name}</a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                     <h4 className="font-bold uppercase tracking-widest mb-6 text-sm">Contact Only</h4>
                     <ul className="space-y-4 text-hgMuted text-sm">
                        <li className="flex items-start gap-3">
                            <FaMapMarkerAlt className="mt-1 text-hgGold" />
                            <span>Bahadurpur Gumti, <br /> Rajendranagar, Patna-16</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <FaPhone className="text-hgGold" />
                            <span>+91 966-175-5645</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <FaEnvelope className="text-hgGold" />
                            <span>contact@hgdesign.com</span>
                        </li>
                     </ul>
                </div>
            </div>

            {/* Copyright */}
            <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-hgSlate text-xs uppercase tracking-widest">
                <p>&copy; 2024 HG Design & Constructions. All Rights Reserved.</p>
                <p>Designed with Precision.</p>
            </div>
        </footer>
    );
};

export default Footer;
