import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="pt-24 pb-16 bg-white min-h-screen">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">Who We Are !</h1>
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="prose prose-lg max-w-none text-slate-600 space-y-6 text-justify">
          <p>
            Ohhh Great ! Clapping Sounds and Wishes and Congratulations for achieving the Monthly or Quarterly Target, had Parties and relaxing and then Instantly, on next month, Ohhh, Gosh ! New Target for this Month and this is, Doubles of the last Month ! We are working in a Set Traditions and Pattern but noone thinks, what we are doing ! We are walking or running behind the Set Path which is following since many years, No Creativity, No Development of the Mind and No New Inventions.
          </p>

          <p>
            With this Thought, in a year 2013, we quitted and with our savings, we planned to do a 'BIZZINESS' of 'WHAT', we dont know ! We started with a Corporate Training and picked a Good College in North of around 600 Students and we started a Journey. From there, one director of the College left a 'कीड़ा' in our Mind of Making the Website and we started exploring and diverted towards the Website Designing and Development and in Class B Cities, this is something New for everyone and Automation is at their starting phase. We set up for this and started working on the IT Sector with Web Development and done well but we have to learn also that Running 'BIZZINESS' is not so easy and we 'Fell Down'.
          </p>

          <p>
            Thought again, some left for Job and some are willing to give a 'Hit' again and take Risk so with our left resources, we stood up and again started in 'Year 2015' in the same IT Sector and formed 'Scintillate Consultancy Service' and focused on a New Creative Products by keeping aside of our past fault and with our 'Attitude' of 'Not Giving Up', we started floating in the Market with our New Brand Name - <strong>BSA TECH</strong>.
          </p>

          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 my-10 shadow-sm text-center">
            <h3 className="text-2xl font-bold text-emerald-700 mb-4">Xcellence in Services</h3>
            <p className="text-lg italic text-slate-700 mb-6">
              "We Never compromises on our Services despite of whatever it is, and that, what we are following Till Date ! And, therefore, in our short span of time, we have achieved a good Portfolios with their Belief and Trust on us as being their 'DIGITAL PARTNER'."
            </p>
            <div className="text-xl font-bold text-slate-800 mb-2">Our Motto:</div>
            <p className="text-primary-600 font-semibold mb-4">'You Dream and We Make That Dream Happen in the Digital World'</p>
            <div className="text-xl font-bold text-slate-800 mb-2">Our Mission:</div>
            <p className="text-blue-600 font-semibold">'Digital Solutions for your Business Needs !'</p>
          </div>

          <p>
            We keep experimenting on our Products to give you the best in the Market and keep researching for the 'New Kicks' We are catering Niche Markets but with the most prominent services. We have the Limited Products and Services, which you need to visit it for the better understanding.
          </p>
          
          <h3 className="text-3xl font-bold text-slate-800 text-center mt-12 mb-8">Our Journey Says</h3>
          
          <div className="my-10 flex justify-center w-full">
            <img src="/timeline.webp" alt="BSA TECH Journey Timeline" className="w-full max-w-3xl rounded-xl shadow-lg border border-slate-200" />
          </div>

          <p>
            BSA TECH doesn't derived by a single person, its derived by the <strong>BSA TEAM</strong> who works with full Freedom with their set of minds, creativity and their energy. Our Ultimate Goal is to provide the Best Service to our Clients and that we are delivering.
          </p>

          <p>
            We are happy in working with our defined Team and by their Efforts, we are keep growing to our best and added the Overseas Projects and Government Projects in our kitty in this small span of time and got an Appreciation against our Product SaĝoKomm - An Integrated School Software on SaaS - with Mobile App, Inbuild Automatic SMS Notification and CBSE, ICSE and State Board Digital Marksheet.
          </p>

          <h2 className="text-3xl font-black text-slate-900 text-center mt-12 bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-blue-600">
            BSA TEAM !
          </h2>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
