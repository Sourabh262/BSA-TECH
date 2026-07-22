import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'CEO, EduTech Global',
    content: 'BSA Tech completely transformed our school management process. The ERP they built is robust, fast, and extremely user-friendly. Their team was highly professional and delivered ahead of schedule.',
    rating: 5,
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Director, HealthPlus',
    content: 'The custom hospital management application developed by BSA Tech has reduced our administrative overhead by 40%. The UI is beautifully designed and exactly what we needed.',
    rating: 5,
    avatar: 'https://i.pravatar.cc/150?u=a04258a2462d826712d',
  },
  {
    id: 3,
    name: 'Emma Williams',
    role: 'Founder, RetailPro',
    content: 'Working with them was a breeze. They understood our complex e-commerce requirements and built a scalable platform that handled our Black Friday traffic perfectly.',
    rating: 5,
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704d',
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 -translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary-600 font-semibold tracking-wider uppercase text-sm mb-4 block">Client Success Stories</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Trusted By Industry Leaders</h2>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-5xl mx-auto"
        >
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            pagination={{ clickable: true, bulletClass: 'swiper-pagination-bullet !bg-slate-300', bulletActiveClass: 'swiper-pagination-bullet-active !bg-primary-600' }}
            className="pb-16"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 h-full flex flex-col relative group hover:bg-white hover:shadow-xl transition-all duration-300">
                  <Quote className="absolute top-6 right-6 text-slate-200 w-12 h-12 transform group-hover:-translate-y-1 group-hover:scale-110 transition-transform" />
                  
                  <div className="flex text-yellow-400 mb-6 relative z-10">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={18} fill="currentColor" />
                    ))}
                  </div>
                  
                  <p className="text-slate-600 italic mb-8 flex-grow relative z-10">
                    "{testimonial.content}"
                  </p>
                  
                  <div className="flex items-center gap-4 mt-auto">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name} 
                      className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-md"
                    />
                    <div>
                      <h4 className="font-bold text-slate-900">{testimonial.name}</h4>
                      <p className="text-sm text-slate-500">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
