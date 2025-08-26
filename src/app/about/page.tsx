import Image from 'next/image';
import { Facebook, Instagram } from 'lucide-react'; 
import { FaTiktok } from 'react-icons/fa'; // Added TikTok icon

const AboutUsPage = () => { 
  return (
    <div className="bg-[#0A0A10] text-gray-200 min-h-screen font-serif">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-10">
        
        {/* About Us */}
        <section className="flex flex-col lg:flex-row items-center gap-8 border-b border-gray-700 pb-8 pt-8">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-5xl font-bold text-white mb-4">Who We Are</h1>
            <p className="text-lg text-gray-300 mb-4 lg:text-justify">
              Lumii Aquarium is built on a passion for freshwater ornamental fish and a belief that aquariums can bring life, 
              calmness, and beauty into any space. From the beginning, our focus has been on quality—raising fish that are vibrant, 
              healthy, and naturally balanced. Each fish we provide reflects our values of responsibility, care, and professionalism,
               making Lumii a trusted partner for aquarists and importers around the world. We see fish not as products but as living 
               expressions of nature, carrying with them the elegance of water and life.
            </p>
          </div>
          <Image
            src="/images/5.jpg"
            alt="Company Team"
            width={600}
            height={400}
            className="rounded-xl shadow-lg object-cover"
            priority
          />
        </section>

        {/* Our Mission */}
        <section className="flex flex-col-reverse lg:flex-row items-center gap-8 border-b border-gray-700 pb-8">
          <div className="flex-1">
            <Image
              src="/images/sample-14.jpg"
              alt="Our Mission"
              width={600}
              height={400}
              className="rounded-xl shadow-lg object-cover"
              priority
            />
          </div>
          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-4xl font-bold text-white mb-4">
              Our Mission
            </h2>
            <p className="text-lg text-gray-300 mb-4 lg:text-justify">
            At Lumii, our mission is to share this elegance with the world by ensuring every fish is raised to the highest standards 
            of health and quality. We do not send aged or overgrown fish; instead, we raise them in natural freshwater with the right 
            nutrition and care so they reach maturity within a healthy timeframe. Our goal is for customers to receive fish that are 
            young, strong, and ready to thrive. This commitment extends beyond business—it is a promise of trust, transparency, and 
            consistency in everything we deliver.
            </p>
          </div>
        </section>

        {/* Our Story */}
        <section className="flex flex-col lg:flex-row items-center gap-8 border-b border-gray-700 pb-12">
          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-4xl font-bold text-white mb-4">Our Story</h2>
            <p className="text-lg text-gray-300 mb-4 lg:text-justify">
            What began as a single stall tank for personal enjoyment slowly grew into something far greater. 
            As our passion deepened, one tank became many, and soon the idea of export took root. From the very start, 
            we challenged ourselves with the most delicate species—Discus fish—and through that experience we learned the realities 
            of breeding: the risks, the diseases, and the importance of water quality for every species. Each difficulty became 
            a lesson, shaping our understanding and strengthening our resolve.          
            </p>
            <p className="text-lg text-gray-300 mb-4 lg:text-justify">
              With every step, we have grown stronger, turning our early challenges into expertise and building Lumii into the company 
              it is today. What started as a small hobby has now become a journey of care, professionalism, and a dedication to sharing 
              the beauty of freshwater ornamental fish with the world.
            </p>
          </div>
          <div className="flex-1">
            <Image
              src="/images/betta-fish.jpg"
              alt="Our Story"
              width={600}
              height={400}
              className="rounded-xl shadow-lg object-cover"
              priority
            />
          </div>
        </section>

        {/* Contact Us */}
        <section className="text-center space-y-6">
          <h2 className="text-4xl font-bold text-white">Follow Us</h2>
          <p className="text-lg text-gray-400">We’d love to connect with you! Reach out through any of these platforms:</p>
          <div className="flex justify-center gap-6 mt-3">
            <a href="https://www.facebook.com/share/1DH9zpprdc/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition">
              <Facebook size={32} />
            </a>
            <a href="https://www.instagram.com/lumii__aquarium_/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition">
              <Instagram size={32} />
            </a>
            <a href="https://www.tiktok.com/@lumii__aquarium_?_t=ZS-8z1vQaISUr4&_r=1" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition">
              <FaTiktok size={32} />
            </a>
          </div>
        </section>

      </div>
    </div>
  );
};

export default AboutUsPage;

