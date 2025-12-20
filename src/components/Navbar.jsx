import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const mobileMenuRef = useRef(null);
    const mobileLinkRefs = useRef([]);

    // Scroll Logic
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Mobile Menu Animation
    useEffect(() => {
        if (isMenuOpen) {
            // Open
            gsap.to(mobileMenuRef.current, {
                x: '0%',
                duration: 0.5,
                ease: "power2.out"
            });
            gsap.to(mobileLinkRefs.current, {
                opacity: 1,
                y: 0,
                duration: 0.5,
                stagger: 0.1,
                delay: 0.3,
                ease: "power2.out"
            });
        } else {
            // Close
            gsap.to(mobileMenuRef.current, {
                x: '100%',
                duration: 0.5,
                ease: "power2.in"
            });
            gsap.to(mobileLinkRefs.current, {
                opacity: 0,
                y: 10,
                duration: 0.2
            });
        }
    }, [isMenuOpen]);

    const addToRefs = (el) => {
        if (el && !mobileLinkRefs.current.includes(el)) {
            mobileLinkRefs.current.push(el);
        }
    };

    const links = [
        { name: "About", href: "#about" },
        { name: "Services", href: "#services" },
        { name: "Portfolio", href: "#portfolio" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <>
            <nav className={`fixed w-full z-50 py-8 px-8 transition-all duration-300 text-white flex justify-between items-center ${scrolled ? 'nav-scrolled' : ''}`}>
                <div className="text-2xl font-bold tracking-tighter hover-trigger flex items-center gap-2 cursor-pointer">
                    <span className="font-serif italic text-hgGold text-3xl">HG</span>
                    <span className="font-light tracking-widest text-sm uppercase opacity-80 border-l border-white/20 pl-2">Design & Constructions</span>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex gap-10 text-xs font-semibold uppercase tracking-[0.2em] text-hgMuted">
                    {links.map((link) => (
                        <a key={link.name} href={link.href} className="hover:text-hgGold transition-colors duration-300 hover-trigger relative group">
                            {link.name}
                            <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-hgGold transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <button 
                    onClick={() => setIsMenuOpen(!isMenuOpen)} 
                    className="md:hidden text-white text-2xl hover:text-hgGold transition z-50 relative"
                >
                    {isMenuOpen ? <FaTimes /> : <FaBars />}
                </button>
            </nav>

            {/* Mobile Menu Overlay */}
            <div 
                ref={mobileMenuRef}
                className="fixed inset-0 bg-hgDark z-40 flex flex-col items-center justify-center translate-x-full"
            >
                <div className="flex flex-col gap-8 text-center">
                    {links.map((link) => (
                        <a 
                            key={link.name} 
                            href={link.href} 
                            ref={addToRefs}
                            onClick={() => setIsMenuOpen(false)}
                            className="text-3xl font-serif text-white hover:text-hgGold transition opacity-0 translate-y-10"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>
                <div ref={addToRefs} className="mt-12 opacity-0 translate-y-10">
                    <a href="tel:+919661755645" className="text-hgMuted text-sm uppercase tracking-widest block mb-4">
                        +91 966-175-5645
                    </a>
                </div>
            </div>
        </>
    );
};

export default Navbar;
