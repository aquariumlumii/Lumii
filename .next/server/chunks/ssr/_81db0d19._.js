module.exports = {

"[project]/src/components/HeroCarousel.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

// components/Carousel.tsx
// 'use client';
// import { useState, useEffect } from 'react';
// import Image from 'next/image';
// // Define the structure for each slide's data
// const slides = [
//   {
//     background: '/images/bg 1.jpg',
//     foreground: '/images/fg 1.png', // Purple fish
//     content: [
//       {
//         title: 'Different aquariums for different ideas',
//         description: 'We have built our reputation on our obsessive attention to detail, passion for aquariums and innovative design.',
//         image: '/images/fg 1.png',
//         buttonText: 'READ MORE',
//       },
//       {
//         title: 'Fishes, corals, and more',
//         description: 'If you are interested in a bespoke aquarium, no matter the size, we are here to turn your dream into reality.',
//         buttonText: 'CONTACT DETAILS',
//         isVideo: true,
//       },
//     ],
//   },
//   {
//     background: '/images/bg 2.jpg',
//     foreground: '/images/fg 2.png', // Blue fish
//     content: [
//       {
//         title: 'Looking for aquarium specialists?',
//         description: 'We have built our reputation on our obsessive attention to detail, passion for aquariums and innovative design.',
//         image: '/images/fg 2.png',
//         buttonText: 'READ MORE',
//       },
//       {
//         title: 'Different aquariums for different ideas',
//         description: 'If you are interested in a bespoke aquarium, no matter the size, we are here to turn your dream into reality.',
//         buttonText: 'CONTACT DETAILS',
//         isVideo: true,
//       },
//     ],
//   },
// ];
// const Carousel = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [isAnimating, setIsAnimating] = useState(false);
//   // Effect to handle the automated slide transition
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIsAnimating(true); // Start animation: fades out content
//       const nextSlide = currentSlide === slides.length - 1 ? 0 : currentSlide + 1;
//       // Wait for transitions to be smooth
//       setTimeout(() => {
//         setCurrentSlide(nextSlide);
//         setIsAnimating(false); // End animation: fades in new content
//       }, 1500); // Duration should match the foreground image transition
//     }, 9000); // Total time per slide
//     return () => clearInterval(interval);
//   }, [currentSlide]);
//   return (
//     <div className="relative w-full h-screen overflow-hidden">
//       {/* Background Images with Zoom Effect */}
//       {slides.map((slide, index) => (
//         <Image
//           key={`bg-${index}`}
//           src={slide.background}
//           alt="Aquarium background"
//           layout="fill"
//           objectFit="cover"
//           className={`absolute inset-0 transition-all ease-in-out ${
//             index === currentSlide
//               ? 'opacity-100 scale-110 duration-[9000ms]' // Slow zoom-in
//               : 'opacity-0 scale-100 duration-[1500ms]' // Fast fade-out
//           }`}
//         />
//       ))}
//       {/* Dark Overlay on Background */}
//       <div className="absolute inset-0 bg-black/40"></div>
//       {/* Foreground Images with Horizontal Slide */}
//       {slides.map((slide, index) => {
//         let position = 'translate-x-full'; // Default to off-screen right
//         if (index === currentSlide) {
//           position = 'translate-x-0'; // Active slide in center
//         } else if (index === (currentSlide - 1 + slides.length) % slides.length) {
//           position = '-translate-x-full'; // Previous slide, now off-screen left
//         }
//         return (
//           <div
//             key={`fg-${index}`}
//             className={`absolute inset-0 transition-all duration-[1500ms] ease-in-out ${position} ${
//               index === currentSlide ? 'opacity-100' : 'opacity-0'
//             }`}
//           >
//             <Image
//               src={slide.foreground}
//               alt="Betta fish"
//               layout="fill"
//               objectFit="contain"
//               objectPosition="center"
//             />
//           </div>
//         );
//       })}
//       {/* Left-side Static Content */}
//       <div className="absolute top-0 left-0 h-full w-3/5 flex items-center p-8 md:p-16 lg:p-24 z-10">
//         <div className="w-full text-white">
//           <h1 className="text-4xl md:text-6xl font-bold leading-tight">
//             Aquarium Installation and Maintenance
//           </h1>
//           <p className="mt-4 text-lg md:text-xl">
//             Fastest and easiest way to cycle your new aquarium.
//           </p>
//           <button className="mt-8 px-8 py-3 bg-teal-500 text-white font-semibold rounded hover:bg-teal-600 transition-colors">
//             CONTACT US TODAY!
//           </button>
//         </div>
//       </div>
//       {/* Right-side Content Overlay with Simple Fade */}
//       <div className="absolute top-0 right-0 h-full w-2/5 bg-gray-100/95 flex items-center justify-center p-16 z-10">
//         <div className="w-full space-y-6">
//           {slides[currentSlide].content.map((item, index) => (
//             <div
//               key={index}
//               // Simple fade transition controlled by the isAnimating state
//               className={`transition-opacity duration-500 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}
//             >
//               <div className="flex items-start">
//                 {item.image && (
//                   <div className="w-1/3 mr-6">
//                     <Image src={item.image} alt={item.title} width={150} height={100} objectFit="contain" />
//                   </div>
//                 )}
//                 <div className="flex-1">
//                   <h3 className="font-bold text-xl mb-2 text-gray-800">{item.title}</h3>
//                   <p className="text-gray-600 mb-4">{item.description}</p>
//                   <button className="px-5 py-2 bg-teal-500 text-white text-sm font-semibold rounded hover:bg-teal-600 transition-colors">
//                     {item.buttonText}
//                   </button>
//                 </div>
//                 {item.isVideo && !item.image && (
//                   <div className="w-1/3 h-24 bg-teal-500/20 flex items-center justify-center rounded-lg ml-6">
//                      <div className="w-12 h-12 rounded-full bg-teal-500/50 flex items-center justify-center">
//                         <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-white border-b-8 border-b-transparent ml-1"></div>
//                     </div>
//                   </div>
//                 )}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };
// export default Carousel;
// HeroCarousal.tsx
// HeroCarousal.tsx
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$facebook$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Facebook$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/facebook.js [app-ssr] (ecmascript) <export default as Facebook>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$instagram$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Instagram$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/instagram.js [app-ssr] (ecmascript) <export default as Instagram>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$twitter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Twitter$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/twitter.js [app-ssr] (ecmascript) <export default as Twitter>");
'use client';
;
;
;
;
const slides = [
    {
        id: 1,
        background: '/images/bg 1.jpg',
        foreground: '/images/fg 1.png',
        leftContent: {
            title: 'Aquarium Installation and Maintenance',
            subtitle: 'Fastest and easiest way to cycle your new aquarium.',
            buttonText: 'CONTACT US TODAY!'
        },
        rightContent: [
            {
                type: 'specialists',
                title: 'Looking for aquarium specialists?',
                description: 'We have built our reputation on our obsessive attention to detail...',
                image: '/images/fg 1.png',
                buttonText: 'READ MORE'
            },
            {
                type: 'ideas',
                title: 'Different aquariums for different ideas',
                description: 'If you are interested in a bespoke aquarium, no matter the size...',
                buttonText: 'CONTACT DETAILS'
            },
            {
                type: 'video'
            }
        ]
    },
    {
        id: 2,
        background: '/images/bg 2.jpg',
        foreground: '/images/fg 2.png',
        leftContent: {
            title: 'Custom Bespoke Aquascaping',
            subtitle: 'Bringing the beauty of nature into your home or office.',
            buttonText: 'EXPLORE DESIGNS'
        },
        rightContent: [
            {
                type: 'specialists',
                title: 'Freshwater & Saltwater Systems',
                description: 'Expertise in both vibrant freshwater and complex marine ecosystems.',
                image: '/images/fg 2.png',
                buttonText: 'LEARN MORE'
            },
            {
                type: 'ideas',
                title: 'Scheduled Maintenance Plans',
                description: 'Keep your aquarium pristine with our reliable service plans.',
                buttonText: 'VIEW PLANS'
            },
            {
                type: 'video'
            }
        ]
    }
];
const Carousel = ()=>{
    const [currentSlide, setCurrentSlide] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isAnimatingOut, setIsAnimatingOut] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [hasLoaded, setHasLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showContent, setShowContent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setHasLoaded(true);
        // show first content only after initial image transition
        const firstTimer = setTimeout(()=>{
            setShowContent(true);
        }, 1500);
        const interval = setInterval(()=>{
            setIsAnimatingOut(true);
            setShowContent(false); // hide content during slide transition
            setTimeout(()=>{
                setCurrentSlide((prev)=>prev === slides.length - 1 ? 0 : prev + 1);
                setIsAnimatingOut(false);
                // wait for bg/fg transition to finish, then show content
                setTimeout(()=>{
                    setShowContent(true);
                }, 1500);
            }, 1500);
        }, 9000);
        return ()=>{
            clearTimeout(firstTimer);
            clearInterval(interval);
        };
    }, []);
    const slide = slides[currentSlide];
    const getRightContentAnimationClass = (isExiting)=>{
        if (!showContent) return 'opacity-0';
        return isExiting ? 'animate-fadeOut' : 'opacity-0 animate-fadeInUp';
    };
    const getLeftContentAnimationClass = (isExiting)=>{
        if (!showContent) return 'opacity-0';
        return isExiting ? 'animate-fadeOut' : 'opacity-0 animate-fadeInLeft';
    };
    const baseDelay = 0.2;
    // --- UPDATED: Logic reversed to make slide move top → bottom ---
    const getImagePositionClass = (index)=>{
        if (index === currentSlide) {
            return 'translate-y-0';
        }
        if (hasLoaded && index === (currentSlide - 1 + slides.length) % slides.length) {
            return 'translate-y-full'; // outgoing slides move DOWN
        }
        return '-translate-y-full'; // upcoming slides wait ABOVE
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative w-full h-screen overflow-hidden bg-gray-900",
        children: [
            slides.map((s, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `absolute inset-0 transition-all duration-[1500ms] ease-in-out ${getImagePositionClass(index)} ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `h-full w-full ${index === currentSlide ? 'animate-slowZoom' : ''}`,
                        style: {
                            animationFillMode: 'forwards'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                src: s.background,
                                alt: "",
                                fill: true,
                                className: "object-cover"
                            }, void 0, false, {
                                fileName: "[project]/src/components/HeroCarousel.tsx",
                                lineNumber: 314,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 bg-black/50"
                            }, void 0, false, {
                                fileName: "[project]/src/components/HeroCarousel.tsx",
                                lineNumber: 315,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/HeroCarousel.tsx",
                        lineNumber: 308,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, `bg-${s.id}`, false, {
                    fileName: "[project]/src/components/HeroCarousel.tsx",
                    lineNumber: 302,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))),
            slides.map((s, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `absolute inset-0 transition-all duration-[1500ms] ease-in-out ${getImagePositionClass(index)} ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        src: s.foreground,
                        alt: "",
                        fill: true,
                        className: "object-contain object-center"
                    }, void 0, false, {
                        fileName: "[project]/src/components/HeroCarousel.tsx",
                        lineNumber: 326,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, `fg-${s.id}`, false, {
                    fileName: "[project]/src/components/HeroCarousel.tsx",
                    lineNumber: 320,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 p-8 md:p-16 lg:p-24 flex flex-col justify-between z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-white",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: `text-5xl md:text-7xl font-bold leading-tight ${getLeftContentAnimationClass(isAnimatingOut)}`,
                                style: {
                                    animationDelay: `${baseDelay}s`
                                },
                                children: slide.leftContent.title.split('\n').map((line, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "block",
                                        children: line
                                    }, i, false, {
                                        fileName: "[project]/src/components/HeroCarousel.tsx",
                                        lineNumber: 345,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)))
                            }, void 0, false, {
                                fileName: "[project]/src/components/HeroCarousel.tsx",
                                lineNumber: 338,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: `mt-4 text-lg md:text-xl max-w-md ${getLeftContentAnimationClass(isAnimatingOut)}`,
                                style: {
                                    animationDelay: `${baseDelay + 0.2}s`
                                },
                                children: slide.leftContent.subtitle
                            }, void 0, false, {
                                fileName: "[project]/src/components/HeroCarousel.tsx",
                                lineNumber: 350,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: `mt-8 px-8 py-3 bg-teal-500 text-white font-semibold rounded hover:bg-teal-600 transition-colors ${getLeftContentAnimationClass(isAnimatingOut)}`,
                                style: {
                                    animationDelay: `${baseDelay + 0.4}s`
                                },
                                children: slide.leftContent.buttonText
                            }, void 0, false, {
                                fileName: "[project]/src/components/HeroCarousel.tsx",
                                lineNumber: 358,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/HeroCarousel.tsx",
                        lineNumber: 337,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex space-x-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `w-10 h-10 border border-white/50 flex items-center justify-center text-white hover:bg-white/10 ${getLeftContentAnimationClass(isAnimatingOut)}`,
                                style: {
                                    animationDelay: `${baseDelay + 0.6}s`
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$twitter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Twitter$3e$__["Twitter"], {
                                    size: 20
                                }, void 0, false, {
                                    fileName: "[project]/src/components/HeroCarousel.tsx",
                                    lineNumber: 374,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/HeroCarousel.tsx",
                                lineNumber: 368,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `w-10 h-10 border border-white/50 flex items-center justify-center text-white hover:bg-white/10 ${getLeftContentAnimationClass(isAnimatingOut)}`,
                                style: {
                                    animationDelay: `${baseDelay + 0.7}s`
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$facebook$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Facebook$3e$__["Facebook"], {
                                    size: 20
                                }, void 0, false, {
                                    fileName: "[project]/src/components/HeroCarousel.tsx",
                                    lineNumber: 382,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/HeroCarousel.tsx",
                                lineNumber: 376,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `w-10 h-10 border border-white/50 flex items-center justify-center text-white hover:bg-white/10 ${getLeftContentAnimationClass(isAnimatingOut)}`,
                                style: {
                                    animationDelay: `${baseDelay + 0.8}s`
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$instagram$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Instagram$3e$__["Instagram"], {
                                    size: 20
                                }, void 0, false, {
                                    fileName: "[project]/src/components/HeroCarousel.tsx",
                                    lineNumber: 390,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/HeroCarousel.tsx",
                                lineNumber: 384,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/HeroCarousel.tsx",
                        lineNumber: 367,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/HeroCarousel.tsx",
                lineNumber: 336,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-1/2 right-0 -translate-y-1/2 w-full lg:w-1/2 max-w-2xl p-8 md:p-16 lg:p-24 z-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `bg-white p-6 rounded-lg shadow-2xl flex items-center space-x-4 ${getRightContentAnimationClass(isAnimatingOut)}`,
                            style: {
                                animationDelay: `${baseDelay + 0.3}s`
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `w-1/3 ${getRightContentAnimationClass(isAnimatingOut)}`,
                                    style: {
                                        animationDelay: `${baseDelay + 0.4}s`
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        src: slide.rightContent[0].image,
                                        alt: "",
                                        width: 150,
                                        height: 100,
                                        className: "object-contain"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/HeroCarousel.tsx",
                                        lineNumber: 408,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/HeroCarousel.tsx",
                                    lineNumber: 402,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-2/3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: `font-bold text-xl mb-2 ${getRightContentAnimationClass(isAnimatingOut)}`,
                                            style: {
                                                animationDelay: `${baseDelay + 0.5}s`
                                            },
                                            children: slide.rightContent[0].title
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/HeroCarousel.tsx",
                                            lineNumber: 417,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: `text-gray-600 text-sm mb-4 ${getRightContentAnimationClass(isAnimatingOut)}`,
                                            style: {
                                                animationDelay: `${baseDelay + 0.6}s`
                                            },
                                            children: slide.rightContent[0].description
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/HeroCarousel.tsx",
                                            lineNumber: 425,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: `px-5 py-2 bg-teal-500 text-white text-sm font-semibold rounded ${getRightContentAnimationClass(isAnimatingOut)}`,
                                            style: {
                                                animationDelay: `${baseDelay + 0.7}s`
                                            },
                                            children: slide.rightContent[0].buttonText
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/HeroCarousel.tsx",
                                            lineNumber: 433,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/HeroCarousel.tsx",
                                    lineNumber: 416,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/HeroCarousel.tsx",
                            lineNumber: 396,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-2 gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `bg-white p-6 rounded-lg shadow-2xl ${getRightContentAnimationClass(isAnimatingOut)}`,
                                    style: {
                                        animationDelay: `${baseDelay + 0.5}s`
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: `font-bold text-xl mb-2 ${getRightContentAnimationClass(isAnimatingOut)}`,
                                            style: {
                                                animationDelay: `${baseDelay + 0.6}s`
                                            },
                                            children: slide.rightContent[1].title
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/HeroCarousel.tsx",
                                            lineNumber: 450,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: `text-gray-600 text-sm mb-4 ${getRightContentAnimationClass(isAnimatingOut)}`,
                                            style: {
                                                animationDelay: `${baseDelay + 0.7}s`
                                            },
                                            children: slide.rightContent[1].description
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/HeroCarousel.tsx",
                                            lineNumber: 458,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: `px-5 py-2 bg-teal-500 text-white text-sm font-semibold rounded ${getRightContentAnimationClass(isAnimatingOut)}`,
                                            style: {
                                                animationDelay: `${baseDelay + 0.8}s`
                                            },
                                            children: slide.rightContent[1].buttonText
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/HeroCarousel.tsx",
                                            lineNumber: 466,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/HeroCarousel.tsx",
                                    lineNumber: 444,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `bg-teal-500/30 p-6 rounded-lg shadow-2xl flex items-center justify-center cursor-pointer group ${getRightContentAnimationClass(isAnimatingOut)}`,
                                    style: {
                                        animationDelay: `${baseDelay + 0.7}s`
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-16 h-16 rounded-full bg-white/30 group-hover:bg-white/50 transition-colors flex items-center justify-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-white border-b-8 border-b-transparent ml-1"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/HeroCarousel.tsx",
                                            lineNumber: 482,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/HeroCarousel.tsx",
                                        lineNumber: 481,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/HeroCarousel.tsx",
                                    lineNumber: 475,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/HeroCarousel.tsx",
                            lineNumber: 443,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/HeroCarousel.tsx",
                    lineNumber: 395,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/HeroCarousel.tsx",
                lineNumber: 394,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/HeroCarousel.tsx",
        lineNumber: 299,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Carousel;
}),
"[project]/src/app/page.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

// "use client";
// import { useState, useEffect } from 'react';
// import { Phone, Search, Menu, X } from 'lucide-react';
// // Header Component
// const Header = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   // const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   useEffect(() => {
//     const handleScroll = () => setIsScrolled(window.scrollY > 10);
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);
//   const navLinks = ["Home","About Us", "Aquarium", "Features", "Gallery", "Blog", "Contact"];
//   return (
//     <header className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${isScrolled ? 'bg-[#0a1929]' : 'bg-transparent'}`}>
//       <div className="container mx-auto px-6 py-4 flex justify-between items-center">
//         {/* Logo */}
//         {/* <div className="flex items-center space-x-2">
//           <Seahorse className="h-8 w-8 text-cyan-400" />
//           <span className="text-white text-2xl font-bold">AQUAPRO</span>
//         </div> */}
//         {/* Desktop Navigation */}
//         <nav className="hidden md:flex items-center">
//           <ul className="flex items-center space-x-8">
//             {/* Home Dropdown */}
//             {/* Other Links */}
//             {navLinks.map((link) => (
//               <li key={link}>
//                 <a href="#" className="text-white hover:text-cyan-400 transition-colors">{link}</a>
//               </li>
//             ))}
//           </ul>
//         </nav>
//         {/* Right side icons - Desktop */}
//         <div className="hidden md:flex items-center space-x-6">
//           <div className="flex items-center space-x-2">
//             <Phone className="h-5 w-5 text-cyan-400" />
//             <span className="text-white">(800) 123 4567</span>
//           </div>
//           <Search className="h-6 w-6 text-white hover:text-cyan-400 cursor-pointer" />
//         </div>
//         {/* Mobile Menu Button */}
//         <div className="md:hidden">
//           <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white">
//             {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
//           </button>
//         </div>
//       </div>
//       {/* Mobile Menu - Simplified for brevity, can be expanded */}
//       {isMenuOpen && (
//         <div className="md:hidden bg-[#0a1929] py-4">
//           <ul className="flex flex-col items-center space-y-4">
//             <li><a href="#" className="text-cyan-400">Home</a></li>
//             {navLinks.map((link) => (
//               <li key={link}><a href="#" className="text-white hover:text-cyan-400">{link}</a></li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </header>
//   );
// };
// // Preloader Component
// const Preloader = () => (
//   <div className="fixed inset-0 bg-[#0c0c0c] flex justify-center items-center z-[100]">
//     <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-cyan-500"></div>
//   </div>
// );
// // Main Page Component
// const HomePage = () => {
//   const [loading, setLoading] = useState(true);
//   useEffect(() => {
//     // Simulate loading time like in the video
//     const timer = setTimeout(() => setLoading(false), 1500);
//     return () => clearTimeout(timer);
//   }, []);
//   return (
//     <>
//       {loading && <Preloader />}
//       <div className={`transition-opacity duration-1000 ${loading ? 'opacity-0' : 'opacity-100'}`}>
//         <Header />
//         <main>
//           {/* Hero Section */}
//           <section className="h-screen w-full hero-bg flex items-center">
//             <div className="container mx-auto px-6">
//               <div className="text-left text-white max-w-2xl">
//                 <h1 className="text-5xl md:text-7xl font-bold leading-tight">
//                   Aquarium Installation and Maintenance
//                 </h1>
//                 <p className="mt-4 text-xl md:text-2xl text-gray-200">
//                   Fastest and easiest way to cycle your new aquarium.
//                 </p>
//                 <a
//                   href="#"
//                   className="mt-8 inline-block bg-cyan-500 text-white font-bold py-4 px-10 rounded hover:bg-cyan-600 transition-colors duration-300"
//                 >
//                   CONTACT US TODAY!
//                 </a>
//               </div>
//             </div>
//           </section>
//           {/* You can add other sections here */}
//           <section className="py-20 bg-[#0c0c0c]">
//              <div className="container mx-auto text-center">
//                 <h2 className="text-4xl text-white">Other Content Goes Here</h2>
//              </div>
//           </section>
//         </main>
//       </div>
//     </>
//   );
// };
// export default HomePage;
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Header.tsx [app-ssr] (ecmascript)"); // Import the new Header component
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$HeroCarousel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/HeroCarousel.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
// Main Page Component
const HomePage = ()=>{
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const timer = setTimeout(()=>setLoading(false), 1500);
        return ()=>clearTimeout(timer);
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `transition-opacity duration-1000 ${loading ? 'opacity-0' : 'opacity-100'}`,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 152,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                " ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            className: "h-screen w-full flex items-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$HeroCarousel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 156,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 155,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            className: "py-20 bg-[#0c0c0c]",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "container mx-auto text-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-4xl text-white",
                                    children: "Other Content Goes Here"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 177,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 176,
                                columnNumber: 14
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 175,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 153,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 151,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false);
};
const __TURBOPACK__default__export__ = HomePage;
}),
"[project]/node_modules/lucide-react/dist/esm/icons/twitter.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.537.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s({
    "__iconNode": ()=>__iconNode,
    "default": ()=>Twitter
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",
            key: "pff0z6"
        }
    ]
];
const Twitter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("twitter", __iconNode);
;
 //# sourceMappingURL=twitter.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/twitter.js [app-ssr] (ecmascript) <export default as Twitter>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "Twitter": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$twitter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$twitter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/twitter.js [app-ssr] (ecmascript)");
}),

};

//# sourceMappingURL=_81db0d19._.js.map