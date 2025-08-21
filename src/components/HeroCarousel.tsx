// "use client";

// import { useEffect, useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { motion, AnimatePresence } from "framer-motion";

// const slides = [
//   {
//     id: 1,
//     bg: "/images/bg 3.jpeg",
//     fg: "/images/fg 13.png",
//     title: "Where healthy fish begin their journey",
//     text: "Growing healthy, disease-free, and ready to bring life to your aquarium.",
//     button: "View Collection",
//      href: "/products",
//   },
//   {
//     id: 2,
//     bg: "/images/bg 5.jpg",
//     fg: "/images/fg 10.png",
//     title: "Where Nature Meets Elegance",
//     text: "From dazzling tropicals to rare beauties, each fish matures gracefully, stays calm, and is ready to bring elegance to your aquarium",
//     button: "View Collection",
//     href: "/products",
//   },
//     {
//     id: 3,
//     bg: "/images/bg 5.jpg",
//     fg: "/images/fg 11.png",
//     title: "Where Nature Meets Elegance",
//     text: "From dazzling tropicals to rare beauties, each fish matures gracefully, stays calm, and is ready to bring elegance to your aquarium",
//     button: "View Collection",
//     href: "/products",
//   },
// ];

// export default function Hero() {
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const slideTimer = setInterval(() => {
//       setIndex((prev) => (prev + 1) % slides.length);
//     }, 8000);

//     return () => {
//       clearInterval(slideTimer);
//     };
//   }, []);

//   const slide = slides[index];

//   // Animation variants
//   const bgVariants = {
//     enter: { y: "-100%", opacity: 0 },
//     center: { y: "0%", opacity: 1 },
//     exit: { y: "100%", opacity: 0 },
//   };

//   const fgVariants = {
//     enter: { y: "-100%", opacity: 0 },
//     center: { y: "0%", opacity: 1 },
//     exit: { y: "100%", opacity: 0 },
//   };

//   const textVariants = {
//     hidden: { opacity: 0, x: -40 },
//     visible: (i: number) => ({
//       opacity: 1,
//       x: 0,
//       transition: { delay: 0.5 + i * 0.2, duration: 0.8 },
//     }),
//     exit: {
//       opacity: 0,
//       x: -40,
//       transition: { duration: 0.3 },
//     },
//   };

//   return (
//     <div className="relative w-full h-screen overflow-hidden">
//       {/* Background */}
//       <AnimatePresence> {/* ✅ mode="sync" removed */}
//         <motion.div
//           key={`bg-${slide.id}`}
//           className="absolute inset-0"
//           variants={bgVariants}
//           initial="enter"
//           animate="center"
//           exit="exit"
//           transition={{ duration: 1.5, ease: "easeInOut" }}
//         >
//           <Image src={slide.bg} alt="Aquarium background" fill className="object-cover" priority />
//           <motion.div
//             className="absolute inset-0 bg-black/70"
//             initial={{ scale: 1 }}
//             animate={{ scale: 1.1 }}
//             transition={{ duration: 8, ease: "linear" }}
//           />
//         </motion.div>
//       </AnimatePresence>

//       {/* Unified Layout Container */}
//       <div className="relative z-10 flex flex-col md:flex-row items-center justify-center md:justify-between h-full px-6 md:px-12 gap-4 md:gap-8">
//         {/* Left text */}
//         <div className="text-white max-w-lg text-center md:text-left mt-20 md:mt-0">
//           <AnimatePresence mode="wait">
//             {[slide.title, slide.text, slide.button].map((item, i) => (
//               <motion.div
//                 key={`${slide.id}-${i}`}
//                 variants={textVariants}
//                 initial="hidden"
//                 animate="visible"
//                 exit="exit"
//                 custom={i}
//                 className="mb-4"
//               >
//                 {i === 0 && (
//                   <h1
//                     className="
//                       font-bold text-white
//                       leading-tight text-3xl
//                       md:leading-[54px] md:text-[49px]
//                     "
//                     style={{ fontFamily: 'Montserrat, sans-serif' }}
//                   >
//                     {item}
//                   </h1>
//                 )}
//                 {i === 1 && <p className="text-base md:text-lg mt-4 font-serif text-gray-300">{item}</p>}
//                 {i === 2 && slide.href && (
//                   <Link
//                     href={slide.href}
//                     className="inline-block px-4 md:px-6 py-2 md:py-3 bg-teal-600 rounded-lg shadow-lg font-semibold mt-4 text-sm md:text-base"
//                   >
//                     {item}
//                   </Link>
//                 )}
//               </motion.div>
//             ))}
//           </AnimatePresence>
//         </div>

//         {/* ✅ STABLE CONTAINER for Foreground Image */}
//         <div className="relative w-[400px] h-[800px] md:w-[400px] md:h-[600px]">
//           <AnimatePresence> {/* ✅ mode="sync" removed */}
//             {slide.fg && (
//               <motion.div
//                 key={`fg-${slide.id}`}
//                 className="absolute inset-0" // ✅ Position image within stable container
//                 variants={fgVariants}
//                 initial="enter"
//                 animate="center"
//                 exit="exit"
//                 transition={{ duration: 1.5, ease: "easeInOut" }}
//               >
//                 <Image
//                   src={slide.fg}
//                   alt="Aquarium foreground"
//                   width={800}
//                   height={400}
//                   className="object-contain pointer-events-none w-full h-full"
//                   priority
//                 />
//               </motion.div>
//             )}
//           </AnimatePresence>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    id: 1,
    bg: "/images/bg 3.jpeg",
    fg: "/images/fg 13.png",
    title: "Where healthy fish begin their journey",
    text: "Growing healthy, disease-free, and ready to bring life to your aquarium.",
    button: "View Collection",
    href: "/products",
  },
  {
    id: 2,
    bg: "/images/bg 5.jpg",
    fg: "/images/fg 10.png",
    title: "Where Nature Meets Elegance",
    text: "From dazzling tropicals to rare beauties, each fish matures gracefully, stays calm, and is ready to bring elegance to your aquarium",
    button: "View Collection",
    href: "/products",
  },
  {
    id: 3,
    bg: "/images/bg 5.jpg",
    fg: "/images/fg 11.png",
    title: "Where Nature Meets Elegance",
    text: "From dazzling tropicals to rare beauties, each fish matures gracefully, stays calm, and is ready to bring elegance to your aquarium",
    button: "View Collection",
    href: "/products",
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const slideTimer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 8000);

    return () => {
      clearInterval(slideTimer);
    };
  }, []);

  const slide = slides[index];

  // Animation variants
  const bgVariants = {
    enter: { y: "-100%", opacity: 0 },
    center: { y: "0%", opacity: 1 },
    exit: { y: "100%", opacity: 0 },
  };

  const fgVariants = {
    enter: { y: "-100%", opacity: 0 },
    center: { y: "0%", opacity: 1 },
    exit: { y: "100%", opacity: 0 },
  };

  // ✅ Parent variant to orchestrate children animations
  const textContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.2,
      },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.3 },
    },
  };

  // ✅ Child variant for individual text elements
  const textVariants = {
    hidden: { opacity: 0, x: -40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background */}
      <AnimatePresence>
        <motion.div
          key={`bg-${slide.id}`}
          className="absolute inset-0"
          variants={bgVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 1.5, ease: "easeInOut" }}
        >
          {/* ✅ Corrected Image prop: 'fill' instead of 'layout' */}
          <Image src={slide.bg} alt="Aquarium background" fill className="object-cover" priority />
          <motion.div
            className="absolute inset-0 bg-black/70"
            initial={{ scale: 1 }}
            animate={{ scale: 1.1 }}
            transition={{ duration: 8, ease: "linear" }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Unified Layout Container */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center md:justify-between h-full px-6 md:px-12 gap-4 md:gap-8">
        {/* Left text */}
        <div className="text-white max-w-lg text-center md:text-left mt-20 md:mt-0">
          {/* ✅ Corrected AnimatePresence structure */}
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.id} // Key is on the single parent
              variants={textContainerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <motion.h1
                variants={textVariants}
                className="font-bold text-white leading-tight text-3xl md:leading-[54px] md:text-[49px] mb-4"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                {slide.title}
              </motion.h1>
              <motion.p
                variants={textVariants}
                className="text-base md:text-lg mt-4 font-serif text-gray-300 mb-4"
              >
                {slide.text}
              </motion.p>
              {slide.href && (
                <motion.div variants={textVariants}>
                  <Link
                    href={slide.href}
                    className="inline-block px-4 md:px-6 py-2 md:py-3 bg-teal-600 rounded-lg shadow-lg font-semibold mt-4 text-sm md:text-base"
                  >
                    {slide.button}
                  </Link>
                </motion.div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Foreground Image */}
        <div className="relative w-[400px] h-[800px] md:w-[400px] md:h-[600px]">
          <AnimatePresence>
            {slide.fg && (
              <motion.div
                key={`fg-${slide.id}`}
                className="absolute inset-0"
                variants={fgVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 1.5, ease: "easeInOut" }}
              >
                <Image
                  src={slide.fg}
                  alt="Aquarium foreground"
                  width={800}
                  height={400}
                  className="object-contain pointer-events-none w-full h-full"
                  priority
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}