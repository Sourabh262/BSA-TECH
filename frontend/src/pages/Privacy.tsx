import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, FileText, CheckCircle, Database } from 'lucide-react';

const Privacy = () => {
  return (
    <div className="pt-8 pb-20">
      {/* Header Section */}
      <div className="bg-primary-900 text-white py-16 mb-12">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-center mb-6"
          >
            <div className="bg-primary-800/50 p-4 rounded-full">
              <Shield size={48} className="text-primary-300" />
            </div>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Privacy Policy
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-primary-100 leading-relaxed max-w-2xl mx-auto"
          >
            Sagokomm is owned by bsatech.in which is a School ERP portal endeavoring constantly to provide with services to the schools. We are strongly committed to individual's right to privacy, hence we have drawn out a privacy statement with regard to the information we collect from individuals.
          </motion.p>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-8 md:p-12">
          
          <div className="space-y-10">
            {/* Section 1 */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary-100 text-primary-700 text-sm">1</span>
                Personal information from members
              </h2>
              <p className="text-slate-600 leading-relaxed ml-11">
                The information collected from our members and guests who apply to utilize the services offered by our group-website includes, but may not be limited to, email address, first name, last name, a user-specified password, mailing address, zip code and telephone number.
              </p>
            </motion.div>

            {/* Section 2 */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary-100 text-primary-700 text-sm">2</span>
                Credit/Debit card information from members
              </h2>
              <p className="text-slate-600 leading-relaxed ml-11">
                For various payments of selected services, a credit or debit card account is established with us, for which we collect additional information about billing address, credit card or debit card number, credit card and debit card expiration date and tracking information from checks or money orders.
              </p>
            </motion.div>

            {/* Section 3 */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary-100 text-primary-700 text-sm">3</span>
                Information collected from Web Portal
              </h2>
              <p className="text-slate-600 leading-relaxed ml-11">
                We collect information like your name, email ID, gender, photos, that too use by you only on your Mobile App at your sole discretion to be used for your Sagokomm Mobile App. None of this information is ever shared with, or sold to any third parties for marketing purposes, without your consent.
              </p>
            </motion.div>

            {/* Section 4 */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary-100 text-primary-700 text-sm">4</span>
                Utilization of the information
              </h2>
              <p className="text-slate-600 leading-relaxed ml-11">
                Sagokomm collects information from its registered users or their clients primarily to ensure that we are able to fulfill their requirements and to deliver personal attention. The information collected from our registered users or clients will not be shared with any individual or organization without their approval. We do not sell or rent or transfer or loan the collected information to any third party. This information will be used by only BSA TECH or its group website.
              </p>
            </motion.div>

            {/* Section 5 */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary-100 text-primary-700 text-sm">5</span>
                Information Sharing and Security
              </h2>
              <div className="text-slate-600 leading-relaxed ml-11 space-y-4">
                <p>We share the information of our registered users with the third party without any prior consent of the User in the below circumstances :-</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>When it is requested or required by law or by any court or governmental agency or authority to disclose, for the purpose of verification of identity, or for the prevention, detection, investigation including cyber incidents, or for prosecution and punishment of offences. Cookies.</li>
                  <li>When it is requested or required by the higher level authority of the bsa tech or its group website authorities for the purpose of processing personal information on its behalf and this can be based on our instructions and in compliance with this Privacy Policy and any other appropriate confidentiality and security measures.</li>
                </ul>
              </div>
            </motion.div>

            {/* Section 6 */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary-100 text-primary-700 text-sm">6</span>
                Payment from Visitors
              </h2>
              <p className="text-slate-600 leading-relaxed ml-11">
                Any member visiting the website do not need to pay. Registration, browsing on the site and viewing of profiles is free. However, for some features, payment is required to enjoy certain privileges.
              </p>
            </motion.div>

            {/* Section 7 */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary-100 text-primary-700 text-sm">7</span>
                Alteration, accessing and updating the personal information
              </h2>
              <p className="text-slate-600 leading-relaxed ml-11">
                BSA TECH and its group website makes good efforts to provide you, as and when requested, with the access to your personal information. It shall be ensured that the incorrect data or information be corrected or amended as feasible. Any illegal data or explicit content will be deleted or removed or altered. The deleted data and photos will be taken for further action in the jurisdiction of Court of New Delhi. We take appropriate security measures to protect against unauthorized access to or unauthorized alteration, disclosure or destruction of data. These include internal reviews of our data collection, storage and processing practices and security measures, including appropriate encryption and physical security measures to guard against unauthorized access to systems where we store personal data.
              </p>
            </motion.div>

            {/* Section 8 */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary-100 text-primary-700 text-sm">8</span>
                Grievance & Complaints
              </h2>
              <p className="text-slate-600 leading-relaxed ml-11">
                Any complaints, abuse or concerns related to the content or photos or comment or breach of the terms shall be immediately informed to the designated Grievance Officer as mentioned below via writing or through email signed electronically to <a href="mailto:ayush.gupta@swankinfytech.com" className="text-primary-600 hover:underline">ayush.gupta@swankinfytech.com</a>.
              </p>
            </motion.div>

            {/* Section 9 */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary-100 text-primary-700 text-sm">9</span>
                Email and SMS Policy
              </h2>
              <p className="text-slate-600 leading-relaxed ml-11">
                We use Email and SMS to help you to update the details from the school on Sagokomm.
              </p>
            </motion.div>

            {/* Section 10 */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary-100 text-primary-700 text-sm">10</span>
                Notices and Updates
              </h2>
              <p className="text-slate-600 leading-relaxed ml-11">
                We may change this Privacy Policy from time to time based on feedback from clients or as a result of a change of policy in our company.
              </p>
            </motion.div>

            {/* Section 11 */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary-100 text-primary-700 text-sm">11</span>
                To contact Sagokomm
              </h2>
              <p className="text-slate-600 leading-relaxed ml-11">
                For any questions, queries or dealings with the website, please write to us at <a href="mailto:bsatech20@gmail.com" className="text-primary-600 hover:underline font-medium">bsatech20@gmail.com</a>
              </p>
            </motion.div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
