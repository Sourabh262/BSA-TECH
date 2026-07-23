import React, { useState, useEffect, useRef } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import api from '../../utils/api';

const hardcodedTestimonials = [
  {
    id: 'h1',
    name: 'Ajay Clarin',
    role: 'Client',
    content: 'BSA tech is a professional company with a team of dedicated developers the output is awesome commendable work congrats and keep it up.',
    image: '/Dinesh Negi.webp',
  },
  {
    id: 'h2',
    name: 'Fr. Anil Antony',
    role: 'Client',
    content: 'BSA team does more than we ask or say , their customer services is excellent and fast and their knowledge woth the ability of resolving the issue is commendable. I always recomment customer to opt swanky team for the IT services.I am very happy with my dynamic website and the support of that.',
    image: '/Fr.Anil.webp',
  },
  {
    id: 'h3',
    name: 'Fr. Ashok Alexander',
    role: 'Client',
    content: 'I most strongly recommend the services of the BSA team for its school software. Swanky team is not only thorough but also easy to work with, and always willing to take the time to discuss my concerns and respond to questions.',
    image: '/female-anon.webp',
  }
];

const Testimonials = () => {
  const [dynamicTestimonials, setDynamicTestimonials] = useState<any[]>([]);
  const [isInteracting, setIsInteracting] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const { data } = await api.get('/testimonials');
        const formatted = data.map((t: any) => ({
          id: t._id,
          name: t.name,
          role: 'Client',
          content: t.description,
          image: t.image
        }));
        setDynamicTestimonials(formatted);
      } catch (error) {
        console.error('Failed to fetch testimonials', error);
      }
    };
    fetchTestimonials();
  }, []);

  const allTestimonials = [...hardcodedTestimonials, ...dynamicTestimonials];

  // Auto-scroll logic
  useEffect(() => {
    if (isInteracting) return;
    
    const interval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          // Reset to start
          scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          // Scroll right by one card approx
          scrollRef.current.scrollBy({ left: 350, behavior: 'smooth' });
        }
      }
    }, 3000); // Shift every 3 seconds

    return () => clearInterval(interval);
  }, [isInteracting, allTestimonials.length]);

  const scrollLeft = () => {
    setIsInteracting(true);
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -350, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    setIsInteracting(true);
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 350, behavior: 'smooth' });
    }
  };

  if (allTestimonials.length === 0) return null;

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="max-w-2xl">
            <span className="text-primary-600 font-semibold tracking-wider uppercase text-sm mb-4 block">Client Success Stories</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">What Our Clients Say</h2>
            <p className="text-lg text-slate-600">
              Don't just take our word for it. Read what our successful partners have to say about working with BSA Tech.
            </p>
          </div>
          
          {/* Manual Controls */}
          <div className="flex gap-4 mt-6 md:mt-0">
            <button 
              onClick={scrollLeft}
              className="w-12 h-12 flex items-center justify-center rounded-full bg-white text-slate-600 hover:bg-primary-600 hover:text-white transition-colors shadow-md border border-slate-100"
              aria-label="Previous Testimonial"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={scrollRight}
              className="w-12 h-12 flex items-center justify-center rounded-full bg-white text-slate-600 hover:bg-primary-600 hover:text-white transition-colors shadow-md border border-slate-100"
              aria-label="Next Testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Scrolling Container */}
        <div 
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-8 pt-4 px-4 -mx-4"
          ref={scrollRef}
          onMouseEnter={() => setIsInteracting(true)}
          onMouseLeave={() => setIsInteracting(false)}
          onTouchStart={() => setIsInteracting(true)}
          onClick={() => setIsInteracting(true)}
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {allTestimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="snap-center shrink-0 w-[300px] md:w-[400px] bg-white rounded-2xl shadow-lg p-8 border border-slate-100 flex flex-col relative group transition-transform hover:-translate-y-2 cursor-pointer"
            >
              <Quote className="absolute top-6 right-6 text-primary-50 w-12 h-12 rotate-180 transition-transform group-hover:scale-110" />
              
              <div className="flex items-center gap-4 mb-6 relative z-10">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-16 h-16 rounded-full object-cover border-2 border-primary-100 shadow-sm" 
                />
                <div>
                  <h4 className="text-lg font-bold text-slate-800">{testimonial.name}</h4>
                  <p className="text-primary-600 text-sm font-medium">{testimonial.role}</p>
                </div>
              </div>
              
              <div className="flex gap-1 mb-4 relative z-10">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              <p className="text-slate-600 italic flex-1 relative z-10 leading-relaxed text-sm md:text-base">
                "{testimonial.content}"
              </p>
            </div>
          ))}
        </div>
        
        {/* Helper text */}
        <p className="text-center text-slate-400 text-sm mt-4 md:hidden">
          Swipe to see more
        </p>

      </div>
      
      {/* Hide scrollbar CSS */}
      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