// pages/about.tsx
// "use client";

// import React from 'react';
// import { useState, useEffect } from 'react';
// import { motion, Variants } from 'framer-motion';



// const AboutPage: React.FC = () => {
//   const [ setLoading] = useState(true);

//     useEffect(() => {
//       const timer = setTimeout(() => setLoading(false), 1500);
//       return () => clearTimeout(timer);
//     }, []);


//   const sectionVariants: Variants  = {
//     hidden: { opacity: 0, y: 50 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.8,
//         ease: 'easeOut',
//       },
//     },
//   };

//   return (
//     <>
//     <div className="bg-dark text-gray-200 min-h-screen font-serif transition-opacity duration-1000 opacity-100">


//       <main>

//         <motion.section
//           className="relative py-32 md:py-48 text-white bg-cover bg-center"
//           style={{ backgroundImage: "url('/images/sample-2.jpg')" }}
//           // Use 'animate' instead of 'whileInView' for elements visible on load
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 1 }}
//           // We no longer need the 'viewport' prop here
//         >
//           <div className="absolute inset-0 bg-black opacity-50"></div>
//           <div className="container mx-auto px-6 lg:px-8 relative z-10">
//             <motion.h2
//               className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4"
//               // Also change this to 'animate'
//               initial={{ opacity: 0, y: -30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.2 }}
//             >
//               Specialists In Custom Fish Tanks, Luxury Aquarium Design, Installation And Maintenance.
//             </motion.h2>
//             <motion.p
//               className="text-lg md:text-xl max-w-3xl mb-8"
//               // Also change this to 'animate'
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.4 }}
//             >
//               AquaPro prides itself on its depth of knowledge, quality of service and a tailored approach to luxury aquarium design. We work closely with interior designers, architects and engineers to provide the highest standard in design.
//             </motion.p>
//             <motion.a
//               href="#"
//               className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-full transition-all duration-300 hover:bg-white hover:text-black"
//               // And change this one to 'animate'
//               initial={{ opacity: 0, scale: 0.8 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.5, delay: 0.6 }}
//             >
//               VIEW OUR PORTFOLIO
//             </motion.a>
//           </div>
//         </motion.section>

//         {/* Aquarium Design, Manufacture, Installation Section */}
//         <motion.section
//           className="py-20"
//           // 2. CORRECT the prop name from 'Variants' to 'variants'
//           variants={sectionVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//         >
//           <div className="container mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
//             <motion.div
//               initial={{ opacity: 0, x: -50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.8, delay: 0.2 }}
//             >
//               <img src="/images/sample-10.jpg" alt="Luxury Aquarium in a living room" className="rounded-lg shadow-2xl" />
//             </motion.div>
//             <motion.div
//               initial={{ opacity: 0, x: 50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.8, delay: 0.4 }}
//             >
//               <h3 className="text-3xl lg:text-4xl font-bold text-white-800 mb-4">Our Mission: Helping Millions of Organizations Grow Better</h3>
//               <p className="text-white-600 mb-6">
//                 We believe not just in growing bigger, but in growing better. And growing better means aligning the success of your own business with the success of your customers, win-win!
//              </p>
//               <a href="#" className="bg-teal-500 text-white font-bold py-3 px-6 rounded-md transition-transform duration-300 hover:bg-teal-600">
//                 MORE INFO
//               </a>
//             </motion.div>
//                         <motion.div
//               initial={{ opacity: 0, x: 50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.8, delay: 0.4 }}
//             >
//               <h3 className="text-3xl lg:text-4xl font-bold text-white-800 mb-4">Our Story</h3>
//               <p className="text-white-600 mb-6">
//                 The AquaPro have created some of the most stylish and luxury bespoke built aquariums and fish tanks in the country. We draw on over 25 years of expertise in designing, manufacturing and installing aquariums.
//               </p>
//               <a href="#" className="bg-teal-500 text-white font-bold py-3 px-6 rounded-md transition-transform duration-300 hover:bg-teal-600">
//                 MORE INFO
//               </a>
//             </motion.div>
//                         <motion.div
//               initial={{ opacity: 0, x: -50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.8, delay: 0.2 }}
//             >
//               <img src="/images/sample-10.jpg" alt="Luxury Aquarium in a living room" className="rounded-lg shadow-2xl" />
//             </motion.div>
//           </div>
//         </motion.section>
//       </main>

//     </div>
//     </>
//   );
// };

// export default AboutPage;