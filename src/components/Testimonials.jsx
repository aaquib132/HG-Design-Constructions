import { FaQuoteRight, FaStar } from 'react-icons/fa';

const Testimonials = () => {
    const reviews = [
        { name: "Rahul Verma", location: "Patna, Bihar", text: "HG Design transformed our old house into a modern masterpiece. Their attention to detail in the interior work was exceptional." },
        { name: "Amit Kumar", location: "Commercial Project", text: "Professional team and timely delivery. The structural advice they gave saved us cost and improved stability." },
        { name: "S. N. Singh", location: "Residential Villa", text: "The elevation design is the talk of the neighborhood. Highly recommend their architectural services." },
    ];

    return (
        <section className="py-20 md:py-32 px-6 md:px-12 bg-hgDark border-t border-white/5 relative">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-5xl md:text-7xl font-bold text-white section-title tracking-tighter mb-24 text-center md:text-left">
                    CLIENT <span className="text-hgSlate font-serif italic">STORIES</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {reviews.map((review, i) => (
                        <div key={i} className="glass-card p-10 border border-white/5 relative bg-hgDark/50">
                            <FaQuoteRight className="text-4xl text-hgGold/20 absolute top-8 right-8" />
                            <div className="flex gap-1 text-hgGold mb-6 text-sm">
                                {[...Array(5)].map((_, j) => <FaStar key={j} />)}
                            </div>
                            <p className="text-hgMuted text-lg leading-relaxed mb-8 italic">"{review.text}"</p>
                            <div>
                                <h5 className="text-white font-bold">{review.name}</h5>
                                <span className="text-hgSlate text-sm uppercase tracking-wider">{review.location}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
