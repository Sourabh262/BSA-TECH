import React, { useState, useEffect } from 'react';
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
  const [activeIndex, setActiveIndex] = useState(0);

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

  const next = () => {
    setActiveIndex((current) => (current + 1) % allTestimonials.length);
  };

  const prev = () => {
    setActiveIndex((current) => (current - 1 + allTestimonials.length) % allTestimonials.length);
  };

  if (allTestimonials.length === 0) return null;

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 -skew-x-12 transform origin-top-right"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-6 tracking-tight">What Our Clients Say</h2>
          <p className="text-lg text-slate-600">
            Don't just take our word for it. Read what our successful partners have to say about working with BSA Tech.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-slate-100">
            <Quote className="absolute top-8 right-8 text-primary-100 w-24 h-24 rotate-180 opacity-50" />
            
            <div className="relative z-10 grid md:grid-cols-5 gap-8 items-center">
              <div className="md:col-span-2 flex justify-center">
                <div className="relative w-48 h-48 md:w-64 md:h-64">
                  <div className="absolute inset-0 bg-primary-100 rounded-full blur-2xl opacity-50 transform translate-x-4 translate-y-4"></div>
                  <img 
                    src={allTestimonials[activeIndex].image} 
                    alt={allTestimonials[activeIndex].name}
                    className="relative w-full h-full object-cover rounded-full border-4 border-white shadow-lg"
                  />
                </div>
              </div>
              
              <div className="md:col-span-3 text-center md:text-left">
                <div className="flex justify-center md:justify-start gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <p className="text-xl md:text-2xl text-slate-700 italic leading-relaxed mb-8">
                  "{allTestimonials[activeIndex].content}"
                </p>
                
                <div>
                  <h4 className="text-xl font-bold text-slate-800">{allTestimonials[activeIndex].name}</h4>
                  <p className="text-primary-600 font-medium">{allTestimonials[activeIndex].role}</p>
                </div>
              </div>
            </div>

            <div className="flex justify-center md:justify-end gap-4 mt-8 md:mt-0 md:absolute md:bottom-12 md:right-12">
              <button 
                onClick={prev}
                className="w-12 h-12 flex items-center justify-center rounded-full bg-slate-50 text-slate-600 hover:bg-primary-600 hover:text-white transition-colors shadow-sm"
              >
                <ChevronLeft size={24} />
              </button>
              <button 
                onClick={next}
                className="w-12 h-12 flex items-center justify-center rounded-full bg-slate-50 text-slate-600 hover:bg-primary-600 hover:text-white transition-colors shadow-sm"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {allTestimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === activeIndex ? 'bg-primary-600' : 'bg-slate-300'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
